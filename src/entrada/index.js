var express = require('express');
var entradaApp = express();
var entradaControlador = require('./entradaControlador');

entradaApp.get("/", entradaControlador.listar);
entradaApp.get("/nuevo", entradaControlador.mostrarNuevo);
entradaApp.post("/nuevo", entradaControlador.crear);
entradaApp.get('/:id', entradaControlador.listarUno);
entradaApp.get('/:id/editar', entradaControlador.mostrarEditar);
entradaApp.post('/:id/editar', entradaControlador.editar);
entradaApp.post('/:id/eliminar', entradaControlador.eliminar);

module.exports = entradaApp;