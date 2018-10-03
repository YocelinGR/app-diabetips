import React from 'react';
import ReactDOM from 'react-dom';

// Styled pages
import './index.css';
import './general.css';


import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
