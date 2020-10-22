



module.exports = {
  top: function(data){ 
var list = [];
var string = "";
var result;
  data.items.forEach(function (track, index) {
    list.push(index+1 + " ");
    list.push(track.name);
    list.push("<br>");
    //console.log(track.name);
    //console.log(index+1);
    string.concat(track.name);
    //string.concat("<br>");
    //var brk = list.split(',');
    var neww = JSON.stringify(list);
    //var res = brk.join(" <br> ");

   // document.write(track.name);
   //var result = list.replace(",", "");
   var newlist = list.join(",");
   result = newlist.replace(/,/g, '');
    // Removing all the commas
    console.log(result);


    console.log(result);
    //document.write("  \n");
    //document.body.innerHTML = "<h1>Today's date is " + track.name + "</h1>"
    //list.push("\n");
    console.log(result);
    //console.log(string);
  }
)
return result;
},
topLove: function(data){ 
  var list = [];
  var string = "";
  var result;
  data.artists.items.forEach(function (track, index) {
      list.push(index+1 + " ");
      list.push(track.name);
      list.push("<br>");
      //console.log(track.name);
      //console.log(index+1);
      string.concat(track.name);
      //string.concat("<br>");
      //var brk = list.split(',');
      var neww = JSON.stringify(list);
      //var res = brk.join(" <br> ");
  
     // document.write(track.name);
     //var result = list.replace(",", "");
     var newlist = list.join(",");
     result = newlist.replace(/,/g, '');
      // Removing all the commas
      console.log(result);
  
  
      console.log(result);
      //document.write("  \n");
      //document.body.innerHTML = "<h1>Today's date is " + track.name + "</h1>"
      //list.push("\n");
      console.log(result);
      //console.log(string);
    }
  )
  return result;
  },
  multiply: function(a,b) { 
    return a*b
  }
};
//export default function  TTopArtists();
/*
var TTopArtists = function(data){ 
  var list = [];
  var string = "";
      data.items.forEach(function (track, index) {
        list.push(index+1 + " ");
        list.push(track.name);
        list.push("<br>");
        //console.log(track.name);
        //console.log(index+1);
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
        console.log(result);
        return result;

        console.log(result);
        //document.write("  \n");
        //document.body.innerHTML = "<h1>Today's date is " + track.name + "</h1>"
        //list.push("\n");
        console.log(result);
        //console.log(string);
      }
  )
}

module.export = TTopArtists;
*/
/*
TTopArtists () ;{
  var list = [];
  var string = "";
  spotifyApi.getMyTopArtists({limit:20}).then(
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
        return result;
        //document.getElementById('TopArtists').innerHTML = result ;
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
*/