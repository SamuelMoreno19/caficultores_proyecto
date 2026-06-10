const {
    leerDatos,
    guardarDatos
} = require("./dataService");

const ARCHIVO = "asociados.json";

function crearAsociado(asociado) {

    const asociados = leerDatos(ARCHIVO);

    const existe = asociados.find(
        a => a.identificacion === asociado.identificacion
    );

    if (existe) {
        throw new Error(
            "Ya existe un asociado con esa identificación"
        );
    }

    asociados.push(asociado);

    guardarDatos(
        ARCHIVO,
        asociados
    );

    return asociado;
}

function listarAsociados() {

    return leerDatos(
        ARCHIVO
    );
}

function buscarAsociado(id) {

    const asociados = leerDatos(
        ARCHIVO
    );

    return asociados.find(
        a => a.identificacion === id
    );
}

function actualizarAsociado(id, datosActualizados) {

    const asociados = leerDatos(
        ARCHIVO
    );

    const indice = asociados.findIndex(
        a => a.identificacion === id
    );

    if (indice === -1) {
        throw new Error(
            "Asociado no encontrado"
        );
    }

    asociados[indice] = {
        ...asociados[indice],
        ...datosActualizados
    };

    guardarDatos(
        ARCHIVO,
        asociados
    );

    return asociados[indice];
}

function eliminarAsociado(id) {

    const asociados = leerDatos(
        ARCHIVO
    );

    const indice = asociados.findIndex(
        a => a.identificacion === id
    );

    if (indice === -1) {
        throw new Error(
            "Asociado no encontrado"
        );
    }

    asociados.splice(
        indice,
        1
    );

    guardarDatos(
        ARCHIVO,
        asociados
    );

    return true;
}

module.exports = {
    crearAsociado,
    listarAsociados,
    buscarAsociado,
    actualizarAsociado,
    eliminarAsociado
};