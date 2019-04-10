import * as express from 'express';
import * as React    from 'react';
import * as ReactDom from 'react-dom/server';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components'
import client from 'client'; // will changed to require('./public/client.js') in prod
import Routes, * as routing from 'routing/back';

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

Routes.forEach(name => Server.use(routing[name]));

Server.get('*', function(req, res) {
  let store = req._reduxStore;
  let context = {};
  
  let serverProvider = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <ReactApp />
      </StaticRouter>
    </Provider>);

  try {
    const sheet = new ServerStyleSheet();
    const css = sheet.getStyleTags();
    const html = ReactDom.renderToString(serverProvider);
    return res.end(renderHTML(html, css, store.getState()));
  } catch(e) {
    return res.end(renderHTML('Something went wrong on the server!<br />' + e.message));
  }
});
Server.listen(process.env.SERVER_PORT, ()=>console.log('Server is runing!'));

function renderHTML(appContent: any, css = '', state = {}) {
  return `
  <!DOCTYPE html>
  <html lang="en"> 
    <head> 
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width">
      <title>WHEN I DO LEARN REACT I CRAZZY</title>
      ${css}
      <script>window.REDUX_STATE = ${JSON.stringify(state)}</script>
    </head>
    <body>
      <div id="app-root">${appContent}</div>
      <script type="application/javascript" src="${assetUrl}public/${clientName}"></script>
    </body>
  </html>
  `;
}