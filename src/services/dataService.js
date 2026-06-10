const fs = require("fs");
const path = require("path");

function leerDatos(nombreArchivo) {

    const ruta = path.join(
        __dirname,
        "..",
        "data",
        nombreArchivo
    );

    const datos = fs.readFileSync(
        ruta,
        "utf-8"
    );

    return JSON.parse(datos);
}

function guardarDatos(nombreArchivo, datos) {

    const ruta = path.join(
        __dirname,
        "..",
        "data",
        nombreArchivo
    );

    fs.writeFileSync(
        ruta,
        JSON.stringify(datos, null, 2)
    );
}

module.exports = {
    leerDatos,
    guardarDatos
};