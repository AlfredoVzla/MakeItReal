function eliminarCuenta() {

    const usuario = getCookie("nombreusuario");
    const tuToken = getCookie("token");
    const tokenPatrocinador = getCookie("tipoUsuario");

    if (tokenPatrocinador.includes("patrocinador")) {

        fetch(`http://localhost:3000/patrocinador/${usuario}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${tuToken}`
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al intentar eliminar la cuenta');
                }
                alert('Cuenta eliminada exitosamente');
                cerrarSesion();
                window.location.href = 'index.html';
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
    } else {
        fetch(`http://localhost:3000/emprendedor/${usuario}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${tuToken}`
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al intentar eliminar la cuenta');
                }
                alert('Cuenta eliminada exitosamente');
                cerrarSesion();
                window.location.href = 'index.html';
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
    }


}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
function cerrarSesion() {
    // Eliminar las cookies del token y la imagenPerfil
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'imagenperfil=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'nombreusuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'nombreusuariopatrocinador=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'imagenperfilpatrocinador=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'idPatrocinador=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'idEmprendedor=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'tipoUsuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'idProyecto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'idproyecto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // Redirigir a la página de inicio de sesión u otra página después de cerrar sesión
    window.location.href = 'index.html';
}