const express = require('express');
const PatrocinadorController = require('../controllers/Patrocinador');
const { handleErrors } = require('../utils/appError');
const router = express.Router();



// Definir las rutas
router
  .route('/')
    .post(PatrocinadorController.crearPatrocinador)
    .get(PatrocinadorController.obtenerPatrocinadores);

router
.route('/:id')
.get(PatrocinadorController.obtenerPatrocinadorPorId)
.patch(PatrocinadorController.actualizarPatrocinador)
.post(PatrocinadorController.obtenerPatrocinadorPorCredenciales)
.delete(PatrocinadorController.eliminarPatrocinadorPorId);

router.use(handleErrors);

module.exports = router;

