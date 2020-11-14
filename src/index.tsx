import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Middleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from './store/thunk-middleware';

import './index.css';
import App from './App';
import rootReducer from './store';
import reportWebVitals from './reportWebVitals';

const customMiddleWare: Middleware = store => next => action => {
    console.log('Middleware triggered:', action);

    next(action);
};

const composeEnhancer = composeWithDevTools({});
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, customMiddleWare)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
