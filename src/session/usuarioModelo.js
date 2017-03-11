var usuarios = [];
var idGenerator = 1;

function agregar(usuario, nombre, password) {
    usuarios.push({
        id: idGenerator++,
        usuario: usuario,
        nombre: nombre,
        password: password
    });
}

function listar() {
    return usuarios;
}

function buscar(id) {
    return usuarios.filter(function(e) {
        return e.id === id;
    }).shift();
}

function editar(id, usuario, nombre, password) {
    var u = buscar(id);
    u.nombre = nombre;
    u.usuario = usuario;
    u.password = password;
    return u;
}

function eliminar(id) {
    var indice;
    for (var ix = 0; ix < usuarios.length; ix++) {
        if (usuarios[ix].id === id) {
            indice = ix;
            break;
        }
    }
    usuarios.splice(indice, 1);
}

function login(usuario, password) {
    return usuarios.filter(function(e) {
        return e.usuario === usuario 
            && e.password === password;
    }).shift();
}

module.exports = {
    listar: listar,
    buscar: buscar,
    agregar: agregar,
    editar: editar,
    eliminar: eliminar,
    login: login
};