document.addEventListener('DOMContentLoaded', function () {
    const radioPatrocinador = document.getElementById('patrocinador');
    const camposPatrocinador = document.getElementById('camposPatrocinador');

    const tuDato = getCookie('nombreusuario');
    const datoPatrocinador = getCookie('nombreusuariopatrocinador');
    const tuToken = getCookie('token');
    const form = document.querySelector('form');

    radioPatrocinador.addEventListener('change', function () {
        if (radioPatrocinador.checked) {
            camposPatrocinador.style.display = 'block';
        } else {
            camposPatrocinador.style.display = 'none';
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!radioPatrocinador.checked) {
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

            const formData = {
                nombre: nombre.value,
                telefono: telefono.value,
                correoElectronico: correoElectronico.value,
                nombreUsuario: nombreUsuario.value,
                contraseña: contrasena.value,
                imagenPerfil: imagenPreview.src,
            };

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
            const nombre = document.getElementById('nombre');
            const telefono = document.getElementById('telefono');
            const correoElectronico = document.getElementById('correoElectronico');
            const nombreUsuario = document.getElementById('nombreUsuario');
            const contrasena = document.getElementById('contrasena');
            const imagenPreview = document.getElementById('imagen-preview');
            const experiencia = document.getElementById('experienciasProyectos');

            const formData = {
                nombre: nombre.value,
                telefono: telefono.value,
                correoElectronico: correoElectronico.value,
                nombreUsuario: nombreUsuario.value,
                contraseña: contrasena.value,
                imagenPerfil: imagenPreview.src,
                experienciaProyectos: experiencia.value
            };

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
                    console.error(error);

                });

        }

    });
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    function cerrarSesion() {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'imagenperfil=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'nombreusuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'nombreusuariopatrocinador=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.href = 'index.html';
    }
});
