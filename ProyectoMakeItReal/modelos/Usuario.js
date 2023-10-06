class Usuario {
    constructor(nombre, telefono, email, nombreUsuario, contraseña, imagenPerfil) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.nombreUsuario = nombreUsuario;
        this.contraseña = contraseña;
        this.imagenPerfil = imagenPerfil;
    }

    // Getters and setters
    getNombre() {
        return this.nombre;
    }

    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    getTelefono() {
        return this.telefono;
    }

    setTelefono(nuevoTelefono) {
        this.telefono = nuevoTelefono;
    }

    getEmail() {
        return this.email;
    }

    setEmail(nuevoEmail) {
        this.email = nuevoEmail;
    }

    getNombreUsuario() {
        return this.nombreUsuario;
    }

    setNombreUsuario(nuevoNombreUsuario) {
        this.nombreUsuario = nuevoNombreUsuario;
    }

    getContraseña() {
        return this.contraseña;
    }

    setContraseña(nuevaContraseña) {
        this.contraseña = nuevaContraseña;
    }

    getImagenPerfil() {
        return this.imagenPerfil;
    }

    setImagenPerfil(nuevaImagenPerfil) {
        this.imagenPerfil = nuevaImagenPerfil;
    }
}