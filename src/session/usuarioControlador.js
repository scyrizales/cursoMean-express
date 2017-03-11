var usuarioModelo = require('./usuarioModelo');
var layout = require('../layout');

function listar (req, res){
    layout('usuario/listar', { 
        titulo: 'Usuarios',
        usuarios: usuarioModelo.listar() 
    }, res);
}

function mostrarNuevo(req, res) {
    layout('usuario/nuevo', {
        titulo: 'Nuevo usuario',
        usuario: {}
    }, res);
}

function crear(req, res) {
    usuarioModelo.agregar(req.body.usuario, req.body.nombre, req.body.password);
    res.redirect('/login');
}

function listarUno(req, res) {
    var id = parseInt(req.params.id, 10);
    var usuario = usuarioModelo.buscar(id);
    layout('usuario/ver', {
        usuario: usuario
    }, res);
}

function mostrarEditar(req, res) {
    var id = parseInt(req.params.id, 10);
    var usuario = usuarioModelo.buscar(id);
    layout('usuario/nuevo', {
        titulo: 'Editar usuario',
        usuario: usuario
    }, res);
}

function editar(req, res) {
    var id = parseInt(req.params.id, 10);
    var usuario = usuarioModelo.editar(id, req.body.usuario, req.body.nombre, req.body.password);
    layout('usuario/ver', {
        usuario: usuario
    }, res);
}

function eliminar(req, res) {
    var id = parseInt(req.params.id, 10);
    usuarioModelo.eliminar(id);
    res.redirect('/usuario');
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