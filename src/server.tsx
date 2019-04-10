import * as express from 'express';
import * as React    from 'react';
import * as ReactDom from 'react-dom/server';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';

import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheet } from 'styled-components'
import Helmet, { HelmetData } from 'react-helmet';

import client from 'client'; // will changed to require('./public/client.js') in prod
import Routes from 'routing/back';

const statsFile = path.join(__dirname, '../build/loadable-stats.json');

const extractor = new ChunkExtractor({ statsFile })

let clientName: string, assetUrl: string, staticPath: string;

if(process.env.NODE_ENV === 'development') {
  staticPath = path.join(__dirname, `../public/`);
  assetUrl = `http://${process.env.HMR_SERVER_HOST}:${process.env.HMR_SERVER_PORT}/`;
  clientName = `client.js`;
} else { // if prod will be require from client bundle
  staticPath = path.join(__dirname, `./public/`);
  assetUrl = '/';
  clientName = `client-${__webpack_hash__}.js`;
} 

const Server = express();
const ReactApp = client.App;

Server.use(`/favicon.ico`, express.static(path.join(staticPath, 'favicon.ico')));
Server.use(`/public`, express.static(staticPath));
Server.use(`/public/${clientName}`, express.static(path.join(__dirname, `/public/client.js`)));
Server.post(`/UPDATE_STORE`, bodyParser.json(), (req, res) => {
  // const store = client.configureStore(req.body.REDUX_STATE); // ADD CHECK 
  res.redirect(302, 'back');
});

Server.get('*', async (req, res, next) => {
  const store = client.configureStore();
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
    const jsx = extractor.collectChunks(serverProvider);
    const sheet = new ServerStyleSheet();
    const css = sheet.getStyleTags();
    const html = ReactDom.renderToString(jsx);

    return res.end(renderHTML(html, css, store.getState()));
  } catch(e) {
    return res.end(renderHTML('Something went wrong on the server!<br />' + e.message));
  }
});
Server.listen(process.env.SERVER_PORT, () => console.log('Server is runing!'));

function renderHTML(appContent: any, css = '', state = {}) {
  const helmet = Helmet.renderStatic();

  return `
  <!DOCTYPE html>
  <html ${helmet.htmlAttributes.toString()}> 
    <head> 
      ${helmet.title.toString()}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${css}
      <script>window.REDUX_STATE = ${JSON.stringify(state)}</script>
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="app-root">${appContent}</div>
      <script type="application/javascript" src="${assetUrl}public/${clientName}"></script>
    </body>
  </html>
  `;
}