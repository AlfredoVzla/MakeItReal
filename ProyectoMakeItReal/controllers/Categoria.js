const Categoria = require('../modelos/categoria.js');

exports.addCategoriaPromise = (idCategoria, nombre, descripcion) => {
    Categoria.create({
        idCategoria: idCategoria,
        nombre: nombre,
        descripcion: descripcion
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });
};

exports.addCategoriaAsync = async (idCategoria, nombre, descripcion) => {
    try {
        const result = await Categoria.create({
            idCategoria: idCategoria,
            nombre: nombre,
            descripcion: descripcion
        });
        console.log(result);
    } catch (err) {
        console.log(err);
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
