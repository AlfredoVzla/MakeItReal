document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registro-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombreUsuario = document.getElementById('nombreUsuario').value;
        const contrasena = document.getElementById('contrasena').value;
        const tipoUsuario = document.querySelector('input[name="tipoUsuario"]:checked').value;


        if (tipoUsuario == 'emprendedor') {
            fetch('http://localhost:3000/emprendedor/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombreUsuario,
                    contraseña: contrasena,
                }),
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    if (data.status.includes('fail')) {
                        alert('No se encontró usuario con esas credenciales');
                    } else if (data.status.includes('success')) {

                        document.cookie = `token=${data.data.token}; path=/`;
                        document.cookie = `imagenperfil=${data.data.emprendedor.imagenPerfil}; path=/`;
                        document.cookie = `nombreusuario=${data.data.emprendedor.nombreUsuario}; path=/`;
                        document.cookie = `idEmprendedor=${data.data.emprendedor.idEmprendedor}; path=/`;

                        window.location.href = 'index.html';
                    }
                })
                .catch(error => {
                    alert('Error al iniciar sesión. Verifica tus credenciales.');
                });
        } else {
            fetch('http://localhost:3000/patrocinador/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombreUsuario,
                    contraseña: contrasena,
                }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status} - ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {


                    document.cookie = `token=${data.data.token}; path=/`;
                    document.cookie = `imagenperfil=${data.data.patrocinador.imagenPerfil}; path=/`;
                    document.cookie = `nombreusuario=${data.data.patrocinador.nombreUsuario}; path=/`;
                    // Puedes redirigir a otra página después del inicio de sesión si lo deseas
                    
                    window.location.href = 'index.html';
                })
                .catch(error => {
                    console.log(error);
                    console.error('Error:', error);
                    console.log(error);
                    alert('Error al iniciar sesión. Verifica tus credenciales.');
                });
        }
    });
});