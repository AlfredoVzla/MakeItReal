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

router.route('/:usuario').get(PatrocinadorController.obtenerPatrocinadorPorNombreUsuario);

router.use(verificarToken);

//rutas protegidas

router
.route('/:id')
.delete(PatrocinadorController.eliminarPatrocinador);

router.route('/:usuario').patch(PatrocinadorController.actualizarPatrocinador)

router.use(handleErrors);

module.exports = router;

