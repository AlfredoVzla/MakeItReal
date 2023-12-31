const Patrocinador = require('../modelos/Patrocinador'); // Importa el modelo de Patrocinador
const { AppError } = require('../utils/appError');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const crearPatrocinador = async (req, res, next) => {
  try {
    const { nombre, telefono, correoElectronico, nombreUsuario, contraseña, imagenPerfil,proyectosPatrocinador,
    montoTotalPatrocinado,experienciaProyectos } = req.body;

    const contraseñaEncriptada = bcrypt.hashSync(contraseña, 10);

    const nuevoPatrocinador = await Patrocinador.create({
      nombre,
      telefono,
      correoElectronico,
      nombreUsuario,
      contraseña:contraseñaEncriptada,
      imagenPerfil,
      proyectosPatrocinador,
      montoTotalPatrocinado,
      experienciaProyectos
    });

    res.status(200).json({
      status: 'success',
      data: {
          nuevoPatrocinador
      }
    });
  } catch (error) {
    return next(new AppError(`Error al agregar patrocinador: ${error.message}`, 400));
  }
};

const obtenerPatrocinadores = async(req,res,next)=>{
  try {
    const patrocinadores = await Patrocinador.findAll();
    res.status(200).json({
      status: 'success',
      data: {
          patrocinadores
      }
    });
  } catch (error) {
    return next(new AppError('Error al obtener los patrocinadores'),400);
  }
};

const obtenerPatrocinadorPorId = async (req, res, next) => {
  try {
    const { id } = req.params; // Utiliza req.params para obtener el parámetro de la URL
    const patrocinador = await Patrocinador.findByPk(id);
    if (patrocinador) {
      res.status(200).json({
        status: 'success',
        data: {
          patrocinador
        }
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Patrocinador no encontrado'
      });
    }
  } catch (error) {
    return next(new AppError(`Error al obtener patrocinador por id: ${error.message}`, 400));
  }
};

const obtenerPatrocinadorPorNombreUsuario = async (req, res, next) => {
  try {
    const { usuario } = req.params;
    const patrocinador = await Patrocinador.findOne({
      attributes: ['idPatrocinador', 'nombre', 'telefono', 'correoElectronico', 'nombreUsuario','contraseña', 'imagenPerfil','experienciaProyectos'],
      where: { nombreUsuario: usuario }
    });
    if (patrocinador) {
      res.status(200).json({
        status: 'success',
        data: {
          patrocinador
        }
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Patrocinador no encontrado'
      });
    }
  } catch (error) {
    console.log(error);
    return next(new AppError(`Error al obtener el patrocinador por id: ${error.message}`, 400));
  }
};

const obtenerPatrocinadorPorCredenciales = async(req,res,next)=>{
  try{
    const secretKey = "123456";
    const nombreUsuario = req.body.nombreUsuario;
    const contraseña = req.body.contraseña;

    const patrocinador = await Patrocinador.findOne({where:{nombreUsuario:nombreUsuario}});

    if(patrocinador && bcrypt.compareSync(contraseña,patrocinador.contraseña)){
      const token = jwt.sign({
        id:patrocinador.id,nombre:patrocinador.nombreUsuario},
        secretKey,{
          expiresIn:'1h'
        }
      );
      res.status(200).json({
        status:'succes',
        data:{
          patrocinador,
          token
        }
      });
    }else{
      res.status(404).json({
        status:'fail',
        message:'Patrocinador no encontrado o credenciales incorrectas'
      });
    }
  }catch(error){
    return next(new AppError(`Error al obtener patrocinador: ${error.message}`, 400));
  
  }
};

