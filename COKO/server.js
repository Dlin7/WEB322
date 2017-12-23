var express = require('express');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var app = express();
var port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cookieParser());

app.get('/', function(req, res){
    res.cookie('cookie1', 'Hello cookie1 is created');
    res.send('This site uses cookies');
});

//npm install nodemon --save -g
//nodemon server.js
app.listen(port, function() {
    console.log('server started and listening at port: ' + port)

})