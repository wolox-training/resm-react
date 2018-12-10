import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from 'app';

import store from './redux/store';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
