const ImagenProyectoController = require('../controllers/ImagenProyecto'); // Importa el controlador de ImagenProyecto.

const imagenProyecto = new ImagenProyectoController();

async function agregarImagenProyecto() {
    try {
        const imagenProyectoNuevo = await imagenProyecto.crearImagenProyecto({
            imagen: 'imagen.jpg',
            idProyecto: 6
        });
    } catch (error) {
        console.log("No se pudo agregar la imagen del proyecto");
    }
}

async function obtenerImagenesProyecto() {
    try {
        const imagenPruebaProyecto = await imagenProyecto.obtenerImagenesProyecto(6);
    } catch (error) {
        console.log("No se pudieron obtener las imágenes");
    }
}

async function actualizarImagenProyecto() {
    try {
        const pruebaImagenProyecto = await imagenProyecto.actualizarImagenProyecto(4, {
            idProyecto: 6
        });
    } catch (error) {
        console.log("No se pudo actualizar la imagen del proyecto");
    }
}

async function eliminarImagenProyecto() {
    try {
        const pruebaImagenProyecto = await imagenProyecto.eliminarImagenProyecto(4);
    } catch (error) {
        console.log("No se pudo eliminar la imagen del proyecto");
    }
}

module.exports = {
    agregarImagenProyecto,
    obtenerImagenesProyecto,
    actualizarImagenProyecto,
    eliminarImagenProyecto
};
