const express = require("express");

const router = express.Router();

const Finca = require("../models/Finca");

const {
    crearFinca,
    listarFincas,
    buscarFinca,
    actualizarFinca,
    eliminarFinca
} = require("../services/fincaService");

router.post("/", (req, res) => {

    try {

        const {
            codigo,
            nombre,
            ubicacion,
            areaHectareas,
            variedadesCafe,
            asociadoId
        } = req.body;

        const finca = new Finca(
            codigo,
            nombre,
            ubicacion,
            areaHectareas,
            variedadesCafe,
            asociadoId
        );

        const nuevaFinca = crearFinca(finca);

        res.status(201).json(nuevaFinca);

    } catch (error) {

        res.status(400).json({
            mensaje: error.message
        });

    }

});

router.get("/", (req, res) => {
    res.json(listarFincas());
});

router.get("/:codigo", (req, res) => {

    const finca = buscarFinca(
        req.params.codigo
    );

    if (!finca) {
        return res.status(404).json({
            mensaje: "Finca no encontrada"
        });
    }

    res.json(finca);

});

router.put("/:codigo", (req, res) => {

    try {

        const finca =
            actualizarFinca(
                req.params.codigo,
                req.body
            );

        res.json(finca);

    } catch (error) {

        res.status(404).json({
            mensaje: error.message
        });

    }

});

router.delete("/:codigo", (req, res) => {

    try {

        eliminarFinca(
            req.params.codigo
        );

        res.json({
            mensaje: "Finca eliminada correctamente"
        });

    } catch (error) {

        res.status(404).json({
            mensaje: error.message
        });

    }

});

module.exports = router;