const Proyecto = require('../modelos/Proyecto'); // Importa el modelo de Proyecto


class ProyectoController {
  // Método para crear un nuevo Proyecto
  async crearProyecto(data) {
    try {
      const nuevoProyecto = await Proyecto.create(data); //Utilizando sequelize para las querys en mysql
      console.log("Proyecto creado con éxito");
    } catch (error) {
      throw error;
    }
  }


  // Método para obtener todos los Proyectos
async obtenerProyectos() {
    try {
      const proyectos = await Proyecto.findAll();
      console.log(JSON.stringify(proyectos, null, 2));
      // return proyectos;
    } catch (error) {
      console.log(error);
    }
  }  


  // Método para obtener un proyecto por su ID
async obtenerProyectoPorId(idProyecto) {
  try {
    const proyecto = await Proyecto.findByPk(idProyecto);
    if (proyecto) {
      console.log(JSON.stringify(proyecto, null, 2));
    } else {
      console.log(`Proyecto con ID ${idProyecto} no encontrado.`);
    }
    // return proyecto;
  } catch (error) {
    console.log(error);
  }
}


// Método para obtener un proyecto por su título
async obtenerProyectoPorTitulo(tituloProyecto) {
  try {
    const proyecto = await Proyecto.findOne({
      where: { titulo: tituloProyecto },
    });
    if (proyecto) {
      console.log(JSON.stringify(proyecto, null, 2));
    } else {
      console.log(`Proyecto no encontrado.`);
    }
   
    // return proyecto;
  } catch (error) {
    console.log(error);
  }
}




// Método para obtener todos los proyectos de un emprendedor por su id_Emprendedor
async obtenerProyectosPorIdEmprendedor(idEmprendedor) {
  try {
    const proyectos = await Proyecto.findAll({
      where: { id_Emprendedor: idEmprendedor },
    });
    if (proyectos && proyectos.length > 0) {
      console.log(JSON.stringify(proyectos, null, 2));
    } else {
      console.log("No hay registro de proyectos para ese emprendedor");
    }
   
    // return proyectos;
  } catch (error) {
    console.log(error);
  }
}






  // Método para actualizar un proyecto por su ID
  async actualizarProyecto(idProyecto, data) {
    try {
      const [actualizado] = await Proyecto.update(data, { //Utilizando sequelize para las querys en mysql
        where: { idProyecto },
      });
      if (actualizado) {
        const proyectoActualizado = await Proyecto.findByPk(idProyecto); //Utilizando sequelize para las querys en mysql
        console.log("Proyecto actualizado correctamente");
      }
      return null; // Si no se actualiza ningún registro
    } catch (error) {
      console.log(error);
    }
  }


  // Método para eliminar un proyecto por su ID
  async eliminarProyecto(idProyecto) {
    try {
      const eliminado = await Proyecto.destroy({ //Utilizando sequelize para las querys en mysql
        where: { idProyecto },
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


module.exports = ProyectoController;
