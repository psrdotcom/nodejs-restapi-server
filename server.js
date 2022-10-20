let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('Hello PSR');
})

let server = app.listen(9090, function(){
    const host = server.address().address
    const port = server.address().port

    console.log("Simple server listening at http://%s:%s", host, port)
})
