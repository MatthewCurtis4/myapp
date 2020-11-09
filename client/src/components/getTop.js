



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


  }
)
return result;
}
};
