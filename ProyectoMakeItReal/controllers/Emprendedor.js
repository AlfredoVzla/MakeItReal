const Emprendedor = require('../modelos/Emprendedor'); // Importa el modelo de Emprendedor

class EmprendedorController {
  // Método para crear un nuevo emprendedor
  async crearEmprendedor(data) {
    try {
      const nuevoEmprendedor = await Emprendedor.create(data);
    } catch (error) {
      throw error;
    }
  }

  // Método para obtener todos los emprendedores
    async obtenerEmprendedores() {
        try {
        const emprendedores = await Emprendedor.findAll();
        console.log(JSON.stringify(emprendedores, null, 2));
        }   catch (error) {
        throw error;
        }
    }
  
  // Método para obtener un emprendedor por su ID
  async obtenerEmprendedorPorId(id) {
    try {
      const emprendedor = await Emprendedor.findByPk(id);
      console.log(JSON.stringify(emprendedor, null, 2));
    } catch (error) {
      throw error;
    }
  }

  // Método para actualizar un emprendedor por su ID
  async actualizarEmprendedor(idEmprendedor, data) {
    try {
      const [actualizado] = await Emprendedor.update(data, {
        where: { idEmprendedor },
      });
      if (actualizado) {
        const emprendedorActualizado = await Emprendedor.findByPk(idEmprendedor);
        return emprendedorActualizado;
      }
      return null; // Si no se actualiza ningún registro
    } catch (error) {
      throw error;
    }
  }

  // Método para eliminar un emprendedor por su ID
  async eliminarEmprendedor(idEmprendedor) {
    try {
      const eliminado = await Emprendedor.destroy({
        where: { idEmprendedor },
      });
      if(eliminado>0){
        console.log("Se eliminó correctamente");
      }
    //   return eliminado > 0; // Devuelve true si se eliminó al menos un registro, false si no se encontró el registro
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EmprendedorController;
