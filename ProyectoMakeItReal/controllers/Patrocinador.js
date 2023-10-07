const Patrocinador = require('../modelos/Patrocinador'); // Importa el modelo de Patrocinador

class PatrocinadorController {

  // Método para crear un nuevo patrocinador
  async crearPatrocinador(data) {
    try {
      const nuevoPatrocinador = await Patrocinador.create(data); //Utilizando sequelize para las querys en mysql
      console.log("Patrocinador registrado correctamente");
    } catch (error) {
      console.log(error);
    }
  }

  // Método para obtener todos los patrocinadores
  async obtenerPatrocinadores() {
    try {
      const patrocinadores = await Patrocinador.findAll();//Utilizando sequelize para las querys en mysql
      console.log(JSON.stringify(patrocinadores, null, 2)); //Utilizando json para imprimirlo en un formato más legible
    } catch (error) {
      console.log(error);
    }
  }

  // Método para obtener un patrocinador por su ID
  async obtenerPatrocinadorPorId(id) {
    try {
      const patrocinador = await Patrocinador.findByPk(id);//Utilizando sequelize para las querys en mysql
      console.log(JSON.stringify(patrocinador, null, 2)); //Utilizando json para imprimirlo en un formato más legible
    } catch (error) {
      console.log(error);
    }
  }
// Método para obtener un patrocinador por su Usuario y Contraseña
  async obtenerUsuarioPorCredenciales(nombreUsuario, contraseña) {
    try {
      const patrocinador = await Patrocinador.findOne({
        where: {
          nombreUsuario: nombreUsuario,
          contraseña: contraseña
        }
      });
  
      if (patrocinador) {
        console.log(JSON.stringify(patrocinador, null, 2));
      } else {
        console.log('Patrocinador no encontrado');
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Método para actualizar un patrocinador por su ID
  async actualizarPatrocinador(idPatrocinador, data) {
    try {
      const [actualizado] = await Patrocinador.update(data, {
        where: { idPatrocinador },
      });
      if (actualizado) {
        const patrocinadorActualizado = await Patrocinador.findByPk(idPatrocinador); //Utilizando sequelize para las querys en mysql
        console.log("Se actualizó correctamente el patrocinador");
      }
      return null; // Si no se actualiza ningún registro
    } catch (error) {
      console.log(error);
    }
  }

  // Método para eliminar un patrocinador por su ID
  async eliminarPatrocinador(idPatrocinador) {
    try {
      const eliminado = await Patrocinador.destroy({ //Utilizando sequelize para las querys en mysql
        where: { idPatrocinador },
      });
      if (eliminado > 0) {
        console.log("Se eliminó correctamente");
      }
      //   return eliminado > 0; // Devuelve true si se eliminó al menos un registro, false si no se encontró el registro
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PatrocinadorController;
