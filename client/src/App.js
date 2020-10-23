import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './pages/Main';
import InfoPage from './pages/InfoPage';

  function App() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Main}/>
        <Route exact path='/InfoPage' component={InfoPage}/>
      </BrowserRouter>

      )
    }
  
export default App;