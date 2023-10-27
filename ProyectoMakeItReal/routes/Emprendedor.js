const express = require('express');
const emprendedorController = require('../controllers/Emprendedor');
const { handleErrors } = require('../utils/appError');
const router = express.Router();
const verificarToken = require('../utils/verificarToken'); // Asegúrate de importar el middleware

// Rutas públicas
router
  .route('/')
  .post(emprendedorController.crearEmprendedor)
  .get(emprendedorController.obtenerEmprendedores);

// router
//   .route('/:id')
//   .get(emprendedorController.obtenerEmprendedorPorId)
//   .patch(emprendedorController.actualizarEmprendedor)
//   .delete(emprendedorController.eliminarEmprendedorPorId);

// Ruta para inicio de sesión (protegida por JWT)
router.post('/login', emprendedorController.obtenerEmprendedorPorCredenciales);

// Rutas protegidas con JWT
router.use(verificarToken); // Este middleware protegerá todas las rutas que sigan a partir de aquí.

// Rutas protegidas
// Aquí puedes definir rutas que solo serán accesibles si el token JWT es válido
router
.route('/:id')
.get(emprendedorController.obtenerEmprendedorPorId)
.patch(emprendedorController.actualizarEmprendedor)
.delete(emprendedorController.eliminarEmprendedorPorId);

// Resto de rutas protegidas

module.exports = router;
