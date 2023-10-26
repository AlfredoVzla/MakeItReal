const express = require('express');
const router = express.Router();
const pagoController = require("../controllers/Pago");

router
    .route('/')
    .post(pagoController.addPago)
    .get(pagoController.getPagos);

router
    .route('/:id_Proyecto')
    .get(pagoController.getPagosByProyecto);

module.exports = router;