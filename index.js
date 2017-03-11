var express = require('express');
var app = express();
var entradaApp = require('./src/entrada');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/calculos/calcularIGV', function(req, res) {
    var monto = req.query.monto;
    var igv = monto * 0.19
    res.render('calcularIGV', {
        monto: monto,
        igv, igv
    });
});

app.use('/entrada', entradaApp);

app.listen(8080);