const CategoriaController = require('../controllers/Categoria'); //Importa el controlador de Categoria.

//CÓDIGO DE PRUEBA PARA LA CLASE CATEGORÍA

async function crearCaterogia(){

    const categoriaData1 = {
        nombre: 'Autos',
        descripcion: 'Categoría relacionada con autos.'
    };
    
    const categoriaData2 = {
        nombre: 'Deporte',
        descripcion: 'Categoría relacionada con deportes.'
    };

    try{
        const pruebaCategoria = await CategoriaController.addCategoriaAsync(categoriaData1);
        const pruebaCategoria2 = await CategoriaController.addCategoriaAsync(categoriaData2);
    } catch (error){
        console.log(error);
    }
}

async function obtenerCategorias(){
    try{
        const pruebaCategoria = await CategoriaController.getCategorias();
    } catch (error){
        console.log(error);
    }
}

async function obtenerCategoriasById(idCategoria){
    try{
        const pruebaCategoria = await CategoriaController.getCategoriaById(idCategoria);
    } catch (error){
        console.log(error);
    }
}

async function editarCategoria(id){
    try{
        const pruebaCategoria = await CategoriaController.updateCategoriaById(id, 'Moda', 'Esta categoría está relacionada con la moda');
    } catch (error){
        console.log(error);
    }
}

async function eliminarCategoria(id){
    try {
        const pruebaCategoria = await CategoriaController.deleteCategoriaById(id);
    } catch (error){
        console.log(error);
    }
}

//crearCaterogia();
//obtenerCategorias();
//obtenerCategoriasById(1);
//editarCategoria(3);
//eliminarCategoria(3);

module.exports = {
    crearCaterogia,
    obtenerCategorias,
    obtenerCategoriasById,
    editarCategoria,
    eliminarCategoria
};
