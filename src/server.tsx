import * as express from 'express';
import * as React from 'react';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import { StaticRouterContext } from 'react-router';
import * as ReactDom from 'react-dom/server';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import configureStore from './store';
import { Provider as RouterContextProvider } from '~/components/Router/RouterContext';
import ExternalComponent from '~/components/ExternalComponent';
import ServerWrapper from '~/server-wrapper';

export default function init(rootUrl: string, share: string[] = []) {
  const publicPath = process.env.PUBLIC_PATH || '/';
  const Server = express();

  if (true) { // TODO: if (itIsSandbox) skip static server
    // const hashSuffix = process.env.NODE_ENV === 'development' ? '' : '-' + __webpack_hash__; // TODO: add suffix for cache static

    share.forEach(fp => Server.use(express.static(fp)));
    Server.use(express.static(path.join(eval('__dirname'), './public/'))); // eslint-disable-line no-eval
  }

  Server.use(bodyParser.json());
  Server.use(async (req, res, next) => {
    const store = configureStore();
    const routerContext: StaticRouterContext = {};
    const envContext = { store, req, res, routerContext };
    const sheet = new ServerStyleSheet();

    const wrappComponent = (el: React.ReactElement) => (
      <ServerWrapper {...envContext}>
        {el}
      </ServerWrapper>
    );

    try {
      const jsx = sheet.collectStyles(wrappComponent(
        <RouterContextProvider value={{ full_id: 'base', full_dir: '', full_path: '' }}>
          <ExternalComponent href={rootUrl} />
        </RouterContextProvider>
      ));

      let html = ReactDom.renderToString(jsx);
      let state = store.getState();
      let { promises }: { promises: Promise<any>[]} = state.asyncComponent;
      let promisesEntries = Object.entries(promises);

      do {
        // eslint-disable-next-line no-loop-func
        const wrappedPromises = promisesEntries.map(async ([id, promise]) => {
          const chunk = await promise;
          const wrappedChunk = wrappComponent(chunk);
          const strChunk = ReactDom.renderToString(wrappedChunk);

          html = html.replace(new RegExp(`<div\\sdata-async-id="${id}.*?<\\/div>`, 'mi'), strChunk);
          store.dispatch({ type: 'REMOVE_ASYNC_COMPONENT_PROMISE', payload: { id } });
        });
        await Promise.all(wrappedPromises); // eslint-disable-line no-await-in-loop

        state = store.getState();
        promises = state.asyncComponent.promises;
        promisesEntries = Object.entries(promises);

        if (routerContext.url) {
          res.redirect(302, routerContext.url);
          next();
        }
      } while (promisesEntries.length);

      const JSONstate = JSON.stringify(state);
      const helmet = Helmet.renderStatic();

      return res.end(`
        <!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
          <head>
            ${helmet.title.toString()}
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width" />
            <link rel="stylesheet" href="${publicPath}client.css" />
            <script>
              window.REDUX_STATE = ${JSONstate};
              window.ROOT_COMPONENT_HREF = '${rootUrl}';
            </script>
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            ${sheet.getStyleTags()}
          </head>
          <body ${helmet.bodyAttributes.toString()}>
          <div id="app-root">${html}</div>
            ${helmet.script.toString()}
            <script type="application/javascript" src="${publicPath}client.js"></script>
          </body>
        </html>
      `);
    } catch (e) {
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
    } finally {
      sheet.seal();
    }
  });

  return Server;
}

if (eval('!module.parent')) {
  const host = process.argv[2] || '0.0.0.0';
  const port = process.argv[3] || '8080';
  const rootUrl = process.argv[4] || 'http://localhost:8080/index.js';

  init(rootUrl).listen(+port, host, () => console.log('Server is runing!'));
}
