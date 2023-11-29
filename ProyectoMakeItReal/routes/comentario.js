const express = require('express');
const router = express.Router();
const ComentarioController = require("../controllers/Comentario"); 
const verificarToken = require('../utils/verificarToken');
const { handleErrors } = require('../utils/appError');

router
.route("/:id")
.get(ComentarioController.obtenerComentarios);

router.use(verificarToken); 

router
    .route('/')
    .post(ComentarioController.crearComentario);

router
    .route('/:id')
    .patch(ComentarioController.actualizarComentario)
    .delete(ComentarioController.eliminarComentario);

router.use(handleErrors);

module.exports = router;