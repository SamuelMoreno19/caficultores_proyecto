const express = require("express");

const router = express.Router();

const Venta = require("../models/Venta");

const {
    crearVenta,
    listarVentas
} = require("../services/ventaService");

router.post("/", (req, res) => {

    try {

        const {
            numeroVenta,
            cosechaNumero,
            comprador,
            fecha,
            cantidadVendida,
            precioKg
        } = req.body;

        const venta = new Venta(
            numeroVenta,
            cosechaNumero,
            comprador,
            fecha,
            cantidadVendida,
            precioKg
        );

        const nuevaVenta =
            crearVenta(venta);

        res.status(201).json(
            nuevaVenta
        );

    } catch (error) {

        res.status(400).json({
            mensaje: error.message
        });

    }

});

router.get("/", (req, res) => {

    res.json(
        listarVentas()
    );

});

module.exports = router;