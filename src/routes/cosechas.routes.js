const express = require("express");

const router = express.Router();

const Cosecha = require("../models/Cosecha");

const {
    crearCosecha,
    listarCosechas,
    buscarCosecha,
    actualizarCosecha,
    eliminarCosecha
} = require("../services/cosechaService");

router.post("/", (req, res) => {

    try {

        const {
            numero,
            fincaCodigo,
            temporada,
            variedadCafe,
            cantidadProducida,
            fechaRecoleccion,
            estado
        } = req.body;

        const cosecha = new Cosecha(
            numero,
            fincaCodigo,
            temporada,
            variedadCafe,
            cantidadProducida,
            fechaRecoleccion,
            estado
        );

        const nuevaCosecha =
            crearCosecha(cosecha);

        res.status(201).json(
            nuevaCosecha
        );

    } catch (error) {

        res.status(400).json({
            mensaje: error.message
        });

    }

});

router.get("/", (req, res) => {
    res.json(
        listarCosechas()
    );
});

router.get("/:numero", (req, res) => {

    const cosecha =
        buscarCosecha(
            req.params.numero
        );

    if (!cosecha) {

        return res.status(404).json({
            mensaje: "Cosecha no encontrada"
        });

    }

    res.json(cosecha);

});

router.put("/:numero", (req, res) => {

    try {

        const cosecha =
            actualizarCosecha(
                req.params.numero,
                req.body
            );

        res.json(cosecha);

    } catch (error) {

        res.status(404).json({
            mensaje: error.message
        });

    }

});

router.delete("/:numero", (req, res) => {

    try {

        eliminarCosecha(
            req.params.numero
        );

        res.json({
            mensaje: "Cosecha eliminada correctamente"
        });

    } catch (error) {

        res.status(404).json({
            mensaje: error.message
        });

    }

});

module.exports = router;