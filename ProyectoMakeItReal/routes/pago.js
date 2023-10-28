const express = require('express');
const router = express.Router();
const pagoController = require("../controllers/Pago");
const verificarToken = require('../utils/verificarToken');

router.use(verificarToken);

router
    .route('/')
    .post(pagoController.addPago)
    .get(pagoController.getPagos);

router
    .route('/:id_Proyecto')
    .get(pagoController.getPagosByProyecto);

module.exports = router;