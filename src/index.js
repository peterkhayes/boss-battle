import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from './redux/store';
import { gatekeeperMode } from './redux/actions';

import './index.css';

const store = createStore();
window.store = store;

// Hacky routing -- if the user loads with the "#gatekeeper" fragment,
// then configure the store to load the gatekeeper UI
if (window.location.hash === '#gatekeeper') {
  store.dispatch(gatekeeperMode());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
