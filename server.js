var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello PSR');
})

var server = app.listen(9090, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Simple server listening at http://%s:%s", host, port)
})