":" //; exec /usr/bin/env node --harmony "$0" "$@";

import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import * as React from 'react';
import { StaticRouterContext } from 'react-router';
import * as ReactDom from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'
import Helmet from 'react-helmet';
import configureStore from '~/system/store';
import App from '~/App';
import { staticEndpoint } from '~/system/api'
import axios from 'axios';
import ServerWrapper from '~/server-wrapper';


export default function init(clientUrl: string, indexUrl: string) {
  const hashSuffix = process.env.NODE_ENV === 'development' ? '' : '-' + __webpack_hash__;
  const Server = express();
  
  Server.use(`/client${hashSuffix}.js`, express.static(__dirname + `/client${hashSuffix}.js`));
  // // First we send static if it was request for file
  // Server.use(express.static(path.join(__dirname, process.env.NODE_ENV === 'development' ? `../public/` : `./public/`)));
  // Than if it is not static path we pass store to routes
  Server.all('*', async (req, res, next) => {
    const store = configureStore();
    req._reduxStore = store;
    next();
  });
  Server.post('/*', bodyParser.json());
  // If it is GET request than we send rendered html 
  Server.all('*', async function(req, res, next) {
    const { data: clientStats } = await staticEndpoint.get('/stats.json');
    const store = req._reduxStore;
    const routerContext: StaticRouterContext = {};
  
    const wrappComponent = (el: React.ReactElement ) => (
      <ServerWrapper {...{store, req, res, clientStats, routerContext}}>
        {el}
      </ServerWrapper>
    );
    
    try {
      const sheet = new ServerStyleSheet();
      const jsx = wrappComponent(<App />);

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
      console.log('Server error:', e)
      return res.status(500).end(`
        <!DOCTYPE html>
        <html>
          <head></head>
          <body>
            <h1>Something went wrong on the server!<br />${e.message}</h1>
            <pre>${e.stack}</pre>
          </body>
        </html>
      `);
    }
  });

  return Server;
}

if (!module.parent) {
  init(
    `http://${process.env.STATIC_SERVER_HOST}:${process.env.STATIC_SERVER_PORT}`,
    `http://${process.env.STATIC_SERVER_HOST}:${process.env.STATIC_SERVER_PORT}`
  )
  .listen(
    // process.env.SERVER_HOST,
    process.env.SERVER_PORT,
    () => console.log('Server is runing!')
  );
}