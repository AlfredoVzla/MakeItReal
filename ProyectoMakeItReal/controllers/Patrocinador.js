const Patrocinador = require('../modelos/Patrocinador'); // Importa el modelo de Patrocinador

class PatrocinadorController {
  // Método para crear un nuevo patrocinador
  async crearPatrocinador(data) {
    try {
      const nuevoPatrocinador = await Patrocinador.create(data);
      console.log("Patrocinador registrado correctamente");
    } catch (error) {
      throw error;
    }
  }

  // Método para obtener todos los patrocinadores
  async obtenerPatrocinadores() {
    try {
      const patrocinadores = await Patrocinador.findAll();
      console.log(JSON.stringify(patrocinadores, null, 2));
    } catch (error) {
      throw error;
    }
  }

  // Método para obtener un patrocinador por su ID
  async obtenerPatrocinadorPorId(id) {
    try {
      const patrocinador = await Patrocinador.findByPk(id);
      console.log(JSON.stringify(patrocinador, null, 2));
    } catch (error) {
      throw error;
    }
  }

  // Método para actualizar un patrocinador por su ID
  async actualizarPatrocinador(idPatrocinador, data) {
    try {
      const [actualizado] = await Patrocinador.update(data, {
        where: { idPatrocinador },
      });
      if (actualizado) {
        const patrocinadorActualizado = await Patrocinador.findByPk(idPatrocinador);
        return patrocinadorActualizado;
      }
      return null; // Si no se actualiza ningún registro
    } catch (error) {
      throw error;
    }
  }

  // Método para eliminar un patrocinador por su ID
  async eliminarPatrocinador(idPatrocinador) {
    try {
      const eliminado = await Patrocinador.destroy({
        where: { idPatrocinador },
      });
      if (eliminado > 0) {
        console.log("Se eliminó correctamente");
      }
      //   return eliminado > 0; // Devuelve true si se eliminó al menos un registro, false si no se encontró el registro
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PatrocinadorController;
