import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import * as React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import * as ReactDom from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'
import Helmet from 'react-helmet';
import { Provider as EnvFacadeProvider } from '~/system/env-facade/FacadeContext';
import createEnvFacade from '~/system/env-facade/createServerFacade'

import configureStore from '~/system/store';
import ReactApp from '~/App';

const Server = express();

// First we send static if it was request for file
Server.use(express.static(path.join(__dirname, process.env.NODE_ENV === 'development' ? `../public/` : `./public/`)));
// Than if it is not static path we pass store to routes
Server.all('*', async (req, res, next) => {
  const store = configureStore();
  req._reduxStore = store;
  next();
});
Server.post('/*', bodyParser.json());
// If it is GET request than we send rendered html 
Server.all('*', async function(req, res, next) {
  const store = req._reduxStore;
  const routerContext = {};
  const envFacade = createEnvFacade({store});

  const wrappComponent = (el: React.ReactElement ) => (
    <EnvFacadeProvider value={envFacade}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={routerContext}>
          {el}
        </StaticRouter>
      </Provider>
    </EnvFacadeProvider>
  );
  
  try {
    const sheet = new ServerStyleSheet();
    const jsx = wrappComponent(<ReactApp />);

    let html = ReactDom.renderToString(jsx);
    let state = store.getState();
    let { promises }: { promises: Promise<any>[]} = state.asyncComponent;

    do {
      const promisesEntries = Object.entries(promises);
      const wrappedPromises = promisesEntries.map(async ([id, promise]) => {
        const chunk = await promise;
        const wrappedChunk = wrappComponent(chunk);
        const strChunk = ReactDom.renderToString(wrappedChunk);
        html = html.replace(new RegExp(`<div\\sdata-async-id="${id}.*?<\\/div>`, 'mi'), strChunk);
        store.dispatch({ type: 'REMOVE_ASYNC_COMPONENT_PROMISE', payload: { id } });
      });
      await Promise.all(wrappedPromises);
      
      state = store.getState();
      promises = state.asyncComponent.promises;
    } while (promises.length)

    const JSONstate = JSON.stringify(state);
    const helmet = Helmet.renderStatic();
    
    return res.end(`
      <!DOCTYPE html>
      <html ${helmet.htmlAttributes.toString()}> 
        <head> 
          ${helmet.title.toString()}
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <script>window.REDUX_STATE = ${JSONstate}</script>
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          ${sheet.getStyleTags()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
          <div id="app-root">${html}</div>
          ${helmet.script.toString()}
          <script type="application/javascript" src="http://localhost:8080/public/main.js"></script>
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