const Categoria = require('../modelos/Categoria.js');

exports.addCategoria = async (req, res) => {
    try {
        //const nuevaCategoria = await Categoria.create(req.body);
        const { nombre, descripcion } = req.body;
        const nuevaCategoria = {
            id: 1,
            nombre,
            descripcion
        };

        res.status(201).json({
            status: 'success',
            data: {
                categoria: nuevaCategoria
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error al agregar categoría'+error
        });
    }
};

exports.getCategorias = async (req, res) => {
    try {
        
        //const categorias = await Categoria.findAll();
        
        const categorias = [
            {
                id: 1,
                nombre: "Categoria consultada 1(consulta de todas)",
                descripcion: "Descripción de la categoría 1"
            },
            {
                id: 2,
                nombre: "Categoria consultada 2",
                descripcion: "Descripción de la categoría 2"
            }
        ];
        
        res.status(200).json({
            status: 'success',
            data: {
                categorias: categorias
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error al obtener categorías'
        });
    }
};

exports.getCategoriaById = async (req, res) => {
    try {
       // const categoria = await Categoria.findByPk(req.params.id);
       const { id } = req.params;
       const categoria = {
        id: id,
        nombre: `Nombre de la categoría buscada por el id: ${id}`,
        descripcion: "Descripción de la categoría"
    };
        if (categoria) {
            res.status(200).json({
                status: 'success',
                data: {
                    categoria: categoria
                }
            });
        } else {
            res.send("Error")
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error al obtener categoría por ID'
        });
    }
};

exports.updateCategoriaById = async (req, res) => {
    try {
        //const categoria = await Categoria.findByPk(req.params.id);
        const { id } = req.params;
        const categoria = {
            id: id,
            nombre: `Nombre de la categoría actualizada por el id: ${id}`,
            descripcion: "Descripción de la categoría"
        };
        if (categoria) {
           /* await categoria.update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion
            });*/
            res.status(200).json({
                status: 'success',
                data: {
                    categoria: categoria
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
            message: 'Error al actualizar categoría por ID'
        });
    }
};

exports.deleteCategoriaById = async (req, res) => {
    try {
       // const categoria = await Categoria.findByPk(req.params.id);

       const { id } = req.params;
       const categoria = {
        id: 1,
        nombre: "Nombre de la categoría actualizada por id",
        descripcion: "Descripción de la categoría"
    };
        if (categoria) {
           // await categoria.destroy();
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
            message: 'Error al eliminar categoría por ID'
        });
    }
};