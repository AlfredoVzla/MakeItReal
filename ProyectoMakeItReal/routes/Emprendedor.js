const express = require('express');
const emprendedorController = require('../controllers/Emprendedor');
const { handleErrors } = require('../utils/appError');
const router = express.Router();
const verificarToken = require('../utils/verificarToken');

// Rutas públicas
router
  .route('/')
  .post(emprendedorController.crearEmprendedor)
  .get(emprendedorController.obtenerEmprendedores);
  
  router.post('/subirimagen', async (req, res) => {
      try {
          const imageUrl = await emprendedorController.subirImagenACloudinary(req.files.image.tempFilePath);
          res.json({ imageUrl });
      } catch (error) {
          console.error('Error al subir la imagen:', error);
          res.status(500).json({ mensaje: 'Error interno del servidor' });
      }
  });

router.post('/login', emprendedorController.obtenerEmprendedorPorCredenciales);

router
.get('/:usuario',emprendedorController.obtenerEmprendedorPorNombreUsuario);

router.use(verificarToken); 

router
.route('/:id')
.get(emprendedorController.obtenerEmprendedorPorId)
.delete(emprendedorController.eliminarEmprendedorPorId);

router
.route('/:usuario')
.patch(emprendedorController.actualizarEmprendedor);

router.use(handleErrors);

module.exports = router;
