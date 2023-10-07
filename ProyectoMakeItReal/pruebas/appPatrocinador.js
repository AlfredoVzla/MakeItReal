
const PatrocinadorController = require('../controllers/Patrocinador'); // Importa el controlador de Patrocinador
const patrocinador = new PatrocinadorController();

// CÓDIGO DE PRUEBA DE LA CLASE PATROCINADOR
exports.crearPatrocinador = async(data)=>{
    try {
        const pruebaPatrocinador = await patrocinador.crearPatrocinador(data);
    } catch (error) {
      console.log(error);
    }
  }
  
exports.actualizarPatrocinador = async(id,data)=>{
    try {
      const pruebaPatrocinador = await patrocinador.actualizarPatrocinador(id,data);
    } catch (error) {
      console.log(error);
    }
  }
  
exports.obtenerPatrocinadores =  async()=>{
    try {
      const pruebaPatrocinador = await patrocinador.obtenerPatrocinadores();
    } catch (error) {
      console.log(error);
    }
  }
  
exports.obtenerPatrocinadorId =  async(id)=>{
    try {
        const pruebaPatrocinador = await patrocinador.obtenerPatrocinadorPorId(id);
    } catch (error) {
      console.log(error);
    }
  }

exports.obtenerPatrocinadorCredenciales = async(nombreUsuario,contraseña)=>{
    try {
      const pruebaPatrocinador = await patrocinador.obtenerUsuarioPorCredenciales(nombreUsuario,contraseña);
  } catch (error) {
    console.log(error);
  }
}
  
exports.eliminarPatrocinador =  async(id)=>{
    try {
      const pruebaPatrocinador = await patrocinador.eliminarPatrocinador(id);
    } catch (error) {
      console.log("No se pudo eliminar el patrocinador, seguramente tiene proyectos asignados");
    }
  }