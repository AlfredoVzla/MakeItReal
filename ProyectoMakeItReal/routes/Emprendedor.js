const express = require('express');
const emprendedorController = require('../controllers/Emprendedor');
const { handleErrors } = require('../utils/appError');
const router = express.Router();



// Definir las rutas
router
  .route('/')
    .post(emprendedorController.crearEmprendedor)
    .get(emprendedorController.obtenerEmprendedores);

router
.route('/:id')
.get(emprendedorController.obtenerEmprendedorPorId)
.patch(emprendedorController.actualizarEmprendedor)
.post(emprendedorController.obtenerEmprendedorPorCredenciales)
.delete(emprendedorController.eliminarEmprendedorPorId);

router.use(handleErrors);

module.exports = router;

