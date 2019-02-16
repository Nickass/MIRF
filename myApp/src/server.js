import express from 'express';
import ReactDom from 'react-dom/server';
import React    from 'react';
import path from 'path';
import bodyParser from 'body-parser';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import client from 'client'; // will changed to require('./static/client.js') in prod

let clientName, assetUrl;

if(process.env.NODE_ENV === 'development') {
  assetUrl = 'http://localhost:8080/';
  clientName = `client.js`;
} else { // if prod will be require from client bundle
  assetUrl = '/';
  clientName = `client-${__webpack_hash__}.js`;
} 

const Server = express();
const ReactApp = client.App;
var store = client.configureStore();


Server.use(`/static`, express.static(path.join(__dirname, `/static/`)));
Server.use(`/static/${clientName}`, express.static(path.join(__dirname, `/static/client.js`)));
Server.post(`/UPDATE_STORE`, bodyParser.json(), (req, res) => {
  console.log(req.body);
  store = client.configureStore(req.body.REDUX_STATE); // ADD CHECK 
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
Server.listen(3001, ()=>console.log('Server is runing!'));


function renderHTML(appContent) {
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
      <div id="react-root">${appContent}</div>
      <script type="application/javascript" src="${assetUrl}static/${clientName}"></script>
    </body>
  </html>
  `;
}