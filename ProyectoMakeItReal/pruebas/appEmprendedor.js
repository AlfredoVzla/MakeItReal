
const sequelize = require('../utils/connection'); // Importa la conexión a la base de datos
const EmprendedorController = require('../controllers/Emprendedor'); // Importa el controlador de Emprendedor
const emprendedor = new EmprendedorController();

// CÓDIGO DE PRUEBA DE LA CLASE EMPRENDEDOR
exports.crearEmprendedor = async(data)=>{
    try {
        const pruebaEmprendedor = await emprendedor.crearEmprendedor(data);
    } catch (error) {
      console.log(error);
    }
  }
  
exports.actualizarEmprendedor = async(id,data)=>{
    try {
        const pruebaEmprendedor = await emprendedor.actualizarEmprendedor(id,data);
    } catch (error) {
      console.log(error);
    }
  }
  
exports.obtenerEmprendedores = async()=>{
    try {
        const pruebaEmprendedor = await emprendedor.obtenerEmprendedores();
    } catch (error) {
      console.log(error);
    }
  }
  
exports.obtenerEmprendedorId = async(id)=>{
    try {
        const pruebaEmprendedor = await emprendedor.obtenerEmprendedorPorId(id);
    } catch (error) {
      console.log(error);
    }
  }

exports.obtenerEmprendedorCredenciales = async (nombreUsuario, contraseña)=>{
  try {
      const pruebaEmprendedor = await emprendedor.obtenerEmprendedorPorCredenciales(nombreUsuario,contraseña);
  } catch (error) {
    console.log(error);
  }
}
  
exports.eliminarEmprendedor = async (id)=>{
    try {
        const pruebaEmprendedor = await emprendedor.eliminarEmprendedor(id);
    } catch (error) {
      console.log("No se pudo eliminar el emprendedor, seguramente tiene proyectos asignados");
    }
  }