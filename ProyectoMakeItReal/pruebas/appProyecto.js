const ProyectoController = require('../controllers/Proyecto'); // Importa el controlador de Proyecto.

const proyecto = new ProyectoController();

async function agregarProyecto() {
    try {
        const proyectoNuevo = await proyecto.crearProyecto({
            titulo: 'Proyecto uno',
            descripcion: 'Este es el uno',
            fechaInicio: new Date(),
            fechaCreacion: new Date(),
            objetivo: "si",
            estado: "Activo",
            masInformacion: "mas info",
            metaFinanciamiento: 43444.3,
            cantidadRecaudada: 2000.8,
            idCategoria: 1,
            idEmprendedor: 1
        });

        const proyectoNuevo2 = await proyecto.crearProyecto({
            titulo: 'Proyecto dos',
            descripcion: 'Este es el dos',
            fechaInicio: new Date(),
            fechaCreacion: new Date(),
            objetivo: "si",
            estado: "In-activo",
            masInformacion: "mas informacion",
            metaFinanciamiento: 43444.3,
            cantidadRecaudada: 2000.8,
            idCategoria: 1,
            idEmprendedor: 1
        });
    } catch (error) {
        console.log("No se pudo agregar el proyecto");
    }
}

async function obtenerProyectos() {
    try {
        const pruebaProyecto = await proyecto.obtenerProyectos();
    } catch (error) {
        console.log("No se pudieron obtener los proyectos");
    }
}

async function actualizarProyecto() {
    try {
        const pruebaProyecto = await proyecto.actualizarProyecto(1, {
            titulo: "Titulo actualizado"
        });
    } catch (error) {
        console.log("No se pudo actualizar el proyecto");
    }
}

async function eliminarProyecto() {
    try {
        const pruebaProyecto = await proyecto.eliminarProyecto(1);
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
