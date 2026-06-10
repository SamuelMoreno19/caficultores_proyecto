const {
    leerDatos,
    guardarDatos
} = require("./dataService");

const ARCHIVO = "fincas.json";

function crearFinca(finca) {

    const fincas = leerDatos(ARCHIVO);

    const existe = fincas.find(
        f => f.codigo === finca.codigo
    );

    if (existe) {
        throw new Error(
            "Ya existe una finca con ese código"
        );
    }

    fincas.push(finca);

    guardarDatos(
        ARCHIVO,
        fincas
    );

    return finca;
}

function listarFincas() {
    return leerDatos(ARCHIVO);
}

function buscarFinca(codigo) {

    const fincas = leerDatos(ARCHIVO);

    return fincas.find(
        f => f.codigo === codigo
    );
}

function actualizarFinca(codigo, datos) {

    const fincas = leerDatos(ARCHIVO);

    const indice = fincas.findIndex(
        f => f.codigo === codigo
    );

    if (indice === -1) {
        throw new Error(
            "Finca no encontrada"
        );
    }

    fincas[indice] = {
        ...fincas[indice],
        ...datos
    };

    guardarDatos(
        ARCHIVO,
        fincas
    );

    return fincas[indice];
}

function eliminarFinca(codigo) {

    const fincas = leerDatos(ARCHIVO);

    const indice = fincas.findIndex(
        f => f.codigo === codigo
    );

    if (indice === -1) {
        throw new Error(
            "Finca no encontrada"
        );
    }

    fincas.splice(indice, 1);

    guardarDatos(
        ARCHIVO,
        fincas
    );

    return true;
}

module.exports = {
    crearFinca,
    listarFincas,
    buscarFinca,
    actualizarFinca,
    eliminarFinca
};