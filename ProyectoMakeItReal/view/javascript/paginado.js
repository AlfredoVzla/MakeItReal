document.addEventListener('DOMContentLoaded', function () {
    const proyectosContainer = document.getElementById('proyectos-container');
    const paginaActualElement = document.getElementById('pagina-actual');
    const paginaAnteriorBtn = document.getElementById('pagina-anterior');
    const paginaSiguienteBtn = document.getElementById('pagina-siguiente');
    const mensajeError = document.getElementById('mensaje-error'); // Agregado para mostrar el mensaje de error

    const proyectosPorPagina = 3;
    let paginaActual = 1;
    let totalProyectos = 0;
    let proyectos = [];

    // Función para obtener proyectos desde el servidor
    // Función para obtener proyectos desde el servidor
function obtenerProyectosDesdeBD() {
    // Hacer una solicitud fetch a tu servidor
    fetch('http://localhost:3000/proyectos')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Asignar los proyectos obtenidos a la variable proyectos
            proyectos = data.data.proyectos;

            // Llamar a la función actualizarPagina para renderizar los proyectos
            actualizarPagina();
        })
        .catch(error => {
            console.error('Error:', error);
            mostrarError('Error en la conexión con el servidor. Por favor, inténtelo más tarde.'); // Mostrar mensaje de error en caso de fallo
        });
}

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
    mensajeError.style.display = 'block';
}



    function mostrarError() {
        mensajeError.style.display = 'block';
    }

    function renderizarProyectos(proyectosPagina) {
        proyectosContainer.innerHTML = '';

        proyectosPagina.forEach(async (proyecto) => {
            console.log(proyecto);
            const imagenesProyecto = await obtenerPrimeraImagenProyecto(proyecto.idProyecto);
            console.log(imagenesProyecto);
            // Mostrar solo la primera imagen si hay alguna
            const rutaBase = '../img/'
            const primeraImagen = imagenesProyecto.length > 0 ? rutaBase + imagenesProyecto : 'ruta_por_defecto.jpg';
            const proyectoDiv = document.createElement('div');
            proyectoDiv.classList.add('info-proyecto');
            proyectoDiv.innerHTML = `

            <style>

            .info-proyecto h3 {
                color: #333;
            }
        
            .descripcion {
                color: #555;
            }
        
            .fechas-proyecto {
                margin-top: 10px;
                color: #777;
            }
        
            .objetivo,
            .estado,
            .meta-financiamiento,
            .cantidad-recaudada {
                margin-top: 10px;
                color: #333;
            }
        
            .mas-informacion {
                display: inline-block;
                margin-top: 10px;
                color: #007bff;
                text-decoration: none;
            }
        
            .mas-informacion:hover {
                text-decoration: underline;
            }
        
            .info-proyecto img {
                width: 450px; /* Ajusta el tamaño máximo al 100% del contenedor */
                height: 450px; /* Ajusta la altura máxima al 100% del contenedor */
                display: block; /* Evita el espacio adicional debajo de la imagen */
                margin: 0 auto; /* Centra la imagen horizontalmente */
            }
            .info-proyecto {
                margin-bottom: 20px; /* Espacio entre proyectos (vertical) */
                margin-right: 20px; /* Espacio entre proyectos (horizontal) */
            }
            
            </style>

                <h3>${proyecto.titulo}</h3>
                <img src="${primeraImagen}" alt="Imagen del Proyecto">
                <p>${proyecto.descripcion}</p>
                <div class="fechas-proyecto">
                    <p>Fecha de inicio: ${proyecto.fechaInicio}</p>
                    <p>Fecha de creación: ${proyecto.fechaCreación}</p>
                </div>
                <p><span>Objetivo: </span>${proyecto.objetivo}</p>
                <p><span>Estado: </span>${proyecto.estado}</p>
                <a href="#">Más información</a>
                <p><span>Meta de financiamiento: </span>${proyecto.metaFinanciamiento}</p>
                <p><span>Cantidad recaudada: </span>${proyecto.cantidadRecaudada}</p>

          `;
            proyectosContainer.appendChild(proyectoDiv);
        });
    }

    function actualizarPagina() {
        totalProyectos = proyectos.length;

        const inicio = (paginaActual - 1) * proyectosPorPagina;
        const fin = inicio + proyectosPorPagina;
        const proyectosPagina = proyectos.slice(inicio, fin);

        renderizarProyectos(proyectosPagina);
        paginaActualElement.textContent = paginaActual;
    }

    paginaAnteriorBtn.addEventListener('click', function () {
        if (paginaActual > 1) {
            paginaActual--;
            actualizarPagina();
        }
    });

    paginaSiguienteBtn.addEventListener('click', function () {
        const totalPaginas = Math.ceil(totalProyectos / proyectosPorPagina);
        if (paginaActual < totalPaginas) {
            paginaActual++;
            actualizarPagina();
        }
    });
    // Función para obtener el nombre de la primera imagen del proyecto
    async function obtenerPrimeraImagenProyecto(idProyecto) {
        try {
            const response = await fetch(`http://localhost:3000/imagen/${idProyecto}`);
            const data = await response.json();

            // Verifica si 'data' y 'data.imagenesProyecto' existen y son un array antes de acceder al primer elemento
            if (data && data.data && data.data.imagenesProyecto && Array.isArray(data.data.imagenesProyecto) && data.data.imagenesProyecto.length > 0) {
                // Accede al primer elemento del array y extrae la propiedad 'imagen'
                const primeraImagen = data.data.imagenesProyecto[0].imagen;
                return primeraImagen;
            } else {
                console.error('Error: La propiedad imagenesProyecto no es un array válido o está vacío.');
                return null;
            }
        } catch (error) {
            console.error('Error al obtener imágenes del proyecto:', error);
            return null;
        }
    }
    // Al cargar la página, obtener los proyectos desde el servidor
    obtenerProyectosDesdeBD();
});
