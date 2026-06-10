class Finca {
    constructor(
        codigo,
        nombre,
        ubicacion,
        areaHectareas,
        variedadesCafe,
        asociadoId
    ) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.areaHectareas = areaHectareas;
        this.variedadesCafe = variedadesCafe;
        this.asociadoId = asociadoId;
    }
}

module.exports = Finca;