document.addEventListener('DOMContentLoaded', function () {
    const radioPatrocinador = document.getElementById('patrocinador');
    const camposPatrocinador = document.getElementById('camposPatrocinador');
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

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre');
        const telefono = document.getElementById('telefono');
        const correoElectronico = document.getElementById('correoElectronico');
        const nombreUsuario = document.getElementById('nombreUsuario');
        const contrasena = document.getElementById('contrasena');
        const imagenPreview = document.getElementById('imagen-preview');
        const experiencia = document.getElementById('experienciasProyectos');

        fetch("http://localhost:3000/emprendedor/")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                for (const emprendedor of data.data.emprendedores) {
                    if (correoElectronico.value == emprendedor.correoElectronico || nombreUsuario.value == emprendedor.nombreUsuario) {
                        alert("Ya existe un usuario registrado con ese correo electrónico o nombre de usuario");
                        return; // Salir del bucle y de la función
                    }
                }
                // Obtener el src de la imagen-preview
                // Obtener el src de la imagen-preview
                let imagenPerfil = imagenPreview.getAttribute('src');

                if (imagenPerfil && imagenPerfil.trim() !== "") {
                    // La imagen-preview tiene un src no vacío
                    console.log(imagenPerfil);
                } else {
                    // La imagen-preview no tiene un src o está vacío
                    imagenPerfil = 'https://res.cloudinary.com/dintcsgzb/image/upload/v1701012876/imagenesperfiles/gm73y9qjdhiopzczratk.png';
                    console.log(imagenPerfil);
                }

                // Resto del código...

                // Crear un objeto con los datos del formulario
                const formData = {
                    nombre: nombre.value,
                    telefono: telefono.value,
                    correoElectronico: correoElectronico.value,
                    nombreUsuario: nombreUsuario.value,
                    contraseña: contrasena.value,
                    imagenPerfil: imagenPerfil,
                    proyectosPatrocinador: 0,
                    montoTotalPatrocinado: 0,
                    experienciaProyectos: experiencia.value
                };


                // Realizar el fetch a la URL
                const url = radioPatrocinador.checked ? 'http://localhost:3000/patrocinador/' : 'http://localhost:3000/emprendedor/';

                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
                    .then(response => response.json())
                    .then(data => {
                        // Limpiar los campos después de enviar el formulario con éxito
                        nombre.value = '';
                        telefono.value = '';
                        correoElectronico.value = '';
                        nombreUsuario.value = '';
                        contrasena.value = '';
                        imagenPreview.src = '';
                        experiencia.value = '';

                        if (radioPatrocinador.checked) {
                            alert("Se ha creado correctamente el usuario");
                        } else {
                            alert("Se ha creado correctamente el usuario");
                        }
                    })
                    .catch(error => {
                        if (radioPatrocinador.checked) {
                            alert(error);
                        } else {
                            alert(error);
                        }
                    });
            })
            .catch(error => {
                console.error('Error:', error);
                mostrarError('Error en la conexión con el servidor. Por favor, inténtelo más tarde.');
                // Mostrar mensaje de error en caso de fallo
            });
    });
});
