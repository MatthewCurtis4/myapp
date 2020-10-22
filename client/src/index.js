import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import NavBar from './components/header/navBar';
//ReactDOM.render(<NavBar/>, document.getElementById('navBar'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


//diff index.js