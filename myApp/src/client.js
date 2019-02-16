import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from 'store';
 

let store;
let App = require('containers/App.jsx').default;

if(typeof document !== 'undefined') {
    store = configureStore(window.REDUX_STATE);

    function render() {
        App = require('./containers/App').default;
        ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>,
            document.getElementById('react-root')
        );
    }

    render();
    if (module.hot)
        module.hot.accept('./containers/App', () => render(App));
}

export default {App, configureStore};