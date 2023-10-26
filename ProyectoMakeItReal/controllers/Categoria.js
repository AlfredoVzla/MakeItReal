const Categoria = require('../modelos/Categoria.js');

exports.addCategoria = async (req, res) => {
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
        res.status(400).json({
            status: 'fail',
            message: 'Error al agregar categoría: ' + error.message
        });
    }
};

exports.getCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();

        res.status(200).json({
            status: 'success',
            data: {
                categorias
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error al obtener categorías: ' + error.message
        });
    }
};

exports.getCategoriaById = async (req, res) => {
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
            res.status(404).json({
                status: 'fail',
                message: 'Categoría no encontrada'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error al obtener categoría por ID: ' + error.message
        });
    }
};

exports.updateCategoriaById = async (req, res) => {
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
            res.status(404).json({
                status: 'fail',
                message: 'Categoría no encontrada'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error al actualizar categoría por ID: ' + error.message
        });
    }
};

exports.deleteCategoriaById = async (req, res) => {
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
            res.status(404).json({
                status: 'fail',
                message: 'Categoría no encontrada'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error al eliminar categoría por ID: ' + error.message
        });
    }
};