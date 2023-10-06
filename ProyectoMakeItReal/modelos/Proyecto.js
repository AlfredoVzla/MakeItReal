class Proyecto{
    constructor(idProyecto, titulo, descripcion, fechaInicio, fechaCreacion, objetivo, estado, masInformacion, metaFinanciamiento, cantidadRecaudada, idCategoria, idEmprendedor){
        this.idProyecto = idProyecto;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaCreacion = fechaCreacion;
        this.objetivo = objetivo;
        this.estado = estado;
        this.masInformacion = masInformacion;
        this.metaFinanciamiento = metaFinanciamiento;
        this.cantidadRecaudada = cantidadRecaudada;
        this.idCategoria = idCategoria;
        this.idEmprendedor = idEmprendedor;
    }

    //Getters and setters

    getIdProyecto(){
        return this.idProyecto;
    }

    setIdProyecto(nuevoIdProyecto){
        this.idProyecto = nuevoIdProyecto; 
    }

    getTitulo(){
        return this.titulo;
    }

    setTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }

    getDescripcion(){
        return this.descripcion;
    }

    setDescripcion(nuevaDescripcion){
        this.descripcion = nuevaDescripcion;
    }

    getFechaInicio(){
        return this.fechaInicio;
    }

    setFechaInicio(nuevaFechaInicio){
        this.fechaInicio = nuevaFechaInicio;
    }

    getFechaCreacion(){
        return this.fechaCreacion;
    }

    setFechaCreacion(nuevaFechaCreacion){
        this.fechaCreacion = nuevaFechaCreacion;
    }

    getObjetivo(){
        return this.objetivo;
    }

    setObjetivo(nuevoObjetivo){
        this.objetivo = nuevoObjetivo;
    }

    getEstado(){
        return this.estado;
    }

    setEstado(nuevoEstado){
        this.estado = nuevoEstado;
    }

    getMasInformacion(){
        return this.masInformacion;
    }

    setMasInformacion(nuevaInfo){
        this.masInformacion = nuevaInfo;
    }

    getMetaFinanciamiento(){
        return this.metaFinanciamiento;
    }

    setMetaFinanciamiento(nuevaMeta){
        this.metaFinanciamiento = nuevaMeta;
    }

    getCantidadRecaudada(){
        return this.cantidadRecaudada;
    }

    setCantidadRecaudada(nuevaCantidad){
        this.cantidadRecaudada = nuevaCantidad;
    }

    getIdCategoria(){
        return this.idCategoria;
    }

    setIdCategoria(nuevoIdCategoria){
        this.idCategoria = nuevoIdCategoria;
    }

    getIdEmprendedor(){
        return this.idEmprendedor;
    }

    setIdEmprendedor(nuevoIdEmprendedor){
        this.idEmprendedor = nuevoIdEmprendedor;
    }

}