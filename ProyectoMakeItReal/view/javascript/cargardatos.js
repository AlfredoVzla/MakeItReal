document.addEventListener('DOMContentLoaded', async function () {
    const radioEmprendedor = document.getElementById('emprendedor');
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

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const cookiePatrocinador = getCookie("nombreusuariopatrocinador");

    if (cookiePatrocinador) {
        const urlPatrocinador = `http://localhost:3000/patrocinador/${cookiePatrocinador}`
        // Mostrar los campos relacionados con el patrocinador
        camposPatrocinador.style.display = 'block';
        try {
            const response = await fetch(urlPatrocinador);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();

            radioEmprendedor.disabled = true;

            radioPatrocinador.checked = true;

            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre');
            const telefono = document.getElementById('telefono');
            const correoElectronico = document.getElementById('correoElectronico');
            const nombreUsuario = document.getElementById('nombreUsuario');
            const contrasena = document.getElementById('contrasena');
            const imagenPreview = document.getElementById('imagen-preview');
            const experiencia = document.getElementById('experienciasProyectos');

            // Ingresar los datos en los campos del formulario
            nombre.value = data.data.patrocinador.nombre;
            telefono.value = data.data.patrocinador.telefono;
            correoElectronico.value = data.data.patrocinador.correoElectronico;
            nombreUsuario.value = data.data.patrocinador.nombreUsuario;
            imagenPreview.src = data.data.patrocinador.imagenPerfil
            contrasena.value = '';
            experiencia.value = data.data.patrocinador.experienciaProyectos;

            // Hacer los campos no editables
            correoElectronico.readOnly = true;
            nombreUsuario.readOnly = true;
            // Deshabilitar el elemento
            radioEmprendedor.disable = true;

            // Obtener el src de la imagen-preview
            let imagenPerfil = imagenPreview.getAttribute('src');

            if (imagenPerfil && imagenPerfil.trim() !== "") {
                // La imagen-preview tiene un src no vacío
            } else {
                // La imagen-preview no tiene un src o está vacío
                imagenPerfil = 'https://res.cloudinary.com/dintcsgzb/image/upload/v1701012876/imagenesperfiles/gm73y9qjdhiopzczratk.png';
            }
            // Resto del código...
        } catch (error) {
            console.error('Error:', error);
            mostrarError('Error en la conexión con el servidor. Por favor, inténtelo más tarde.');
            // Mostrar mensaje de error en caso de fallo
        }
    } else {
        const tuDato = getCookie('nombreusuario'); // Asegúrate de tener una función getCookie que funcione correctamente
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        // Construir la URL con el dato de la cookie
        const url = `http://localhost:3000/emprendedor/${tuDato}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();

            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre');
            const telefono = document.getElementById('telefono');
            const correoElectronico = document.getElementById('correoElectronico');
            const nombreUsuario = document.getElementById('nombreUsuario');
            const contrasena = document.getElementById('contrasena');
            const imagenPreview = document.getElementById('imagen-preview');
            const experiencia = document.getElementById('experienciasProyectos');

            // Ingresar los datos en los campos del formulario
            nombre.value = data.data.emprendedor.nombre;
            telefono.value = data.data.emprendedor.telefono;
            correoElectronico.value = data.data.emprendedor.correoElectronico;
            nombreUsuario.value = data.data.emprendedor.nombreUsuario;
            imagenPreview.src = data.data.emprendedor.imagenPerfil
            contrasena.value = '';

            // Hacer los campos no editables
            correoElectronico.readOnly = true;
            nombreUsuario.readOnly = true;
            // Deshabilitar el elemento
            radioPatrocinador.disabled = true;

            // Obtener el src de la imagen-preview
            let imagenPerfil = imagenPreview.getAttribute('src');

            if (imagenPerfil && imagenPerfil.trim() !== "") {
                // La imagen-preview tiene un src no vacío
            } else {
                // La imagen-preview no tiene un src o está vacío
                imagenPerfil = 'https://res.cloudinary.com/dintcsgzb/image/upload/v1701012876/imagenesperfiles/gm73y9qjdhiopzczratk.png';
            }
            // Resto del código...
        } catch (error) {
            console.error('Error:', error);
            mostrarError('Error en la conexión con el servidor. Por favor, inténtelo más tarde.');
            // Mostrar mensaje de error en caso de fallo
        }
    }

});
