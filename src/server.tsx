import * as express from 'express';
import * as path from 'path';

import * as React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import * as ReactDom from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheet } from 'styled-components'
import Helmet from 'react-helmet';

import Routes from '~/server/routing';
import { App as ReactApp, configureStore } from '~/client'; // It must be optimized, when will be implemented "mode: universal" in webpack.


const Server = express();

// First we send static if it was request for file
Server.use(express.static(path.join(__dirname, process.env.NODE_ENV === 'development' ? `../public/` : `./public/`)));
// Than if it is not static path we pass store to routes
Server.get('*', async (req, res, next) => {
  const store = configureStore();
  req._reduxStore = store;
  next();
});
// Here, we connect routers which add state to the store or send json with data if it was POST request
Server.use(Routes);
// If it is GET request than we send rendered html
Server.get('*', function(req, res) {
  const store = req._reduxStore;
  const context = {};

  const serverProvider = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <ReactApp />
      </StaticRouter>
    </Provider>
  );
  
  try {
    const extractor = new ChunkExtractor({ statsFile: path.resolve(__dirname,'../dist/client-stats.json') });
    const sheet = new ServerStyleSheet();
    const helmet = Helmet.renderStatic();
    const state = JSON.stringify(store.getState());
    const jsx = extractor.collectChunks(serverProvider);
    const html = ReactDom.renderToString(jsx);

    return res.end(`
      <!DOCTYPE html>
      <html ${helmet.htmlAttributes.toString()}> 
        <head> 
          ${helmet.title.toString()}
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <script>window.REDUX_STATE = ${state}</script>
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          ${sheet.getStyleTags()}
          ${extractor.getLinkTags()}
          ${extractor.getStyleTags()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
          <div id="app-root">${html}</div>
          ${extractor.getScriptTags()}
        </body>
      </html>
    `);
  } catch(e) {
    console.log('error:', e)
    return res.end(`Something went wrong on the server!<br />${e.message}`);
  }
});

// Run server
Server.listen(process.env.SERVER_PORT, () => console.log('Server is runing!'));