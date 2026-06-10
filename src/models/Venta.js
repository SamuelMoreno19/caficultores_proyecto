class Venta {
    constructor(
        numeroVenta,
        cosechaNumero,
        comprador,
        fecha,
        cantidadVendida,
        precioKg
    ) {
        this.numeroVenta = numeroVenta;
        this.cosechaNumero = cosechaNumero;
        this.comprador = comprador;
        this.fecha = fecha;
        this.cantidadVendida = cantidadVendida;
        this.precioKg = precioKg;

        this.total = cantidadVendida * precioKg;
    }
}

module.exports = Venta;