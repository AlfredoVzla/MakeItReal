const express = require('express');
const emprendedorController = require('../controllers/Emprendedor');
const { handleErrors } = require('../utils/appError');
const router = express.Router();
const verificarToken = require('../utils/verificarToken');

// Rutas públicas
router
  .route('/')
  .post(emprendedorController.crearEmprendedor)
  .get(emprendedorController.obtenerEmprendedores);

router.post('/login', emprendedorController.obtenerEmprendedorPorCredenciales);

router.use(verificarToken); 

router
.route('/:id')
.get(emprendedorController.obtenerEmprendedorPorId)
.patch(emprendedorController.actualizarEmprendedor)
.delete(emprendedorController.eliminarEmprendedorPorId);

router.use(handleErrors);

module.exports = router;
