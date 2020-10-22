import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './pages/Main';


  function App() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Main}/>
      </BrowserRouter>

      )
    }
  
export default App;
  /*
  use 
      <Switch>
            Route path='/whatever' component={whatever}/>
    </Switch>
    in the return statement if you have a sub folder components with .js
    file in it all all that is above that switch will stay on page even at switch
*/    


        /*
          <div>
                Your Top Artists are: { this.state.topArtists.name }
          </div>
          <div>
                Top love: {this.state.Artiststuff.name.forEach(function (track) 
                { track.name;} )}
          </div>
          */
