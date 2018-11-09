import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
