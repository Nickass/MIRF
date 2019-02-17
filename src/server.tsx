import * as express from 'express';
import * as React    from 'react';
import * as ReactDom from 'react-dom/server';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import client from 'client'; // will changed to require('./static/client.js') in prod

let clientName: string, assetUrl: string;

if(process.env.NODE_ENV === 'development') {
  assetUrl = `http://${process.env.HMR_SERVER_HOST}:${process.env.HMR_SERVER_PORT}/`;
  clientName = `client.js`;
} else { // if prod will be require from client bundle
  assetUrl = '/';
  clientName = `client-${__webpack_hash__}.js`;
} 

const Server = express();
const ReactApp = client.App;
let [store] = client.configureStore();


Server.use(`/static`, express.static(path.join(__dirname, `/static/`)));
Server.use(`/static/${clientName}`, express.static(path.join(__dirname, `/static/client.js`)));
Server.post(`/UPDATE_STORE`, bodyParser.json(), (req, res) => {
  [store] = client.configureStore(req.body.REDUX_STATE); // ADD CHECK 
  res.redirect(302, 'back');
});
Server.use(function(req, res) {
  let context = {};

  let serverProvider = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <ReactApp />
      </StaticRouter>
    </Provider>);

  return res.end(renderHTML(ReactDom.renderToString(serverProvider)));
});
Server.listen(process.env.SERVER_PORT, ()=>console.log('Server is runing!'));

function renderHTML(appContent: any) {
  return `
  <!DOCTYPE html>
  <html lang="en"> 
    <head> 
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width">
      <title>WHEN I DO LEARN REACT I CRAZZY</title>
      <script>window.REDUX_STATE = ${JSON.stringify(store.getState())}</script>
    </head>
    <body>
      <div id="app-root">${appContent}</div>
      <script type="application/javascript" src="${assetUrl}static/${clientName}"></script>
    </body>
  </html>
  `;
}