
const sequelize = require('../utils/connection'); // Importa la conexión a la base de datos
const EmprendedorController = require('../controllers/Emprendedor'); // Importa el controlador de Emprendedor
const emprendedor = new EmprendedorController();

// CÓDIGO DE PRUEBA DE LA CLASE EMPRENDEDOR
exports.crearEmprendedor = async()=>{
    try {
        const pruebaEmprendedor = await emprendedor.crearEmprendedor({
          nombre:"Jaime Valenzuela",
          telefono:"6441920149",
          correoElectronico:"jvalenzuela0302@gmail.com",
          nombreUsuario:"jaimevzla03",
          contraseña:"123456",
          imagenPerfil:"imagen.jpg"
        });
    } catch (error) {
      console.log(error);
    }
  }
  
exports.actualizarEmprendedor = async()=>{
    try {
        const pruebaEmprendedor = await emprendedor.actualizarEmprendedor(1,{
          nombre:"Alfredo Valenzuela",
          telefono:"6441920149",
          correoElectronico:"jvalenzuela0302@gmail.com",
          nombreUsuario:"jaimevzla03",
          contraseña:"123456",
          imagenPerfil:"imagen.jpg"
        });
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