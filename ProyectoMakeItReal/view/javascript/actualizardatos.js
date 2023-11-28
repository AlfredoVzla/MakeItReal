document.addEventListener('DOMContentLoaded', function () {
    const radioPatrocinador = document.getElementById('patrocinador');
    const camposPatrocinador = document.getElementById('camposPatrocinador');

    // Obtener el nombre de usuario y el token desde las cookies
    const tuDato = getCookie('nombreusuario');
    const datoPatrocinador = getCookie('nombreusuariopatrocinador');
    const tuToken = getCookie('token');
    const form = document.querySelector('form');

    radioPatrocinador.addEventListener('change', function () {
        // Verificar si el radio button está seleccionado
        if (radioPatrocinador.checked) {
            camposPatrocinador.style.display = 'block';
        } else {
            camposPatrocinador.style.display = 'none';
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!radioPatrocinador.checked) {
            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre');
            const telefono = document.getElementById('telefono');
            const correoElectronico = document.getElementById('correoElectronico');
            const nombreUsuario = document.getElementById('nombreUsuario');
            const contrasena = document.getElementById('contrasena');
            const imagenPreview = document.getElementById('imagen-preview');
            const experiencia = document.getElementById('experienciasProyectos');

            if (contrasena.value === '') {
                alert("Ingresa tu contraseña para guardar tus cambios");
                return;
            }

            // Crear un objeto con los datos del formulario
            const formData = {
                nombre: nombre.value,
                telefono: telefono.value,
                correoElectronico: correoElectronico.value,
                nombreUsuario: nombreUsuario.value,
                contraseña: contrasena.value,
                imagenPerfil: imagenPreview.src,
            };

            // Realizar el fetch a la URL con el nombre de usuario obtenido de las cookies
            const url = `http://localhost:3000/emprendedor/${tuDato}`;
            fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${tuToken}`
                },
                body: JSON.stringify(formData),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status.includes('success')) {
                        alert("Se han actualizado los datos");
                        cerrarSesion();

                        window.location.href = 'index.html';
                        nombre.value = '';
                        telefono.value = '';
                        correoElectronico.value = '';
                        nombreUsuario.value = '';
                        contrasena.value = '';
                        imagenPreview.src = '';
                        experiencia.value = '';
                    }
                    else if (data.status.includes('fail')) {
                        alert("Las contraseñas no coinciden. Inténtelo de nuevo.");
                        return;
                    } else {
                        alert("Ocurrió un error en la actualización. Intente de nuevo.");
                    }

                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre');
            const telefono = document.getElementById('telefono');
            const correoElectronico = document.getElementById('correoElectronico');
            const nombreUsuario = document.getElementById('nombreUsuario');
            const contrasena = document.getElementById('contrasena');
            const imagenPreview = document.getElementById('imagen-preview');
            const experiencia = document.getElementById('experienciasProyectos');

            // Crear un objeto con los datos del formulario
            const formData = {
                nombre: nombre.value,
                telefono: telefono.value,
                correoElectronico: correoElectronico.value,
                nombreUsuario: nombreUsuario.value,
                contraseña: contrasena.value,
                imagenPerfil: imagenPreview.src,
                experienciaProyectos: experiencia.value
            };

            // Realizar el fetch a la URL con el nombre de usuario obtenido de las cookies
            const url = `http://localhost:3000/patrocinador/${datoPatrocinador}`;
            fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${tuToken}`
                },
                body: JSON.stringify(formData),
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    if (data.status.includes('success')) {
                        alert("Se han actualizado los datos");
                        cerrarSesion();

                        window.location.href = 'index.html';
                        nombre.value = '';
                        telefono.value = '';
                        correoElectronico.value = '';
                        nombreUsuario.value = '';
                        contrasena.value = '';
                        imagenPreview.src = '';
                        experiencia.value = '';
                    }
                    else if (data.status.includes('fail')) {
                        alert("Las contraseñas no coinciden. Inténtelo de nuevo.");
                        return;
                    } else {
                        alert("Ocurrió un error en la actualización. Intente de nuevo.");
                    }
                })
                .catch(error => {
                    // Manejar el error, incluyendo mostrar un alert si las contraseñas no coinciden
                    console.error(error);

                });

        }

    });

    // Función para obtener el valor de una cookie por su nombre
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
        // Redirigir a la página de inicio de sesión u otra página después de cerrar sesión
        window.location.href = 'index.html';
    }
});
