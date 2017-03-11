var express = require('express');
var app = express();
var entradaApp = require('./src/entrada');
var usuarioApp = require('./src/usuario');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/entrada', entradaApp);
app.use('/usuario', usuarioApp);

app.get('/', function(req, res) {
    res.render('welcome');
});

app.listen(8080);