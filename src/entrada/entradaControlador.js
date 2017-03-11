var entradaModelo = require('./entradaModelo');

function listar (req, res){
    res.render('entrada/listar', { 
        titulo: 'Entradas',
        entradas: entradaModelo.listar() 
    });
}

function mostrarNuevo(req, res) {
    res.render('entrada/nuevo', {
        titulo: 'Nueva entrada',
        entrada: {}
    });
}

function crear(req, res) {
    entradaModelo.agregar(req.body.titulo, req.body.texto);
    res.redirect('/entrada');
}

function listarUno(req, res) {
    var id = parseInt(req.params.id, 10);
    var entrada = entradaModelo.buscar(id);
    res.render('entrada/ver', {
        entrada: entrada
    });
}

function mostrarEditar(req, res) {
    var id = parseInt(req.params.id, 10);
    var entrada = entradaModelo.buscar(id);
    res.render('entrada/nuevo', {
        titulo: 'Nueva entrada',
        entrada: entrada
    });
}

function editar(req, res) {
    var id = parseInt(req.params.id, 10);
    var entrada = entradaModelo.editar(id, req.body.titulo, req.body.texto);
    res.render('entrada/ver', {
        entrada: entrada
    });
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