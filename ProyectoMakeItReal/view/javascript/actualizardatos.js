document.addEventListener('DOMContentLoaded', function () {
    const radioPatrocinador = document.getElementById('patrocinador');
    const camposPatrocinador = document.getElementById('camposPatrocinador');

    // Obtener el nombre de usuario y el token desde las cookies
    const tuDato = getCookie('nombreusuario');
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
            proyectosPatrocinador: 0,
            montoTotalPatrocinado: 0,
            experienciaProyectos: experiencia.value
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
                // Limpiar los campos después de enviar el formulario con éxito
                nombre.value = '';
                telefono.value = '';
                correoElectronico.value = '';
                nombreUsuario.value = '';
                contrasena.value = '';
                imagenPreview.src = '';
                experiencia.value = '';

                window.location.href = 'index.html';
            })
            .catch(error => {
                console.log(error);
            });
    });

    // Función para obtener el valor de una cookie por su nombre
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
});
