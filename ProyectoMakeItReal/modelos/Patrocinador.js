class Patrocinador extends Usuario {
    constructor(idPatrocinador, nombre, telefono, email, nombreUsuario, contraseña, imagenPerfil, proyectosPatrocinador, montoTotalPatrocinado, experienciaProyectos) {
        super(nombre, telefono, email, nombreUsuario, contraseña, imagenPerfil);
        this.idPatrocinador = idPatrocinador;
        this.proyectosPatrocinador = proyectosPatrocinador;
        this.montoTotalPatrocinado = montoTotalPatrocinado;
        this.experienciaProyectos = experienciaProyectos;
    }

    getIdPatrocinador() {
        return this.idPatrocinador;
    }

    setIdPatrocinador(nuevoIdPatrocinador) {
        this.idPatrocinador = nuevoIdPatrocinador;
    }

    getProyectosPatrocinador() {
        return this.proyectosPatrocinador;
    }

    setProyectosPatrocinador(nuevosProyectos) {
        this.proyectosPatrocinador = nuevosProyectos;
    }

    getMontoTotalPatrocinado() {
        return this.montoTotalPatrocinado;
    }

    setMontoTotalPatrocinado(nuevoMonto) {
        this.montoTotalPatrocinado = nuevoMonto;
    }

    getExperienciaProyectos() {
        return this.experienciaProyectos;
    }

    setExperienciaProyectos(nuevaExperienciaProyectos) {
        this.experienciaProyectos = nuevaExperienciaProyectos;
    }
}