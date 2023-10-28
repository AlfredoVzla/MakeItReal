const Emprendedor = require('../modelos/Emprendedor'); 
const { AppError } = require('../utils/appError');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const crearEmprendedor = async (req, res, next) => {
  try {
    const { nombre, telefono, correoElectronico, nombreUsuario, contraseña, imagenPerfil } = req.body;

    const contraseñaEncriptada = bcrypt.hashSync(contraseña, 10);

    const nuevoEmprendedor = await Emprendedor.create({
      nombre,
      telefono,
      correoElectronico,
      nombreUsuario,
      contraseña: contraseñaEncriptada,
      imagenPerfil
    });

    res.status(200).json({
      status: 'success',
      data: {
          nuevoEmprendedor
      }
    });
  } catch (error) {
    console.log(error);
    return next(new AppError('Error al agregar emprendedor', 400));
  }
};


const obtenerEmprendedores = async(req,res,next)=>{
  try {
    const emprendedores = await Emprendedor.findAll();
    res.status(200).json({
      status: 'success',
      data: {
          emprendedores
      }
    });
  } catch (error) {
    return next(new AppError('Error al obtener los emprendedores'),400);
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
    return next(new AppError('Error al obtener el emprendedor', 400));
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
    console.log(error);
    return next(new AppError('Error al obtener el emprendedor', 400));
  }
};

const actualizarEmprendedor = async(req,res,next)=>{
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
    console.error('Error al actualizar el emprendedor:', error);
    return next(new AppError('Error al actualizar el emprendedor', 400));
  }  
};

const eliminarEmprendedorPorId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const emprendedor = await Emprendedor.destroy({
      where: { idEmprendedor:id } 
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
    console.log(error);
    return next(new AppError('Error al eliminar el emprendedor', 400));
  }
};


module.exports = {crearEmprendedor,obtenerEmprendedores,obtenerEmprendedorPorId,eliminarEmprendedorPorId,actualizarEmprendedor,obtenerEmprendedorPorCredenciales};
