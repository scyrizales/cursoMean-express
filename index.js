var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var entradaApp = require('./src/entrada');
var sessionApp = require('./src/session');
var authCheck =require('./src/authCheck');

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(session({ secret: 'MyMeanCourse', resave: false, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: false }));

//middleware logger
app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next(); 
});
//middleware session
app.use('/', sessionApp);
app.use(authCheck);
app.use('/entrada', entradaApp);



app.listen(8080);