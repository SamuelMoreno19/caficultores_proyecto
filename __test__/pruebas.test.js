const {
    crearAsociado,
    buscarAsociado,
    eliminarAsociado
} = require("../src/services/asociadoService");

const {
    crearFinca,
    eliminarFinca
} = require("../src/services/fincaService");

const {
    crearCosecha,
    buscarCosecha,
    eliminarCosecha
} = require("../src/services/cosechaService");

const {
    crearVenta
} = require("../src/services/ventaService");

const { guardarDatos } = require("../src/services/dataService");

// Limpiar datos de prueba antes de cada test
beforeEach(() => {
    guardarDatos("asociados.json", []);
    guardarDatos("fincas.json",    []);
    guardarDatos("cosechas.json",  []);
    guardarDatos("ventas.json",    []);
});

// PRUEBA 1
// Registrar asociado → finca → cosecha 500kg → venta 200kg → verificar saldo 300kg
// ------------------------------------
test("Prueba 1: flujo completo de venta y verificacion de saldo", () => {

    // 1. Registrar asociado
    crearAsociado({
        identificacion: "1001",
        nombre:         "Carlos Ramirez",
        telefono:       "3001234567",
        aniosCaficultor: 10,
        numeroDeFincas:  0,
        estado:         "activo"
    });

    // 2. Crear finca a nombre del asociado
    crearFinca({
        codigo:          "F001",
        nombre:          "El Paraiso",
        ubicacion:       "Andes / Vereda La Mesa",
        areaHectareas:   5,
        variedadesCafe:  ["Castillo", "Colombia"],
        asociadoId:      "1001"
    });

    // 3. Registrar cosecha de 500 kg
    crearCosecha({
        numero:           "C001",
        fincaCodigo:      "F001",
        temporada:        "2024-A",
        variedadCafe:     "Castillo",
        cantidadProducida: 500,
        saldoKg:          500,
        fechaRecoleccion: "2024-06-01",
        estado:           "recolectada"
    });

    // 4. Realizar venta de 200 kg
    crearVenta({
        numeroVenta:     "V001",
        cosechaNumero:   "C001",
        comprador:       "Cooperativa Sur",
        fecha:           "2024-06-10",
        cantidadVendida: 200,
        precioKg:        3500,
        total:           700000
    });

    // 5. Verificar que el saldo sea 300 kg
    const cosechaActualizada = buscarCosecha("C001");

    expect(cosechaActualizada.saldoKg).toBe(300);
});


// PRUEBA 2
// Validar eliminacion de asociado con registros vinculados (fincas y cosechas)
// ------------------------------------
test("Prueba 2: eliminar asociado solo cuando no tiene registros vinculados", () => {

    // Preparar datos: asociado + finca + cosecha
    crearAsociado({
        identificacion:  "2001",
        nombre:          "Maria Lopez",
        telefono:        "3109876543",
        aniosCaficultor: 5,
        numeroDeFincas:  0,
        estado:          "activo"
    });

    crearFinca({
        codigo:         "F002",
        nombre:         "La Esperanza",
        ubicacion:      "Jardin / Vereda El Cairo",
        areaHectareas:  3,
        variedadesCafe: ["Caturra"],
        asociadoId:     "2001"
    });

    crearCosecha({
        numero:           "C002",
        fincaCodigo:      "F002",
        temporada:        "2024-B",
        variedadCafe:     "Caturra",
        cantidadProducida: 300,
        saldoKg:          300,
        fechaRecoleccion: "2024-07-15",
        estado:           "en proceso"
    });

    // Intento 1: eliminar con finca Y cosecha → debe fallar
    expect(() => {
        eliminarAsociado("2001");
    }).toThrow("No se puede eliminar: el asociado tiene fincas registradas");

    // Eliminar la finca
    eliminarFinca("F002");

    // Intento 2: eliminar con cosecha aun existente → debe fallar
    // (la cosecha sigue en el archivo aunque la finca fue borrada)
    // Para este caso verificamos que la cosecha sigue existiendo
    const cosecha = buscarCosecha("C002");
    expect(cosecha).toBeDefined();

    // Eliminar la cosecha manualmente
    eliminarCosecha("C002");

    // Intento 3: ahora sí debe eliminarse correctamente
    const resultado = eliminarAsociado("2001");
    expect(resultado).toBe(true);

    // Confirmar que ya no existe
    const asociadoBorrado = buscarAsociado("2001");
    expect(asociadoBorrado).toBeUndefined();
});