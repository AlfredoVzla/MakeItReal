
const ComentarioController = require("../controllers/Comentario"); 
const comentario = new ComentarioController();

// CÓDIGO DE PRUEBA DE LA CLASE COMENTARIOS
exports.agregarComentario = async()=>{
    try {
      const pruebaComentario = await comentario.crearComentario({
        texto:"Este es un comentario para probar",
        fecha: new Date(),
        calificacion:4,
        id_Proyecto:1
      });
    } catch (error) {
      console.log("No se pudo agregar el comentario");
    }
  }
  
exports.obtenerComentarios = async()=>{
    try {
      const pruebaComentario = await comentario.obtenerComentarios();
    } catch (error) {
      console.log("No se pudieron obtener los comentarios");
    }
  }
  
exports.actualizarComentario = async()=>{
    try {
      const pruebaComentario = await comentario.actualizarComentario(1,{
        texto:"Se actualizó el comentario"
      });
    } catch (error) {
      console.log("No se pudo actualizar el comentario");
    }
  }
  
exports.eliminarComentario = async()=>{
    try {
      const pruebaComentario = await comentario.eliminarComentario(1);
    } catch (error) {
      console.log("No se pudo eliminar el comentario");
    }
  }