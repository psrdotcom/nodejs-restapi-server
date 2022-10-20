const express = require('express');
const app = express();
const port = 9090
    
app.get('/', (req, res) => {
    res.send('Hello PSR');
})

app.listen(port, () => {
    console.log("Simple server listening at http://localhost:%s", port)
})
