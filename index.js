var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/calculos/calcularIGV', function(req, res) {
    var monto = req.query.monto;
    var igv = monto * 0.19
    res.render('calcularIGV', {
        monto: monto,
        igv, igv
    });
});

app.listen(8080);