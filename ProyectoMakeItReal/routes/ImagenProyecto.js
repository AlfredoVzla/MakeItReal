const express = require('express');
const ImagenProyectoController = require('../controllers/ImagenProyecto');
const { handleErrors } = require('../utils/appError');
const verificarToken = require('../utils/verificarToken');
const router = express.Router();

// rutas libres
router
    .route('/:idProyecto')
    .get(ImagenProyectoController.obtenerImagenesProyecto);


router.use(verificarToken);

// rutas protegidas
router
  .route('/')
    .post(ImagenProyectoController.crearImagenProyecto);



router
  .route('/:idImagenProyecto')
    .patch(ImagenProyectoController.actualizarImagenProyecto)
    .delete(ImagenProyectoController.eliminarImagenProyecto);


module.exports = router;
