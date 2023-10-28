const express = require('express');
const PatrocinadorController = require('../controllers/Patrocinador');
const { handleErrors } = require('../utils/appError');
const router = express.Router();
const verificarToken = require('../utils/verificarToken');



// Definir las rutas
router
  .route('/')
    .post(PatrocinadorController.crearPatrocinador)
    .get(PatrocinadorController.obtenerPatrocinadores);

router.post('/login', PatrocinadorController.obtenerPatrocinadorPorCredenciales);

router.use(verificarToken);

//rutas protegidas

router
.route('/:id')
.get(PatrocinadorController.obtenerPatrocinadorPorId)
.patch(PatrocinadorController.actualizarPatrocinador)
.delete(PatrocinadorController.eliminarPatrocinadorPorId);

router.use(handleErrors);

module.exports = router;

