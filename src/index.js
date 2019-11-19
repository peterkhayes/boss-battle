import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from './redux/store';
import { resetState } from './redux/state';

import './index.css';

const store = createStore();
window.store = store;
window.reset = resetState;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
