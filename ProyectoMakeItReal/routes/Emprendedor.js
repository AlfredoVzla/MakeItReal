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

router.use(verificarToken); 

router
.route('/:id')
.get(emprendedorController.obtenerEmprendedorPorId)
.patch(emprendedorController.actualizarEmprendedor)
.delete(emprendedorController.eliminarEmprendedorPorId);

router.use(handleErrors);

module.exports = router;
