class Categoria{
    constructor(idCategoria, nombre, descripcion){
        this.idCategoria = idCategoria;
        this.nombre = nombre; 
        this.descripcion = descripcion;
    }

    //Getters and setters

    getIdCategoria(){
        return this.idCategoria;
    }

    setIdCategoria(nuevoIdCategoria){
        this.idCategoria = nuevoIdCategoria;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    getDescripcion(){
        return this.descripcion;
    }

    setDescripcion(nuevaDescripcion){
        this.descripcion = nuevaDescripcion;
    }
}