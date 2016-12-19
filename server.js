var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;


app.use(function(req, res, next) {
    if(req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'))

app.get('/', function (req, res) {
   res.send("Hello World!"); 
});

app.listen(PORT, function(){
    console.log(`Listen on port ${PORT}...`);
});