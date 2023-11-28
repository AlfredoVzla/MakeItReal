document.addEventListener('DOMContentLoaded', function () {
    const radioPatrocinador = document.getElementById('patrocinador');
    const camposPatrocinador = document.getElementById('camposPatrocinador');
    const form = document.querySelector('form');
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const correoElectronico = document.getElementById('correoElectronico');
    const nombreUsuario = document.getElementById('nombreUsuario');
    const contrasena = document.getElementById('contrasena');
    const imagenPreview = document.getElementById('imagen-preview');
    const experiencia = document.getElementById('experienciasProyectos');

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
        if (radioPatrocinador.checked) {
            validarPatrocinador();
        } else {
            validarEmprendedor();
        }
    });

    function validarEmprendedor() {
        // Lógica de validación para emprendedores

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

        // Resto del código para emprendedores

        const formDataEmprendedor = {
            nombre: nombre.value,
            telefono: telefono.value,
            correoElectronico: correoElectronico.value,
            nombreUsuario: nombreUsuario.value,
            contraseña: contrasena.value,
            imagenPerfil: imagenPerfil,
        };

        const urlEmprendedor = 'http://localhost:3000/emprendedor/';

        // Realizar el fetch a la URL para emprendedores
        fetch(urlEmprendedor, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataEmprendedor),
        })
            .then(response => response.json())
            .then(data => {
                nombre.value = '';
                telefono.value = '';
                correoElectronico.value = '';
                nombreUsuario.value = '';
                contrasena.value = '';
                imagenPreview.src = '';
                experiencia.value = '';

                alert("Se ha creado correctamente el usuario emprendedor");

                window.location.href = 'index.html';
            })
            .catch(error => {
                alert(`Error al crear el usuario emprendedor: ${error.message}`);
            });
    }

    function validarPatrocinador() {
        // Lógica de validación para patrocinadores

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

        // Resto del código para patrocinadores

        const formDataPatrocinador = {
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

        const urlPatrocinador = 'http://localhost:3000/patrocinador/';

        // Realizar el fetch a la URL para patrocinadores
        fetch(urlPatrocinador, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataPatrocinador),
        })
            .then(response => response.json())
            .then(data => {
                nombre.value = '';
                telefono.value = '';
                correoElectronico.value = '';
                nombreUsuario.value = '';
                contrasena.value = '';
                imagenPreview.src = '';
                experiencia.value = '';


                alert("Se ha creado correctamente el usuario patrocinador");

                window.location.href = 'index.html';
            })
            .catch(error => {
                alert(`Error al crear el usuario patrocinador: ${error.message}`);
            });
    }
});
