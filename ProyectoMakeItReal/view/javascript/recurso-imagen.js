// Función para mostrar la imagen seleccionada en el input de tipo file
function mostrarImagenPreview(event) {
    const imagenPreview = document.getElementById('imagen-preview');
    const inputImagen = event.target;

    if (inputImagen.files && inputImagen.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imagenPreview.src = e.target.result;
            console.log("IMAGEN: "+e.target.result);
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

        
        const imagenPreview = document.getElementById('imagen-preview');
        imagenPreview.src = data.imageUrl;

      
    })
    .catch(error => {
        console.error('Error al subir la imagen:', error);
    });
}
//------------------------------ Imagenes de proyecto
function mostrarImagenPreviewProyecto(event) {
    const inputImagen = event.target;
  
    const previewContainer = document.getElementById('preview-container-proyecto');

    if (inputImagen.files) {
        for (let i = 0; i < inputImagen.files.length; i++) {
            const reader = new FileReader();
            const file = inputImagen.files[i];

            reader.onload = function (e) {
                const imageElement = document.createElement('img');
                imageElement.src = e.target.result;

                const listItem = document.createElement('li');
                listItem.appendChild(imageElement);
                previewContainer.appendChild(listItem);
            }

            reader.readAsDataURL(file);
        }
    }
}


var cloudinaryImageUrls = [];

function subirUnaImagen(file) {
    console.log(cloudinaryImageUrls);
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('image', file);

        fetch('http://localhost:3000/emprendedor/subirimagen', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            
            
            const imageUrl = data.imageUrl;
            cloudinaryImageUrls.push(imageUrl);
            
            resolve(); 
        })
        .catch(error => {
            console.error('Error al subir la imagen:', error);
            reject(error); 
        });
    });
}

function subirImagenesProyecto() {
    return new Promise((resolve, reject) => {
        cloudinaryImageUrls = [];
        const previewContainer = document.getElementById('preview-container-proyecto');
        const images = previewContainer.getElementsByTagName('img');

        if (images.length > 0) {
            const imageFiles = Array.from(images).map(img => img.src);

           
            const promesasSubida = imageFiles.map(imgSrc => {
                return fetch(imgSrc)
                    .then(res => res.blob())
                    .then(blob => subirUnaImagen(blob));
            });

            Promise.all(promesasSubida)
                .then(() => {
                    console.log('Todas las imágenes han sido subidas:', cloudinaryImageUrls);
                    resolve(cloudinaryImageUrls); 
                   
                })
                .catch(error => {
                    console.error('Error al subir las imágenes:', error);
                    reject(error); 
                });
        } else {
           
            resolve([]);
        }
    });
}


document.getElementById('input-imagen-proyecto').addEventListener('change', mostrarImagenPreviewProyecto);
