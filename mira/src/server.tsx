import * as express from 'express';
import * as path from 'path';
import * as React from 'react';
import * as bodyParser from 'body-parser';

import { StaticRouterContext } from 'react-router';
import * as ReactDom from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'
import Helmet from 'react-helmet';
import configureStore from '~/system/store';
import { Provider as RouterContextProvider } from '~/system/components/Router/RouterContext';
import ExternalRouter from '~/system/components/Router';
import ExternalComponent from '~/system/components/ExternalComponent';
import ExternalModule from '~/system/components/PageModule';
import AsyncComponent from '~/system/components/AsyncComponent';
import ServerWrapper from '~/system/server-wrapper';

export default function init(rootUrl: string) {
  const hashSuffix = process.env.NODE_ENV === 'development' ? '' : '-' + __webpack_hash__;
  const Server = express();

  if (process.env.NODE_ENV !== 'development' && typeof CLIENT_JS_FILE_CONTENTS === 'string') {
    const f = CLIENT_JS_FILE_CONTENTS;
    Server.use(`/client${hashSuffix}.js`, (req, res, next) => {
      res.header('Content-Type', 'application/javascript; charset=UTF-8');
      res.header('Content-Length', Buffer.byteLength(f, 'utf8').toString())
      res.send(f);
    });
  }

  Server.all('*', async (req, res, next) => {
    const store = configureStore();
    req._reduxStore = store;
    next();
  });
  Server.all('/*', bodyParser.json());
  Server.all('*', async function(req, res, next) {
    const store = req._reduxStore;
    const routerContext: StaticRouterContext = {};

    const wrappComponent = (el: React.ReactElement ) => (
      <ServerWrapper {...{store, req, res, routerContext}}>
        {el}
      </ServerWrapper>
    );
    
    try {
      const sheet = new ServerStyleSheet();
      const providedModules = { AsyncComponent, ExternalModule, ExternalComponent, ExternalRouter };
      const jsx = wrappComponent(
        <RouterContextProvider value={{ full_id: 'base', full_dir: '', full_path: '', middlewares: {} }}>
          <ExternalComponent url={rootUrl} provide={providedModules} />
        </RouterContextProvider>
      );

      let html = ReactDom.renderToString(jsx);
      let state = store.getState();
      let { promises }: { promises: Promise<any>[]} = state.asyncComponent;
      let promisesEntries = Object.entries(promises);

      do {
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
        promisesEntries = Object.entries(promises);
        
        if (routerContext.url) {
          res.redirect(302, routerContext.url)
          next();
        }
      } while (promisesEntries.length);

      const JSONstate = JSON.stringify(state);
      const helmet = Helmet.renderStatic();

      const clientUrl = process.env.NODE_ENV === 'development' ? process.env.HOT_SERVER : '';
      const mainJs = `${clientUrl}/client${hashSuffix}.js`
      const mainCss = `${clientUrl}/client${hashSuffix}.css`

      return res.end(`
        <!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}> 
          <head> 
            ${helmet.title.toString()}
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width" />
            <link rel="stylesheet" href="${mainCss}" />
            <script>window.REDUX_STATE = ${JSONstate}</script>
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            ${sheet.getStyleTags()}
          </head>
          <body ${helmet.bodyAttributes.toString()}>
          <div id="app-root">${html}</div>
            ${helmet.script.toString()}
            <script type="application/javascript" src="${mainJs}"></script>
          </body>
        </html>
      `);
    } catch(e) {
      console.error('Critical server error:\n', e) 
      return res.status(500).end(`
        <!DOCTYPE html>
        <html>
          <head><title>Server error</title></head>
          <body>
            <h1>Something went wrong on the server</h1>
          </body>
        </html>
      `);
    }
  });

  return Server;
}

if (!module.parent) {
  const port = process.argv[2];
  const rootUrl = process.argv[3];

  init(rootUrl).listen(port, () => console.log('Server is runing!'));
}