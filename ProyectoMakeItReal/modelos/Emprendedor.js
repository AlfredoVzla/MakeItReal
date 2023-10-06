class Emprendedor extends Usuario {
    constructor(idEmprendedor, nombre, telefono, email, nombreUsuario, contraseña, imagenPerfil) {
        super(nombre, telefono, email, nombreUsuario, contraseña, imagenPerfil);
        this.idEmprendedor = idEmprendedor;
    }

    getIdEmprendedor() {
        return this.idEmprendedor;
    }

    setIdEmprendedor(nuevoIdEmprendedor) {
        this.idEmprendedor = nuevoIdEmprendedor;
    }
}