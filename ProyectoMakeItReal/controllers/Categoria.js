const Categoria = require('../modelos/Categoria.js');

exports.addCategoriaPromise = async (data) => {
    try {
        const nuevaCategoria = await Categoria.create(data);
        console.log('Categoría creada con éxito:', nuevaCategoria);
    } catch (error) {
        console.log(error);
    }
};

exports.addCategoriaAsync = async (data) => {
    try {
        const nuevaCategoria = await Categoria.create(data);
        console.log('Categoría creada con éxito:', nuevaCategoria);
    } catch (error) {
        console.log(error);
    }
};

exports.getCategorias = async () => {
    try {
        const result = await Categoria.findAll();
        console.log(JSON.stringify(result, null, 2));
    } catch (error) {
        console.log(error);
    }
};

exports.getCategoriaById = async (id) => {
    try {
        const categoria = await Categoria.findByPk(id);
        if (categoria) {
            console.log('Categoría encontrada:', JSON.stringify(categoria, null, 2));
        } else {
            console.log('No se encontró una categoría con el ID especificado.');
        }
    } catch (error) {
        console.log('Error al obtener la categoría:', error);
    }
};

exports.updateCategoriaById = async (id, nombre, descripcion) => {
    try {
        const categoria = await Categoria.findByPk(id);
        if (categoria) {
            await categoria.update({
                nombre: nombre,
                descripcion: descripcion
            });
            console.log('Categoría actualizada:', JSON.stringify(categoria, null, 2));
        } else {
            console.log('No se encontró una categoría con el ID especificado.');
        }
    } catch (error) {
        console.log('Error al actualizar la categoría:', error);
    }
};

exports.deleteCategoriaById = async (id) => {
    try {
        const categoria = await Categoria.findByPk(id);
        if (categoria) {
            await categoria.destroy();
            console.log('Categoría eliminada:', JSON.stringify(categoria, null, 2));
        } else {
            console.log('No se encontró una categoría con el ID especificado.');
        }
    } catch (error) {
        console.log('Error al eliminar la categoría:', error);
    }
};
