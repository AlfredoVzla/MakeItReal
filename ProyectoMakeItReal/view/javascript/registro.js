document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre');
        const telefono = document.getElementById('telefono');
        const correoElectronico = document.getElementById('correoElectronico');
        const nombreUsuario = document.getElementById('nombreUsuario');
        const contrasena = document.getElementById('contrasena');
        const imagenPreview = document.getElementById('imagen-preview');

        // Obtener el src de la imagen-preview
        const imagenPerfil = imagenPreview.src;

        // Crear un objeto con los datos del formulario
        const formData = {
            nombre: nombre.value,
            telefono: telefono.value,
            correoElectronico: correoElectronico.value,
            nombreUsuario: nombreUsuario.value,
            contraseña: contrasena.value,
            imagenPerfil,
        };

        // Realizar el fetch a la URL
        fetch('http://localhost:3000/emprendedor/', {
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

                alert("Se ha creado correctamente el emprendedor");
            })
            .catch(error => {
                alert("Error al crear el emprendedor");
            });
    });
});
