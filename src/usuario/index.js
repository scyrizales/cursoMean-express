var express = require('express');
var entradaApp = express();
var usuarioControlador = require('./usuarioControlador');

entradaApp.get("/", usuarioControlador.listar);
entradaApp.get("/nuevo", usuarioControlador.mostrarNuevo);
entradaApp.post("/nuevo", usuarioControlador.crear);
entradaApp.get('/:id', usuarioControlador.listarUno);
entradaApp.get('/:id/editar', usuarioControlador.mostrarEditar);
entradaApp.post('/:id/editar', usuarioControlador.editar);
entradaApp.post('/:id/eliminar', usuarioControlador.eliminar);

module.exports = entradaApp;