var express = require('express');
var app = express();
app.get('/',function(request,response){
	response.send("hello");
});


var server = app.listen(8000, function () {
  var port = server.address().port

  console.log("Example app listening at http://:%s", port)

});