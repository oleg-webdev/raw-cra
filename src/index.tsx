import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('ROOT IS MISSED!!!');
}

const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
