var express = require('express');
var cookieParser = require('cookie');
var session = require('express-session');
var morgan = require('morgan');

var port = process.env.PORT || 2500;

app.use(morgan('dev'));
app.use(cookieParser());

app.use(session({
    secret: 'axa-byb=cwd',
    saveUnitialized: true,
    resave: true,
}));

app.get('/', function(req, res){
    res.send('create session data ');
});

app.listen(port, function(){
    console.log('server started at port: ' + port)
    console.log(req.session);
});


