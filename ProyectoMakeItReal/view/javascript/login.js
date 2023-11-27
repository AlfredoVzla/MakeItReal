document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registro-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombreUsuario = document.getElementById('nombreUsuario').value;
        const contrasena = document.getElementById('contrasena').value;
        const tipoUsuario = document.querySelector('input[name="tipoUsuario"]:checked').value;
        

        if (tipoUsuario == 'emprendedor') {
            // Realizar el fetch para iniciar sesión
            fetch('http://localhost:3000/emprendedor/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombreUsuario,
                    contraseña:contrasena,
                }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status} - ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    // Almacenar el token en las cookies
                    document.cookie = `token=${data.data.token}; path=/`;
                    document.cookie = `imagenperfil=${data.data.emprendedor.imagenPerfil}; path=/`;
                    document.cookie = `nombreusuario=${data.data.emprendedor.nombreUsuario}; path=/`;
                    // Puedes redirigir a otra página después del inicio de sesión si lo deseas
                    
                    window.location.href = 'index.html';
                })
                .catch(error => {
                    console.error('Error:', error);
                    console.log(error);
                    // Puedes manejar errores de inicio de sesión aquí
                    alert('Error al iniciar sesión. Verifica tus credenciales.');
                });
        }
    });
});