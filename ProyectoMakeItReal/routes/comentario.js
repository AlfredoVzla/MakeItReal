const express = require('express');
const router = express.Router();
const ComentarioController = require("../controllers/Comentario"); 

router
    .route('/')
    .post(ComentarioController.crearComentario)
    .get(ComentarioController.obtenerComentarios);

router
    .route('/:id')
    .patch(ComentarioController.actualizarComentario)
    .delete(ComentarioController.eliminarComentario);

module.exports = router;