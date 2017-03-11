var express = require('express');
var sessionApp = express();
var sessionControlador = require('./sessionControlador');
var usuarioControlador = require('./usuarioControlador');
var authCheck =require('../authCheck');

sessionApp.get("/login", sessionControlador.mostrarlogin);
sessionApp.post("/login", sessionControlador.login);
sessionApp.get("/usuario/nuevo", usuarioControlador.mostrarNuevo);
sessionApp.post("/usuario/nuevo", usuarioControlador.crear);
sessionApp.use(authCheck);
sessionApp.get("/usuario", usuarioControlador.listar);
sessionApp.get('/usuario/:id', usuarioControlador.listarUno);
sessionApp.get('/usuario/:id/editar', usuarioControlador.mostrarEditar);
sessionApp.post('/usuario/:id/editar', usuarioControlador.editar);
sessionApp.post('/usuario/:id/eliminar', usuarioControlador.eliminar);
sessionApp.get("/", sessionControlador.welcome);

module.exports = sessionApp;