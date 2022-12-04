import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todos from './modules';

const store = createStore(todos);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);