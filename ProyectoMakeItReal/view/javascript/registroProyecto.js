function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registroProyecto-form');
    var projectId="";
    //const tuToken = getCookie('token');

    const tuToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJNYXJpYTIiLCJpYXQiOjE3MDExMjc3NzgsImV4cCI6MTcwMTEzMTM3OH0.MsN7t63Py2NgDwEpqMSmZzv6gF2Ozv9C_ZuciDeXuhQ';
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        
     

        const previewContainer = document.getElementById('preview-container-proyecto');

        const titulo = document.getElementById('titulo').value;
        const descripcion = document.getElementById('descripcion').value;
        const fechaInicio = document.getElementById('fechaInicio').value;
        const objetivo = document.getElementById('objetivo').value;
        const masInformacion = document.getElementById('masInformacion').value;
        const metaFinanciamiento = document.getElementById('metaFinanciamiento').value;
       
        

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
            id_Categoria: 1,
            id_Emprendedor: 1
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
