const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/Categoria');


router
  .route('/')
  .get(categoriaController.getCategorias)
  .post(categoriaController.addCategoria);

router
  .route('/:id')
  .get(categoriaController.getCategoriaById)
  .delete(categoriaController.deleteCategoriaById)
  .patch(categoriaController.updateCategoriaById);

module.exports = router;
