const ImagenProyecto = require('../modelos/ImagenProyecto'); // Importa el modelo de Proyecto


class ImagenProyectoController {
  // Método para crear un nuevo registro de ImagenProyecto
  async crearImagenProyecto(data) {
    try {
      const nuevoImagenProyecto = await ImagenProyecto.create(data); //Utilizando sequelize para las querys en mysql
      console.log("ImagenProyecto creado con éxito");
    } catch (error) {
      throw error;
    }
  }


 // Método para obtener todas las imágenes de un proyecto por su idProyecto
async obtenerImagenesProyecto(idProyecto) {
  try {
    const imagenesProyecto = await ImagenProyecto.findAll({
      where: { idProyecto: idProyecto },
    });
    if (imagenesProyecto && imagenesProyecto.length > 0) {
      console.log(JSON.stringify(imagenesProyecto, null, 2));
    } else {
      console.log(`No se encontraron imagenes`);
    }
 
    // return imagenesProyecto;
  } catch (error) {
    console.log(error);
  }
}




  // Método para actualizar una imagenProyecto por su ID
  async actualizarImagenProyecto(idImagenProyecto, data) {
    try {
      const [actualizado] = await ImagenProyecto.update(data, { //Utilizando sequelize para las querys en mysql
        where: { idImagenProyecto },
      });
      if (actualizado) {
        const imagenProyectoActualizada = await ImagenProyecto.findByPk(idImagenProyecto); //Utilizando sequelize para las querys en mysql
        console.log("Imagen proyecto actualizado correctamente");
      }
      return null; // Si no se actualiza ningún registro
    } catch (error) {
      console.log(error);
    }
  }


  // Método para eliminar una iamgenProyecto por su ID
  async eliminarImagenProyecto(idImagenProyecto) {
    try {
      const eliminado = await ImagenProyecto.destroy({ //Utilizando sequelize para las querys en mysql
        where: { idImagenProyecto },
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


module.exports = ImagenProyectoController;
