const Comentario = require('../modelos/Comentario');

exports.crearComentario = async (req, res) => {
    try {
        const { texto, fecha, calificacion, id_Proyecto } = req.body;

        const nuevoComentario = await Comentario.create({
            texto,
            fecha,
            calificacion,
            id_Proyecto
        });

        console.log("Comentario creado con éxito");

        res.status(201).json({
            status: 'success',
            data: {
                comentario: nuevoComentario
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error al crear comentario: ' + error.message
        });
    }
};

exports.obtenerComentarios = async (req, res) => {
    try {
        const comentarios = await Comentario.findAll();

        res.status(200).json({
            status: 'success',
            data: {
                comentarios
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error al obtener comentarios: ' + error.message
        });
    }
};

exports.actualizarComentario = async (req, res) => {
    try {
        const { id } = req.params;

        const comentario = await Comentario.findByPk(id);

        if (comentario) {
            await comentario.update({
                texto: req.body.texto,
                fecha: req.body.fecha,
                calificacion: req.body.calificacion,
                id_Proyecto: req.body.id_Proyecto
            });

            res.status(200).json({
                status: 'success',
                data: {
                    comentario
                }
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'Comentario no encontrado'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error al actualizar comentario por ID: ' + error.message
        });
    }
};

exports.eliminarComentario = async (req, res) => {
    try {
        const { id } = req.params;

        const comentario = await Comentario.findByPk(id);

        if (comentario) {
            await comentario.destroy();

            res.status(200).json({
                status: 'success',
                message: `Comentario ${id} eliminado correctamente`
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'Comentario no encontrado'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error al eliminar comentario por ID: ' + error.message
        });
    }
};
