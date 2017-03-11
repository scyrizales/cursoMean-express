var entradas = [
    {
        id: 1,
        titulo: 'Entrada 1',
        texto: 'Esta es mi primera entrada q genial'
    },
    {
        id: 2,
        titulo: 'Entrada 2',
        texto: 'El virus ha mutado'
    }
];
var idGenerator = 3;

function agregar(titulo, texto) {
    entradas.push({
        id: idGenerator++,
        titulo: titulo,
        texto: texto
    });
}

function listar() {
    return entradas;
}

function buscar(id) {
    return entradas.filter(function(e) {
        return e.id === id;
    }).shift();
}

function editar(id, titulo, texto) {
    var entrada = buscar(id);
    entrada.titulo = titulo;
    entrada.texto = texto;
    return entrada;
}

function eliminar(id) {
    var indice;
    for (var ix = 0; ix < entradas.length; ix++) {
        if (entradas[ix].id === id) {
            indice = ix;
            break;
        }
    }
    entradas.splice(indice, 1);
}

module.exports = {
    listar: listar,
    buscar: buscar,
    agregar: agregar,
    editar: editar,
    eliminar: eliminar
};