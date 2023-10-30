const Comentario = require('../modelos/Comentario');
const { AppError } = require('../utils/appError');

exports.crearComentario = async (req, res, next) => {
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
       
        return next(new AppError(`Error al crear el comentario: ${error.message}`, 400));
    }
};

exports.obtenerComentarios = async (req, res, next) => {
    try {
        const comentarios = await Comentario.findAll();

        res.status(200).json({
            status: 'success',
            data: {
                comentarios
            }
        });
    } catch (error) {
        return next (new AppError ('Error al obtener los comentarios', 400));
    }
};

exports.actualizarComentario = async (req, res, next) => {
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
            return next (new AppError ('Comentario no encontrado', 404));
        }
    } catch (error) {
        return next(new AppError(`Error al actualizar el comentario: ${error.message}`, 400));
    }
};

exports.eliminarComentario = async (req, res, next) => {
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
            return next (new AppError ('Comentario no encontrado', 404));
        }
    } catch (error) {
        return next(new AppError(`Error al eliminar el comentario: ${error.message}`, 400));
    }
};
