
const PatrocinadorController = require('../controllers/Patrocinador'); // Importa el controlador de Patrocinador
const patrocinador = new PatrocinadorController();

// CÓDIGO DE PRUEBA DE LA CLASE PATROCINADOR
exports.crearPatrocinador = async()=>{
    try {
        const pruebaPatrocinador = await patrocinador.crearPatrocinador({
          nombre:"Alfredo Valenzuela",
          telefono:"6441920149",
          correoElectronico:"jvalenzuela0302@gmail.com",
          nombreUsuario:"alfredo03",
          contraseña:"123456",
          imagenPerfil:"imagen.jpg",
          proyectosPatrocinador:0,
          montoTotalPatrocinado:0,
          experienciaProyectos:"Ninguna"
        });
    } catch (error) {
      console.log(error);
    }
  }
  
exports.actualizarPatrocinador = async()=>{
    try {
      const pruebaPatrocinador = await patrocinador.actualizarPatrocinador(1,{
        nombre:"Jaime Valenzuela",
        telefono:"6441920149",
        correoElectronico:"jvalenzuela0302@gmail.com",
        nombreUsuario:"alfredo04",
        contraseña:"123456",
        imagenPerfil:"imagen.jpg",
        proyectosPatrocinador:1,
        montoTotalPatrocinado:1000,
        experienciaProyectos:"Ninguna"
      });
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