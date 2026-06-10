const {
    leerDatos,
    guardarDatos
} = require("./dataService");

function crearVenta(venta) {

    const ventas = leerDatos(
        "ventas.json"
    );

    const cosechas = leerDatos(
        "cosechas.json"
    );

    const cosecha = cosechas.find(
        c => c.numero === venta.cosechaNumero
    );

    if (!cosecha) {
        throw new Error(
            "Cosecha no encontrada"
        );
    }

    if (
        venta.cantidadVendida >
        cosecha.saldoKg
    ) {
        throw new Error(
            "Cantidad insuficiente en inventario"
        );
    }

    cosecha.saldoKg -=
        venta.cantidadVendida;

    ventas.push(venta);

    guardarDatos(
        "ventas.json",
        ventas
    );

    guardarDatos(
        "cosechas.json",
        cosechas
    );

    return venta;
}

function listarVentas() {
    return leerDatos(
        "ventas.json"
    );
}

module.exports = {
    crearVenta,
    listarVentas
};