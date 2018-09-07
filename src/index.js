import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Admin from './Admin'
// import Home from './pages/router_demo/router1/Home'
// import IRouter from './pages/router_demo/router2/Router'
import Router from './Router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Router / > , document.getElementById('root'));
registerServiceWorker();
