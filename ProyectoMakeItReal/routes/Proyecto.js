const express = require('express');
const ProyectoController = require('../controllers/Proyecto');
const { handleErrors } = require('../utils/appError');
const router = express.Router();

// Definir las rutas
router
  .route('/')
  .post(ProyectoController.crearProyecto)
  .get(ProyectoController.obtenerProyectos);

router
  .route('/:idProyecto')
  .get(ProyectoController.obtenerProyectoPorId)
  .patch(ProyectoController.actualizarProyecto)
  .delete(ProyectoController.eliminarProyecto);

router
  .route('/titulo/:titulo')
  .get(ProyectoController.obtenerProyectoPorTitulo);

router
  .route('/emprendedor/:idEmprendedor')
  .get(ProyectoController.obtenerProyectosPorIdEmprendedor);


module.exports = router;
