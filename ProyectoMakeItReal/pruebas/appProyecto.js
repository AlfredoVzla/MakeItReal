const ProyectoController = require('../controllers/Proyecto'); // Importa el controlador de Proyecto.

const proyecto = new ProyectoController();

async function agregarProyecto() {
    try {
        

      const proyectoNuevo = await proyecto.crearProyecto({
        titulo: 'nuevo registro',
        descripcion:'Libro de ciencia ficcion',
        fechaInicio: new Date(),
        fechaCreación: new Date(),
        objetivo:"si",
        estado:"Activo",
        masInformacion:"mas info",
        metaFinanciamiento: 43444.3,
        cantidadRecaudada:2000.8,
        id_Categoria:1,
        id_Emprendedor:1

        });

       
    } catch (error) {
        console.log("No se pudo agregar el proyecto"+error);
    }
}

async function obtenerProyectos() {
    try {
        const pruebaProyecto = await proyecto.obtenerProyectos();
    } catch (error) {
        console.log("No se pudieron obtener los proyectos");
    }
}

async function actualizarProyecto(){
    try {
      const pruebaProyecto = await proyecto.actualizarProyecto(5,{
        titulo:"Titulo actualizado",
        descripcion:"desc actualizada",
        estado:"inactivo"
      });
    } catch (error) {
      console.log("No se pudo actualizar el proyecto");
    }
  }


async function eliminarProyecto() {
    try {
        const pruebaProyecto = await proyecto.eliminarProyecto(5);
    } catch (error) {
        console.log("No se pudo eliminar el proyecto");
    }
}

module.exports = {
    agregarProyecto,
    obtenerProyectos,
    actualizarProyecto,
    eliminarProyecto
};
