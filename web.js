var async = require('async');
var express = require('express');
var fs = require('fs');
var http = require('http');
var https = require('https');
//var db = require('./models');

//var app = express.createServer(express.logger());
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT ||8080);

app.get('/', function(request, response) {       
    response.send(getContent());
});

function getContent(){
    var c  = fs.readFileSync('./index.html', "utf8");
  //  console.log(c);
    return c;
}

app.get('/orders', function(req, res){

 });

app.listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'));
});
