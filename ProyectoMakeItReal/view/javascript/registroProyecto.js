
document.addEventListener('DOMContentLoaded', async function () {
    
    const modalCategoria = document.getElementById('modalCategoria');
    const abrirCategoriaModal = document.getElementById('abrirCategoriaModal');
    const nuevaNombreCategoria = document.getElementById('nuevaNombreCategoria');
    const nuevaDescripcionCategoria = document.getElementById('nuevaDescripcionCategoria');

    abrirCategoriaModal.addEventListener('click', function () {
        modalCategoria.style.display = 'block'; 
    });

    
    const cerrarModalCategoria = document.getElementById('cerrarModalCategoria');
    cerrarModalCategoria.addEventListener('click', function () {
        modalCategoria.style.display = 'none';
    });


    const guardarNuevaCategoria = document.getElementById('guardarNuevaCategoria');
    guardarNuevaCategoria.addEventListener('click', function (event) {
        event.preventDefault();
        const nuevaCategoria = {
            nombre: nuevaNombreCategoria.value,
            descripcion: nuevaDescripcionCategoria.value
        };
    
        fetch('http://localhost:3000/categoria', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevaCategoria),
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    const errorMessageIndex = text.indexOf('Error:');
                    if (errorMessageIndex !== -1) {
                        const errorMessage = text.substring(errorMessageIndex, text.indexOf('<', errorMessageIndex));
                        throw new Error(errorMessage);
                    } else {
                        throw new Error('Error desconocido');
                    }
                });
            }
            return response.json();
        })
        .then(data => {
            const selectCategoria = document.getElementById('categoria');
            const option = document.createElement('option');
            option.value = nuevaCategoria.nombre;
            option.textContent = nuevaCategoria.nombre;
            selectCategoria.appendChild(option);
    //Limpiar campos y cerrar el modal
            nuevaNombreCategoria.value = '';
            nuevaDescripcionCategoria.value = '';

            modalCategoria.style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            
            alert(`Error al agregar la categoría: ${error.message}`);
        });
    });
    


    try {
        const categorias = await cargarCategorias();

        if (categorias === null) {
            console.error('Error al cargar categorías');
            return;
        }

        if (categorias.length === 0) {
            console.log('No se encontraron categorías');
            return;
        }

        

    } catch (error) {
        console.error('Error al cargar categorías:', error);
    }


   
    const form = document.getElementById('registroProyecto-form');
    var projectId="";
    
   const tuToken = getCookie('token');
   if (!tuToken) {
   
    window.location.href = 'index.html';
    return;
}

    form.addEventListener('submit',  async function (event) {
        event.preventDefault();


        const previewContainer = document.getElementById('preview-container-proyecto');

      

        
        const idEmprendedor = parseInt(getCookieID('idEmprendedor'));
        
        console.log("ID EMPRENDEDOR: "+idEmprendedor);

        const titulo = document.getElementById('titulo').value;
        const descripcion = document.getElementById('descripcion').value;
        const fechaInicio = document.getElementById('fechaInicio').value;
        const objetivo = document.getElementById('objetivo').value;
        const masInformacion = document.getElementById('masInformacion').value;
        const metaFinanciamiento = document.getElementById('metaFinanciamiento').value;

        const categoria_Seleccionada = document.getElementById('categoria');
        const id_Categoria = categoria_Seleccionada.value; 
       

        const data = {
            titulo: titulo,
            descripcion: descripcion,
            fechaInicio: fechaInicio,
            fechaCreación: new Date(),
            objetivo: objetivo,
            estado: "En progreso",
            masInformacion: masInformacion,
            metaFinanciamiento: metaFinanciamiento,
            cantidadRecaudada: 0.0,
            id_Categoria: id_Categoria,
            id_Emprendedor: idEmprendedor
        };

        fetch('http://localhost:3000/proyectos/', {
            method: 'POST',
            headers: {
                'Authorization': tuToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    if (errorData && errorData.error) {
                        const errorMessage = errorData.error.replace('Error al crear proyecto: Validation error: ', '');
                        throw new Error(errorMessage);
                    } else if (errorData && errorData.errores) {
                        throw new Error(errorData.errores.join('\n'));
                    } else {
                        const statusCode = response.status;
                        throw new Error('Error al crear el proyecto ' + statusCode);
                    }
                });
            }
            return response.json();
        })
        .then(data => {
            
            const nuevoProyecto = data.data.proyecto;
             projectId = nuevoProyecto.idProyecto;
             return   subirImagenesProyecto();   
        })
        .then(() => {
          
            const imagenesSubidas = [...cloudinaryImageUrls];
            imagenesSubidas.forEach(imageUrl => {
                const imageData = {
                    imagen: imageUrl,
                    idProyecto: projectId
                };
        
                fetch('http://localhost:3000/imagen/', {
                    method: 'POST',
                    headers: {
                        'Authorization': tuToken,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(imageData),
                })
                .then(response => {
                    if (!response.ok) {
                        return response.json().then(errorData => {
                            
                        });
                    }

                })
                .catch(error => {
                    console.error('Error al subir la imagen:', error);
                });
            });
        
            document.getElementById('registroProyecto-form').reset();
            const previewContainer = document.getElementById('preview-container-proyecto');
while (previewContainer.firstChild) {
    previewContainer.removeChild(previewContainer.firstChild);
}

          
            alert("Se ha creado correctamente el proyecto");
        
           
        })
        .catch(error => {
            alert(error.message || "Error al crear el proyecto");
        });
    });
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function getCookieID(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return '';
}



async function cargarCategorias() {
    const baseUrl = 'http://localhost:3000/categoria';
    const selectCategoria = document.getElementById('categoria');

    try {
        const response = await fetch(baseUrl);

        if (response.ok) {
            const data = await response.json();

            if (data.status === 'success' && data.data.categorias.length > 0) {
                const categorias = data.data.categorias;

                categorias.forEach(categoria => {
                    const option = document.createElement('option');
                    option.value = categoria.idCategoria;
                    option.textContent = categoria.nombre;
                    option.dataset.idCategoria = categoria.idCategoria; 
                    selectCategoria.appendChild(option);
                });

                return categorias;
            } else {
                return [];
            }
        } else {
            console.error(`Error`);
            return null;
        }
    } catch (error) {
        console.error("Error al buscar categorías:", error);
        return null;
    }
}




    