import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import * as React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import * as ReactDom from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheet } from 'styled-components'
import Helmet from 'react-helmet';
import { Provider as EnvFacadeProvider, createContext as createEnvContext } from '~/utils/env-middleware/FacadeContext';
import createEnvMiddlewareFacade from '~/utils/env-middleware/createServerFacade';

import { App as ReactApp, configureStore } from '~/client'; // It must be optimized, when will be implemented "mode: universal" in webpack.
import { promises, asyncComponentState, functionCallCounter } from '~/widgets/AsyncComponent/state';

const Server = express();

// First we send static if it was request for file
Server.use(express.static(path.join(__dirname, process.env.NODE_ENV === 'development' ? `../public/` : `./public/`)));
// Than if it is not static path we pass store to routes
Server.all('*', async (req, res, next) => {
  const store = configureStore();
  req._reduxStore = store;
  // TODO: make it more explicity
  functionCallCounter.value = 0;
  promises.length = 0;
  asyncComponentState.length = 0;
  next();
});
Server.post('/*', bodyParser.json());
// If it is GET request than we send rendered html
Server.all('*', async function(req, res, next) {
  const store = req._reduxStore;
  const routerContext = {};
  const context = createEnvContext(store, req, res);
  const middlewareFacade = createEnvMiddlewareFacade(context, next);

  const wrappComponent = (el: React.ReactElement ) => (
    <EnvFacadeProvider value={middlewareFacade}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={routerContext}>
          {el}
        </StaticRouter>
      </Provider>
    </EnvFacadeProvider>
  );
  
  try {
    const extractor = new ChunkExtractor({ statsFile: path.resolve(__dirname,'../dist/client-stats.json') });
    const sheet = new ServerStyleSheet();
    const helmet = Helmet.renderStatic();
    const state = JSON.stringify(store.getState());
    const jsx = extractor.collectChunks(wrappComponent(<ReactApp />));
    let html = ReactDom.renderToString(jsx);
    const resolvedChunks = await Promise.all(promises);

    resolvedChunks.forEach((chunk, key) => {
      const wrappedChunk = wrappComponent(chunk);
      const strChunk = ReactDom.renderToString(wrappedChunk)
      html = html.replace(new RegExp(`<div\\sdata-async-id="${key}"\>.*?<\\/div>`, 'mi'), strChunk);
    });
    
    return res.end(`
      <!DOCTYPE html>
      <html ${helmet.htmlAttributes.toString()}> 
        <head> 
          ${helmet.title.toString()}
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <script>window.ASYNC_COMPONENT_STATE = ${JSON.stringify(asyncComponentState)}</script>
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