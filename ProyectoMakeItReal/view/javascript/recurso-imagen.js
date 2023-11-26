// Función para mostrar la imagen seleccionada en el input de tipo file
function mostrarImagenPreview(event) {
    const imagenPreview = document.getElementById('imagen-preview');
    const inputImagen = event.target;

    if (inputImagen.files && inputImagen.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imagenPreview.src = e.target.result;
        }

        reader.readAsDataURL(inputImagen.files[0]);
    }
}

// Función para subir la imagen al servidor
function subirImagen() {
    const inputImagen = document.getElementById('input-imagen');
    const formData = new FormData();

    formData.append('image', inputImagen.files[0]);

    fetch('http://localhost:3000/emprendedor/subirimagen', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);

        // Actualizar la propiedad src del elemento img con la URL obtenida
        const imagenPreview = document.getElementById('imagen-preview');
        imagenPreview.src = data.imageUrl;

        // Puedes realizar más acciones según la respuesta del servidor
    })
    .catch(error => {
        console.error('Error al subir la imagen:', error);
    });
}