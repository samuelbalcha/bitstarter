var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
       
    response.send(getContent());
});

function getContent(){
    var c  = fs.readFileSync('./index.html', "utf8");
    console.log(c);
    return c;
}

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});