class Comentario{
    constructor(idComentario, texto, fecha, calificacion, idProyecto){
        this.idComentario = idComentario;
        this.texto = texto;
        this.fecha = fecha;
        this.calificacion = calificacion;
        this.idProyecto = idProyecto;
    }

    //Getters and setters
    
    getIdComentario(){
        return this.getIdComentario;
    }

    setIdComentario(nuevoIdComentario){
        this.idComentario = nuevoIdComentario;
    }

    getTexto(){
        return this.texto;
    }

    setTexto(nuevoTexto){
        this.texto = nuevoTexto;
    }

    getFecha(){
        return this.fecha;
    }

    setFecha(nuevaFecha){
        this.fecha = nuevaFecha;
    }

    getCalificacion(){
        return this.calificacion;
    }

    setCalificacion(nuevaCalificacion){
        this.calificacion = nuevaCalificacion;
    }

    getIdProyecto(){
        return this.idProyecto;
    }

    setIdProyecto(nuevoIdProyecto){
        this.idProyecto = nuevoIdProyecto;
    }
}