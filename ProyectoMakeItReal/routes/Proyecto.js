const express = require('express');
const ProyectoController = require('../controllers/Proyecto');
const { handleErrors } = require('../utils/appError');
const verificarToken = require('../utils/verificarToken');
const router = express.Router();

// Rutas libres
router
  .route("/")
  .get(ProyectoController.obtenerProyectos);

router
  .route("/:titulo([a-zA-Z-_-]+)") // Utiliza una expresión regular para capturar solo valores alfanuméricos y guiones bajos
  .get(ProyectoController.obtenerProyectoPorTitulo);

router
  .route('/emprendedor/:idEmprendedor')
  .get(ProyectoController.obtenerProyectosPorIdEmprendedor);

// Rutas protegidas
router.use(verificarToken);

router
  .route('/')
  .post(ProyectoController.crearProyecto);

router
  .route('/:idProyecto')
  .get(ProyectoController.obtenerProyectoPorId)
  .patch(ProyectoController.actualizarProyecto)
  .delete(ProyectoController.eliminarProyecto);



  router.use(handleErrors);


module.exports = router;
