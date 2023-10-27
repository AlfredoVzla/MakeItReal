const express = require('express');
const ImagenProyectoController = require('../controllers/ImagenProyecto');
const { handleErrors } = require('../utils/appError');
const router = express.Router();

// Definir las rutas
router
  .route('/')
    .post(ImagenProyectoController.crearImagenProyecto);


router
    .route('/:idProyecto')
    .get(ImagenProyectoController.obtenerImagenesProyecto);


router
  .route('/:idImagenProyecto')
    .patch(ImagenProyectoController.actualizarImagenProyecto)
    .delete(ImagenProyectoController.eliminarImagenProyecto);



module.exports = router;
