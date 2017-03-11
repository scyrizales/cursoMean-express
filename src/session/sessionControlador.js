var usuarioModelo = require('./usuarioModelo');
var layout = require('../layout');

function welcome(req, res) {
    var usuario = req.session.usuario;
    layout('session/welcome', { nombre: usuario.nombre }, res);
}

function mostrarlogin(req, res) {
    layout('session/login', { error: '' }, res);
}

function login(req, res) {
    console.log('login');
    var usuario = usuarioModelo.login(req.body.usuario, req.body.password)
    if (usuario){
        req.session.authenticated = true;
        req.session.usuario = usuario;
        res.redirect('/');
    } else {
        console.log('error en login');
        layout('session/login', { error: 'No existe el usuario' }, res);
    }
}

module.exports = {
    welcome: welcome,
    mostrarlogin: mostrarlogin,
    login: login
}