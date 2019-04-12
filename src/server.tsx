import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import * as React    from 'react';
import * as ReactDom from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import Helmet, { HelmetData } from 'react-helmet';
import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheet } from 'styled-components'

import { App as ReactApp, configureStore } from 'client'; // It must be optimized, when will be implemented "mode: universal" in webpack.
import Routes from 'routing/back';


const Server = express();

Server.use(express.static(path.join(__dirname, process.env.NODE_ENV === 'development' ? `../public/` : `./public/`)));
Server.post(`/UPDATE_STORE`, bodyParser.json(), (req, res) => {
  // const store = configureStore(req.body.REDUX_STATE); // ADD CHECK 
  res.redirect(302, 'back');
});

Server.get('*', async (req, res, next) => {
  const store = configureStore();
  req._reduxStore = store;
  next();
});

for (let Route of Routes) {
  Server.use(Route);
}

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
Server.listen(process.env.SERVER_PORT, () => console.log('Server is runing!'));