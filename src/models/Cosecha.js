class Cosecha {
    constructor(
        numero,
        fincaCodigo,
        temporada,
        variedadCafe,
        cantidadProducida,
        fechaRecoleccion,
        estado
    ) {
        this.numero = numero;
        this.fincaCodigo = fincaCodigo;
        this.temporada = temporada;
        this.variedadCafe = variedadCafe;
        this.cantidadProducida = cantidadProducida;

        this.saldoKg = cantidadProducida;

        this.fechaRecoleccion = fechaRecoleccion;
        this.estado = estado;
    }
}

module.exports = Cosecha;