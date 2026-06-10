class Asociado {
    constructor(
        identificacion,
        nombre,
        telefono,
        aniosCaficultor,
        estado = "activo"
    ) {
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.telefono = telefono;
        this.aniosCaficultor = aniosCaficultor;
        this.estado = estado;
    }
}

module.exports = Asociado;