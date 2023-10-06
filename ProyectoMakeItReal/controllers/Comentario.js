const Comentario = require('../modelos/Comentario'); // Importa el modelo de Comentario

class ComentarioController {
  // Método para crear un nuevo comentario
  async crearComentario(data) {
    try {
      const nuevoComentario = await Comentario.create(data); //Utilizando sequelize para las querys en mysql
      console.log("Comentario creado con éxito");
    } catch (error) {
      throw error;
    }
  }

  // Método para obtener todos los comentarios
async obtenerComentarios() {
    try {
      const comentarios = await Comentario.findAll();
      console.log(JSON.stringify(comentarios, null, 2)); //Utilizando json para imprimirlo en un formato más legible
      // return comentarios;
    } catch (error) {
      console.log(error);
    }
  }  

  // Método para actualizar un comentario por su ID
  async actualizarComentario(idComentario, data) {
    try {
      const [actualizado] = await Comentario.update(data, { //Utilizando sequelize para las querys en mysql
        where: { idComentario },
      });
      if (actualizado) {
        const comentarioActualizado = await Comentario.findByPk(idComentario); //Utilizando sequelize para las querys en mysql
        console.log("Comentario actualizado correctamente");
      }
      return null; // Si no se actualiza ningún registro
    } catch (error) {
      console.log(error);
    }
  }

  // Método para eliminar un comentario por su ID
  async eliminarComentario(idComentario) {
    try {
      const eliminado = await Comentario.destroy({ //Utilizando sequelize para las querys en mysql
        where: { idComentario },
      });
      if(eliminado>0){
        console.log("Eliminado correctamente");
      }
      return eliminado > 0; // Devuelve true si se eliminó al menos un registro, false si no se encontró el registro
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ComentarioController;
