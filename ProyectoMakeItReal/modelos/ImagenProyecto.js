class ImagenProyecto{
    constructor(idImagenProyecto, imagen, idProyecto){
        this.idImagenProyecto = idImagenProyecto;
        this.imagen = imagen;
        this.idProyecto = idProyecto;
    }

    //Getters and setters

    getIdImagenProyecto(){
        return this.idImagenProyecto;
    }

    setIdImagenProyecto(nuevoIdImagenProyecto){
        this.idImagenProyecto = nuevoIdImagenProyecto;
    }

    getImagen(){
        return this.imagen;
    }

    setImagen(nuevaImagen){
        this.imagen = nuevaImagen;
    }

    getIdProyecto(){
        return this.idProyecto;
    }

    setIdProyecto(nuevoIdProyecto){
        this.idProyecto = nuevoIdProyecto;
    }
}