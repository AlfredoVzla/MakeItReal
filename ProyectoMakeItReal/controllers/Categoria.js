const Categoria = require('../modelos/Categoria.js');
const { AppError} = require('../utils/appError.js');

exports.addCategoria = async (req, res, next) => {
    try {
        const { nombre, descripcion } = req.body;
        
        const nuevaCategoria = await Categoria.create({
            nombre,
            descripcion
        });

        res.status(201).json({
            status: 'success',
            data: {
                categoria: nuevaCategoria
            }
        });
    } catch (error) {
        return next(new AppError('Error al agregar categoría', 400));
    }
};

exports.getCategorias = async (req, res, next) => {
    try {
        const categorias = await Categoria.findAll();

        res.status(200).json({
            status: 'success',
            data: {
                categorias
            }
        });
    } catch (error) {
        return next (new AppError('Error al obtener categorías', 400));
    }
};

exports.getCategoriaById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const categoria = await Categoria.findByPk(id);

        if (categoria) {
            res.status(200).json({
                status: 'success',
                data: {
                    categoria
                }
            });
        } else {
            return next (new AppError('Categoría no encontrada', 404));
        }
    } catch (error) {
        return next (new AppError('Error al obtener categoría por ID', 400));
    }
};

exports.updateCategoriaById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const categoria = await Categoria.findByPk(id);

        if (categoria) {

            await categoria.update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion
            });

            res.status(200).json({
                status: 'success',
                data: {
                    categoria
                }
            });
        } else {
            return next (new AppError ('Categoría no encontrada', 404));
        }
    } catch (error) {
        return next (new AppError('Error al actualizar categoría', 400));
    }
};

exports.deleteCategoriaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const categoria = await Categoria.findByPk(id);

        if (categoria) {

            await categoria.destroy();

            res.status(200).json({
                status: 'success',
                message: `Categoría ${id} eliminada correctamente`
            });
        } else {
            return next (new AppError ('Categoría no encontrada', 404));
        }
    } catch (error) {
        return next (new AppError ('Error al eliminar categoría', 400));
    }
};