const actualizarPatrocinador = async(req,res,next)=>{
  try {
    const { usuario } = req.params;

    const contraseña = req.body.contraseña;

    const patrocinador = await Patrocinador.findOne({where:{
      nombreUsuario:usuario
    }})

    console.log(bcrypt.compareSync(contraseña,patrocinador.contraseña));

    if (patrocinador && bcrypt.compareSync(contraseña,patrocinador.contraseña)) {
      if(patrocinador){
        await Patrocinador.update({
          nombre: req.body.nombre,
          telefono: req.body.telefono,
          correoElectronico: req.body.correoElectronico,
          nombreUsuario: req.body.nombreUsuario,
          imagenPerfil: req.body.imagenPerfil,
          proyectosPatrocinador: req.body.proyectosPatrocinador,
          montoTotalPatrocinado: req.body.montoTotalPatrocinado,
          experienciaProyectos: req.body.experienciaProyectos
        },{where:{nombreUsuario:usuario}});
        res.status(200).json({
          status: 'success',
          data: {
            patrocinador
          }
        });
      }
      else {
        res.status(404).json({
          status: 'fail',
          message: 'Patrocinador no encontrado'
        });
      }
    } else{
      res.status(400).json({
        status: 'fail',
        message: 'Las contraseñas no coinciden'
      });
    }
  } catch (error) {
    return next(new AppError(`Error al actualizar patrocinador: ${error.message}`, 400));
  }  
};

const eliminarPatrocinador = async (req, res, next) => {
  try {
    const { id } = req.params;
    const patrocinador = await Patrocinador.destroy({
      where: { nombreUsuario:id } // Especifica las condiciones de eliminación correctamente
    });

    if (patrocinador > 0) {
      res.status(200).json({
        status: 'success',
        message: 'Eliminado correctamente'
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Patrocinador no encontrado'
      });
    }
  } catch (error) {
    return next(new AppError(`Error al eliminar patrocinador: ${error.message}`, 400));
   
  }
};

module.exports = {obtenerPatrocinadorPorNombreUsuario,crearPatrocinador,obtenerPatrocinadores,obtenerPatrocinadorPorId,obtenerPatrocinadorPorCredenciales,eliminarPatrocinador,actualizarPatrocinador}

// class PatrocinadorController {

//   // Método para crear un nuevo patrocinador
//   async crearPatrocinador(data) {
//     try {
//       const nuevoPatrocinador = await Patrocinador.create(data); //Utilizando sequelize para las querys en mysql
//       console.log("Patrocinador registrado correctamente");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   // Método para obtener todos los patrocinadores
//   async obtenerPatrocinadores() {
//     try {
//       const patrocinadores = await Patrocinador.findAll();//Utilizando sequelize para las querys en mysql
//       console.log(JSON.stringify(patrocinadores, null, 2)); //Utilizando json para imprimirlo en un formato más legible
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   // Método para obtener un patrocinador por su ID
//   async obtenerPatrocinadorPorId(id) {
//     try {
//       const patrocinador = await Patrocinador.findByPk(id);//Utilizando sequelize para las querys en mysql
//       console.log(JSON.stringify(patrocinador, null, 2)); //Utilizando json para imprimirlo en un formato más legible
//     } catch (error) {
//       console.log(error);
//     }
//   }
// // Método para obtener un patrocinador por su Usuario y Contraseña
//   async obtenerPatrocinadorPorCredenciales(nombreUsuario, contraseña) {
//     try {
//       const patrocinador = await Patrocinador.findOne({
//         where: {
//           nombreUsuario: nombreUsuario,
//           contraseña: contraseña
//         }
//       });
  
//       if (patrocinador) {
//         console.log(JSON.stringify(patrocinador, null, 2));
//       } else {
//         console.log('Patrocinador no encontrado');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   // Método para actualizar un patrocinador por su ID
//   async actualizarPatrocinador(idPatrocinador, data) {
//     try {
//       const [actualizado] = await Patrocinador.update(data, {
//         where: { idPatrocinador },
//       });
//       if (actualizado) {
//         const patrocinadorActualizado = await Patrocinador.findByPk(idPatrocinador); //Utilizando sequelize para las querys en mysql
//         console.log("Se actualizó correctamente el patrocinador");
//       }
//       return null; // Si no se actualiza ningún registro
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   // Método para eliminar un patrocinador por su ID
//   async eliminarPatrocinador(idPatrocinador) {
//     try {
//       const eliminado = await Patrocinador.destroy({ //Utilizando sequelize para las querys en mysql
//         where: { idPatrocinador },
//       });
//       if (eliminado > 0) {
//         console.log("Se eliminó correctamente");
//       }
//       //   return eliminado > 0; // Devuelve true si se eliminó al menos un registro, false si no se encontró el registro
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// module.exports = PatrocinadorController;
