const Emprendedor = require('../modelos/Emprendedor'); // Importa el modelo de Emprendedor

class EmprendedorController {
  // Método para crear un nuevo emprendedor
  async crearEmprendedor(data) {
    try {
      const nuevoEmprendedor = await Emprendedor.create(data); //Utilizando sequelize para las querys en mysql
      console.log("Registro éxitoso");
    } catch (error) {
      throw error;
    }
  }

  // Método para obtener todos los emprendedores
    async obtenerEmprendedores() {
        try {
        const emprendedores = await Emprendedor.findAll(); //Utilizando sequelize para las querys en mysql
        console.log(JSON.stringify(emprendedores, null, 2)); //Utilizando json para imprimirlo en un formato más legible
        }   catch (error) {
        throw error;
        }
    }
  
  // Método para obtener un emprendedor por su ID
  async obtenerEmprendedorPorId(id) {
    try {
      const emprendedor = await Emprendedor.findByPk(id);//Utilizando sequelize para las querys en mysql
      console.log(JSON.stringify(emprendedor, null, 2)); //Utilizando json para imprimirlo en un formato más legible
    } catch (error) {
      throw error;
    }
  }
// Método para obtener un emprendedor por su Usuario y Contraseña
  async obtenerEmprendedorPorCredenciales(nombreUsuario, contraseña) {
    try {
      const emprendedor = await Emprendedor.findOne({
        where: {
          nombreUsuario: nombreUsuario,
          contraseña: contraseña
        }
      });
  
      if (emprendedor) {
        console.log(JSON.stringify(emprendedor, null, 2));
      } else {
        console.log('Emprendedor no encontrado');
      }
    } catch (error) {
      throw error;
    }
  }

  // Método para actualizar un emprendedor por su ID
  async actualizarEmprendedor(idEmprendedor, data) {
    try {
      const [actualizado] = await Emprendedor.update(data, {//Utilizando sequelize para las querys en mysql
        where: { idEmprendedor },
      });
      if (actualizado) {
        const emprendedorActualizado = await Emprendedor.findByPk(idEmprendedor);//Utilizando sequelize para las querys en mysql
        console.log("Emprendedor actualizado correctamente");
      }
      return null; // Si no se actualiza ningún registro
    } catch (error) {
      throw error;
    }
  }

  // Método para eliminar un emprendedor por su ID
  async eliminarEmprendedor(idEmprendedor) {
    try {
      const eliminado = await Emprendedor.destroy({ //Utilizando sequelize para las querys en mysql
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
