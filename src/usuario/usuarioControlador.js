var usuarioModelo = require('./usuarioModelo');

function listar (req, res){
    res.render('usuario/listar', { 
        titulo: 'Usuarios',
        usuarios: usuarioModelo.listar() 
    });
}

function mostrarNuevo(req, res) {
    res.render('usuario/nuevo', {
        titulo: 'Nuevo usuario',
        usuario: {}
    });
}

function crear(req, res) {
    usuarioModelo.agregar(req.body.usuario, req.body.nombre, req.body.password);
    res.redirect('/usuario');
}

function listarUno(req, res) {
    var id = parseInt(req.params.id, 10);
    var usuario = usuarioModelo.buscar(id);
    res.render('usuario/ver', {
        usuario: usuario
    });
}

function mostrarEditar(req, res) {
    var id = parseInt(req.params.id, 10);
    var usuario = usuarioModelo.buscar(id);
    res.render('usuario/nuevo', {
        titulo: 'Editar usuario',
        usuario: usuario
    });
}

function editar(req, res) {
    var id = parseInt(req.params.id, 10);
    var usuario = usuarioModelo.editar(id, req.body.usuario, req.body.nombre, req.body.password);
    res.render('usuario/ver', {
        usuario: usuario
    });
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