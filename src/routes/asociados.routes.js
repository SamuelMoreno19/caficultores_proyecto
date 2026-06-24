const express = require("express");

const router = express.Router();

const Asociado = require("../models/Asociado");

const {
    crearAsociado,
    listarAsociados,
    buscarAsociado,
    actualizarAsociado,
    eliminarAsociado
} = require("../services/asociadoService");


// Crear asociado
router.post("/", (req, res) => {

    try {

        const {
            identificacion,
            nombre,
            telefono,
            aniosCaficultor,
            estado
        } = req.body;

        const asociado = new Asociado(
            identificacion,
            nombre,
            telefono,
            aniosCaficultor,
            estado
        );

        const nuevoAsociado =
            crearAsociado(asociado);

        res.status(201).json(
            nuevoAsociado
        );

    } catch (error) {

        res.status(400).json({
            mensaje: error.message
        });

    }
});


// Listar asociados
router.get("/", (req, res) => {

    const { estado } = req.query;
    let lista = listarAsociados();

    if (estado) {
        lista = lista.filter(
            a => a.estado === estado
        );
    }

    res.json(lista);
});


// Buscar asociado por ID
router.get("/:id", (req, res) => {

    const asociado = buscarAsociado(req.params.id);

    if (!asociado) {
        return res.status(404).json({
            mensaje: "Asociado no encontrado"
        });
    }

    res.json(asociado);
});


// Actualizar asociado
router.put("/:id", (req, res) => {

    try {

        const asociadoActualizado =
            actualizarAsociado(
                req.params.id,
                req.body
            );

        res.json(asociadoActualizado);

    } catch (error) {

        res.status(404).json({
            mensaje: error.message
        });

    }
});


// Eliminar asociado
router.delete("/:id", (req, res) => {

    try {

        eliminarAsociado(req.params.id);

        res.json({
            mensaje: "Asociado eliminado correctamente"
        });

    } catch (error) {

        res.status(400).json({
            mensaje: error.message
        });

    }
});


module.exports = router;