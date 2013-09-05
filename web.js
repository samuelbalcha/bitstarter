var express = require('express');
var fs = require('fs');


//var app = express.createServer(express.logger());
var app = express();

//app.set('port', process.env.PORT || 8080);

app.get('/', function(request, response) {       
    response.send(getContent());
});

function getContent(){
    var c  = fs.readFileSync('./index.html', "utf8");
  //  console.log(c);
    return c;
}

app.get('/orders', function(req, res){
   // todo
 });

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});
