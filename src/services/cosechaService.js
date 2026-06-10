const {
    leerDatos,
    guardarDatos
} = require("./dataService");

const ARCHIVO = "cosechas.json";

function crearCosecha(cosecha) {

    const cosechas = leerDatos(ARCHIVO);

    const existe = cosechas.find(
        c => c.numero === cosecha.numero
    );

    if (existe) {
        throw new Error(
            "Ya existe una cosecha con ese número"
        );
    }

    cosechas.push(cosecha);

    guardarDatos(
        ARCHIVO,
        cosechas
    );

    return cosecha;
}

function listarCosechas() {
    return leerDatos(ARCHIVO);
}

function buscarCosecha(numero) {

    const cosechas = leerDatos(ARCHIVO);

    return cosechas.find(
        c => c.numero === numero
    );
}

function actualizarCosecha(numero, datos) {

    const cosechas = leerDatos(ARCHIVO);

    const indice = cosechas.findIndex(
        c => c.numero === numero
    );

    if (indice === -1) {
        throw new Error(
            "Cosecha no encontrada"
        );
    }

    cosechas[indice] = {
        ...cosechas[indice],
        ...datos
    };

    guardarDatos(
        ARCHIVO,
        cosechas
    );

    return cosechas[indice];
}

function eliminarCosecha(numero) {

    const cosechas = leerDatos(ARCHIVO);

    const indice = cosechas.findIndex(
        c => c.numero === numero
    );

    if (indice === -1) {
        throw new Error(
            "Cosecha no encontrada"
        );
    }

    cosechas.splice(indice, 1);

    guardarDatos(
        ARCHIVO,
        cosechas
    );

    return true;
}

module.exports = {
    crearCosecha,
    listarCosechas,
    buscarCosecha,
    actualizarCosecha,
    eliminarCosecha
};