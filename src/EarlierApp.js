import React, { Component } from 'react';
import './App.css';
//import TTopArtists from './getArtist';
import sample1 from './sample';
//import './getArtist.js';
/* eslint-disable */
import SpotifyWebApi from 'spotify-web-api-js';
//require('getArtist.js')();
const spotifyApi = new SpotifyWebApi();
var playlists = [];

//var getArtist = require('./getArtist');
//console.log(typeof GetArtist.testTopArtists); // => 'function'
//console.log(typeof getArtist.bar); // => 'function'
//console.log(typeof tools.zemba); // => undefined
class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    if (params.access_token) {
      spotifyApi.setAccessToken(params.access_token);
  }
    this.state = {
      loggedIn: params.access_token ? true : false,
      
      TopArtist: { name: 'Not Checked' },
      nowPlaying: { name: 'Not Checked', albumArt: '' }
      ,TopArtists: { name: 'Not Checked', popularity: '' },
      Playlists: { name: 'Not Checked' },
      Artiststuff: {name: []},
      UsersTopArtists: {name: []}
    }
      this.playlists = [];
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

      /*  
        function (data) {
          self.playlists.push(console.log(data));
        },
        function (err) {
          console.error(err);
        }
        */
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

  getTopTracksCONSOLE(){
    spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB').then(function(data) {
      console.log('The most popular tracks for David Bowie is..');
      console.log('Drum roll..');
      console.log('...');

      //data.body.tracks.forEach(function(track, index) {
        //console.log(
        //  index +
        //    1 +
        //    '. ' +
        //    track.name +
        //    ' (popularity is ' +
        //    track.popularity +
         //   ')'
       // );
     // });
    });}
  
    test () {
        spotifyApi.searchArtists('Love', {limit:15}).then(
          function (data) { 
            var tools = require('./getArtist.js');
            var value = tools.topLove(data);
            //console.log(value);
            //console.log(tools.multiply(5,4));
            //var returnResult = sample1("SampleString");
            document.getElementById('results').innerHTML = value ;
      });
      }

tesTopArtists () {
  var list = [];
  var string = "";
  spotifyApi.getMyTopArtists({limit:60}).then(
    function (data) {
      data.items.forEach(function (track, index) {
        list.push(index+1 + " ");
        list.push(track.name);
        list.push("<br>");
        console.log(track.name);
        console.log(index+1);
        string.concat(track.name);
        //string.concat("<br>");
        //var brk = list.split(',');
        var neww = JSON.stringify(list);
        //var res = brk.join(" <br> ");

       // document.write(track.name);
       //var result = list.replace(",", "");
       var newlist = list.join(",");
       var result = newlist.replace(/,/g, '');
        // Removing all the commas
        document.getElementById('TopArtists').innerHTML = result ;
        //document.write("  \n");
        //document.body.innerHTML = "<h1>Today's date is " + track.name + "</h1>"
        //list.push("\n");
        console.log(result);
        //console.log(string);
      }
  )
    },
    function (err) {
      console.error(err);
    }
  );


  //JSON.stringify(list);
  var energy = list.join();
  //list.join();
  //list.split(',').join("<br />");
  console.log(energy);
  var x = list.toString();
  console.log(x);
this.setState({
  UsersTopArtists: { 
    name: x
  }
});

}

testTopArtists(){
  spotifyApi.getMyTopArtists({limit:60}).then(
    function (data) { 
      var tools = require('./getArtist.js');
      var value = tools.top(data);
      //console.log(value);
      //console.log(tools.multiply(5,4));
      //var returnResult = sample1("SampleString");
      document.getElementById('TopArtists').innerHTML = value ;
});
}


  ordertop(response){
    while (this.state.TopArtists.name.items[i] != null){
      list.push(this.state.TopArtists.name.items[i].name) 
    }
      var x = list.toString();
      return x
  }
  render() {
    return (
      <div className="App">
        <a href='http://localhost:8888' > Login to Spotify </a>

        <ul>
  <li><a href="#FavArtists">Favorite Artists</a></li>
  <li><a href="#FavSongs">Favorite Songs</a></li>
  <li class="dropdown">
    <a href="#" class="dropbtn">Other</a>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </li>
</ul>

        
        <h2><b>Want To See Your Top Streamed Artists?</b></h2>
        <h3>Select a Time Range</h3>
        <div class="row">
                <div class="col">
                    <a href="https://ampl.ink/j4blV">Past Month</a>
                </div>
                <div class="col">
                    <a href="https://ampl.ink/VD2Ke">Past 6 Months</a>
                </div>
                <div class="col">
                    <a href="https://ampl.ink/nDwYA">All Time</a>  
                </div>        
            </div>
      <div id="bottom_pane_options">
     <button onclick="this.test();">Try It</button>
     <div id="results"></div>
      </div>

      <div id="bottom_pane_options">
     <button onclick="this.testTopArtists();">Find your top artists</button>
     <div id="TopArtists"></div>
      </div>

      <div>
          Top Artists: { this.state.UsersTopArtists.name }
        </div>
        <div>
          Now Playing: { this.state.nowPlaying.name }
        </div>
        <div>
                Your Top Song is: { this.state.TopArtists.name }
          </div>
          <div>
                Top 1 love: {this.state.Artiststuff.name[0]}
          </div>     


          <div>
                Your Top Song popularity is: { this.state.TopArtists.popularity }
          </div>
        <div>
                Your Top Playlists are: { this.state.Playlist }
          </div>
          <div>
                Your Top Artists are: { this.state.TopArtist.topArtist }
          </div>
        <div>
          <img src={this.state.nowPlaying.image} style={{ height: 150 }}/>
        </div>
        { this.state.loggedIn &&
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
        }
        { this.state.loggedIn &&
          <button onClick={() => this.getTopTracks()}>
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
          <button onClick={() => this.getTopTracksCONSOLE()}>
            Get top for person
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
    );
  }
}
        /*
          <div>
                Your Top Artists are: { this.state.topArtists.name }
          </div>
          */
          /*
          <div>
                Top love: {this.state.Artiststuff.name.forEach(function (track) 
                { track.name;} )}
          </div>
          */
export default App;