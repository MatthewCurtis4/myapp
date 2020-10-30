import React, { Component } from 'react';
import '../App.css';


/* eslint-disable */

import 'bootstrap/dist/css/bootstrap.min.css';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();
var playlists = [];


export class GetInfo extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    if (params.access_token) {
      spotifyApi.setAccessToken(params.access_token);
  }
    this.state = {
      loggedIn: params.access_token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }

    }
    this.artiststate = {
      loggedIn: params.access_token ? true : false,
    }
    this.list = [];
  }
  
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: { 
              name: response.item.name, 
              image: response.item.album.images[0].url
            }
        });
      })
  }
  Getplaylists(){
    spotifyApi
      .getUserPlaylists()
      .then((response) => {
        this.setState({
          Playlists: { 
              name : response.items[0].name
            }
          });
        })
    }


      GetArtists(){
      spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3').then(
        function (data) {
          //this.setState({topArtist: data})
          //console.log('User playlists', data);
        },
        function (err) {
          console.error(err);
        }
      );
      }
  topforperson(){
    spotifyApi
    .getArtistTopTracks()
    .then(function(data) {
      // Set the access token on the API object so that it's used in all future requests
      spotifyApi.setAccessToken(data.body['access_token']);
  
      // Get the most popular tracks by David Bowie in Great Britain
      return spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB');
    })
    .then(function(data) {
      console.log('The most popular tracks for David Bowie is..');
      console.log('Drum roll..');
      console.log('...');
  
      /*
       * 1. Space Oddity - 2009 Digital Remaster (popularity is 51)
       * 2. Heroes - 1999 Digital Remaster (popularity is 33)
       * 3. Let's Dance - 1999 Digital Remaster (popularity is 20)
       * 4. ...
      */
      data.body.tracks.forEach(function(track, index) {
        console.log(
          index +
            1 +
            '. ' +
            track.name +
            ' (popularity is ' +
            track.popularity +
            ')'
        );
      });
    })
    .catch(function(err) {
      console.log('Unfortunately, something has gone wrong.', err.message);
    });}
  getTopTracks(){
    spotifyApi.getMyTopTracks()
    .then((response) => {
      this.setState({
        TopArtists: { 
          name: response.items[0].album.name, 
          popularity: response.items[0].popularity
        }
      });
    })
  }



testTopArtists(T_range){
  spotifyApi.getMyTopArtists({limit:20, time_range:T_range}).then(
    function (data) { 
      var tools = require('./getArtist.js');
      //got top from getArtist.js
      var value = tools.top(data);

      document.getElementById('TopArtists').innerHTML = value ;
});
}

testTopTracks(T_range){
  spotifyApi.getMyTopTracks({limit:20, time_range:T_range}).then(
    function (data) { 
      var tools = require('./getArtist.js');
      var value = tools.top(data);

      document.getElementById('TopTracks').innerHTML = value ;
});
}


/*
  ordertop(response){
    while (this.state.TopArtists.name.items[i] != null){
      list.push(this.state.TopArtists.name.items[i].name) 
    }
      var x = list.toString();
      return x
  }
  */
  render() {
    return (
        
<div className="App">


<h1><b>Welcome to SpotiStat</b></h1>
  

  <h3><b>Want To See Your Top Streamed Artists?</b></h3>
  <h4><b>Select a Time Range</b></h4>
  <div className="row">
          <div className="col">
          { this.state.loggedIn &&
    <button onClick={() => this.testTopArtists("short_term")}>
      Past Month
    </button>}
          </div>
          <div className="col">
          { this.state.loggedIn &&
    <button onClick={() => this.testTopArtists("medium_term")}>
      Past 6 Months
    </button>}
          </div>
          <div className="col">
          { this.state.loggedIn &&
    <button onClick={() => this.testTopArtists("long_term")}>
      All Time
    </button>}
          </div>        
      </div>

      <div id="TopArtists"></div>

      <h3><b>Want To See Your Top Streamed Artists?</b></h3>
  <h4><b>Select a Time Range</b></h4>
  <div className="row">
          <div className="col">
          { this.state.loggedIn &&
    <button onClick={() => this.testTopTracks("short_term")}>
      Past Month
    </button>}
          </div>
          <div className="col">
          { this.state.loggedIn &&
    <button onClick={() => this.testTopTracks("medium_term")}>
      Past 6 Months
    </button>}
          </div>
          <div className="col">
          { this.state.loggedIn &&
    <button onClick={() => this.testTopTracks("long_term")}>
      All Time
    </button>}
          </div>        
      </div>

            <div id="results"></div>


     
     <div id="TopTracks"></div>


        <div>
          <img src={this.state.nowPlaying.image} style={{ height: 150 }}/>
        </div>
        { this.state.loggedIn &&
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
        }
        { this.state.loggedIn &&
          <button onClick={() => this.getTopTracks("medium_term")}>
            Top Tracks
          </button>
  }
          { this.state.loggedIn &&
          <button onClick={() => this.Getplaylists()}>
            Get Playlists
          </button>}
          { this.state.loggedIn &&
          <button onClick={() => this.GetArtists()}>
            Get Artist
          </button>}

          { this.state.loggedIn &&
          <button onClick={() => this.test()}>
            test
          </button>}

          { this.state.loggedIn &&
          <button onClick={() => this.testTopArtists()}>
            test Top Artists
          </button>}
      </div>
      )
          }
        }
  
export default GetInfo;