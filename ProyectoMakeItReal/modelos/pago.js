class Pago{
    constructor(idPago, monto, fecha, metodo, concepto, idPatrocinador, idProyecto){
        this.idPago = idPago; 
        this.monto = monto; 
        this.fecha = fecha; 
        this.metodo = metodo; 
        this.concepto = concepto;
        this.idPatrocinador = idPatrocinador;
        this.idProyecto = idProyecto; 
    }

    //Getters y setters

    getIdPago(){
        return this.idPago;
    }

    setIdPago(nuevoIdPago){
        this.idPago = nuevoIdPago; 
    }

    getMonto(){
        return this.monto;
    }

    setMonto(nuevoMonto){
        this.monto = nuevoMonto;
    }

    getFecha(){
        return this.fecha;
    }

    setFecha(nuevaFecha){
        this.fecha = nuevaFecha;
    }

    getMetodo(){
        return this.metodo;
    }

    setMetodo(nuevoMetodo){
        this.metodo = nuevoMetodo;
    }

    getConcepto(){
        return this.concepto;
    }

    setConcepto(nuevoConcepto){
        this.concepto = nuevoConcepto;
    }

    getIdPatrocinador(){
        return this.idPatrocinador;
    }

    setIdPatrocinador(nuevoIdPatrocinador){
        this.idPatrocinador = nuevoIdPatrocinador;
    }

    getIdProyecto(){
        return this.idProyecto;
    }
    
    setIdProyecto(nuevoIdProyecto){
        this.idProyecto = nuevoIdProyecto;
    }
}