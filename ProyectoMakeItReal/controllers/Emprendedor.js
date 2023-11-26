const Emprendedor = require('../modelos/Emprendedor');
const { AppError } = require('../utils/appError');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const crearEmprendedor = async (req, res, next) => {
  try {
      // Subir la imagen a Cloudinary y obtener la URL

      const { nombre, telefono, correoElectronico, nombreUsuario, contraseña , imagenPerfil} = req.body;

      const contraseñaEncriptada = bcrypt.hashSync(contraseña, 10);

      // Crear el emprendedor con la URL de la imagen
      const nuevoEmprendedor = await Emprendedor.create({
          nombre,
          telefono,
          correoElectronico,
          nombreUsuario,
          contraseña: contraseñaEncriptada,
          imagenPerfil: imagenPerfil
      });

      console.log(nuevoEmprendedor);

      // Respuesta al cliente u otras operaciones necesarias
      res.status(200).json({ mensaje: 'Emprendedor creado exitosamente', data: nuevoEmprendedor });
  } catch (error) {
      // Manejar errores
      console.error('Error al crear emprendedor:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

const subirImagenACloudinary = (imagePath) => {
  return new Promise((resolve, reject) => {
      const uploadOptions = {
          folder: 'imagenesperfiles',  // Carpeta donde se almacenará la imagen
      };

      cloudinary.uploader.upload(imagePath, uploadOptions, (error, result) => {
          if (error) {
              console.error('Error al subir la imagen a Cloudinary:', error);
              reject(error);
          } else {
              console.log('Imagen subida exitosamente a Cloudinary:', result);
              const imageUrl = result.secure_url;
              console.log('URL de la imagen:', imageUrl);
              resolve(imageUrl);
          }
      });
  });
};
const obtenerEmprendedores = async (req, res, next) => {
  try {
    const emprendedores = await Emprendedor.findAll();
    res.status(200).json({
      status: 'success',
      data: {
        emprendedores
      }
    });
  } catch (error) {
    return next(new AppError('Error al obtener los emprendedores'), 400);
  }
};

const obtenerEmprendedorPorId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const emprendedor = await Emprendedor.findByPk(id);
    if (emprendedor) {
      res.status(200).json({
        status: 'success',
        data: {
          emprendedor
        }
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Emprendedor no encontrado'
      });
    }
  } catch (error) {
    return next(new AppError(`Error al obtener el emprendedor por id: ${error.message}`, 400));
  }
};


const obtenerEmprendedorPorCredenciales = async (req, res, next) => {
  try {
    const secretKey = '123456';
    const nombreUsuario = req.body.nombreUsuario;
    const contraseña = req.body.contraseña;

    const emprendedor = await Emprendedor.findOne({
      where: { nombreUsuario: nombreUsuario }
    });

    if (emprendedor && bcrypt.compareSync(contraseña, emprendedor.contraseña)) {
      const token = jwt.sign(
        { id: emprendedor.id, nombre: emprendedor.nombreUsuario },
        secretKey,
        {
          expiresIn: '1h'
        }
      );

      res.status(200).json({
        status: 'success',
        data: {
          emprendedor,
          token
        }
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Emprendedor no encontrado o credenciales incorrectas'
      });
    }
  } catch (error) {
    return next(new AppError(`Error al obtener el emprendedor: ${error.message}`, 400));

  }
};

const actualizarEmprendedor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { nombre, telefono, correoElectronico, nombreUsuario, contraseña, imagenPerfil } = req.body;

    const contraseñaEncriptada = bcrypt.hashSync(contraseña, 10);

    const emprendedor = await Emprendedor.findByPk(id);

    if (emprendedor) {
      await emprendedor.update({
        nombre: nombre,
        telefono: telefono,
        correoElectronico: correoElectronico,
        nombreUsuario: nombreUsuario,
        contraseña: contraseñaEncriptada,
        imagenPerfil: imagenPerfil
      });

      res.status(200).json({
        status: 'success',
        data: {
          emprendedor
        }
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Emprendedor no encontrado'
      });
    }
  } catch (error) {
    return next(new AppError(`Error al actualizar emprendedor: ${error.message}`, 400));
  }
};

const eliminarEmprendedorPorId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const emprendedor = await Emprendedor.destroy({
      where: { idEmprendedor: id }
    });

    if (emprendedor > 0) {
      res.status(200).json({
        status: 'success',
        message: 'Eliminado correctamente'
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Emprendedor no encontrado'
      });
    }
  } catch (error) {
    return next(new AppError(`Error al eliminar el emprendedor: ${error.message}`, 400));
  }
};


module.exports = {crearEmprendedor, obtenerEmprendedores, obtenerEmprendedorPorId, eliminarEmprendedorPorId, actualizarEmprendedor, obtenerEmprendedorPorCredenciales,subirImagenACloudinary};
