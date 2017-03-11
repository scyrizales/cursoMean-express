var entradaModelo = require('./entradaModelo');
var layout = require('../layout');

function listar (req, res){
    layout('entrada/listar', { 
        titulo: 'Entradas',
        entradas: entradaModelo.listar() 
    }, res);
}

function mostrarNuevo(req, res) {
    layout('entrada/nuevo', {
        titulo: 'Nueva entrada',
        entrada: {}
    }, res);
}

function crear(req, res) {
    entradaModelo.agregar(req.body.titulo, req.body.texto);
    res.redirect('/entrada');
}

function listarUno(req, res) {
    var id = parseInt(req.params.id, 10);
    var entrada = entradaModelo.buscar(id);
    layout('entrada/ver', {
        entrada: entrada
    }, res);
}

function mostrarEditar(req, res) {
    var id = parseInt(req.params.id, 10);
    var entrada = entradaModelo.buscar(id);
    layout('entrada/nuevo', {
        titulo: 'Nueva entrada',
        entrada: entrada
    }, res);
}

function editar(req, res) {
    var id = parseInt(req.params.id, 10);
    var entrada = entradaModelo.editar(id, req.body.titulo, req.body.texto);
    layout('entrada/ver', {
        entrada: entrada
    }, res);
}

function eliminar(req, res) {
    var id = parseInt(req.params.id, 10);
    entradaModelo.eliminar(id);
    res.redirect('/entrada');
}

module.exports = {
    listar: listar,
    mostrarNuevo: mostrarNuevo,
    crear: crear,
    listarUno: listarUno,
    mostrarEditar: mostrarEditar,
    editar: editar,
    eliminar: eliminar
};