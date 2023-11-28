document.addEventListener('DOMContentLoaded', function () {
    const proyectosContainer = document.getElementById('proyectos-container');
    const paginaActualElement = document.getElementById('pagina-actual');
    const paginaAnteriorBtn = document.getElementById('pagina-anterior');
    const paginaSiguienteBtn = document.getElementById('pagina-siguiente');
    const mensajeError = document.getElementById('mensaje-error');

    const proyectosPorPagina = 3;
    let paginaActual = 1;
    let totalProyectos = 0;
    let proyectos = [];

    function obtenerProyectosDesdeBD() {
        fetch('http://localhost:3000/proyectos')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                proyectos = data.data.proyectos;
                actualizarPagina();
            })
            .catch(error => {
                mostrarError('Error en la conexión con el servidor. Por favor, inténtelo más tarde.');
            });
    }

    function mostrarError(mensaje) {
        mensajeError.textContent = mensaje;
        mensajeError.style.display = 'block';
    }

    async function renderizarProyectos(proyectosPagina) {
        proyectosContainer.innerHTML = '';

        for (const proyecto of proyectosPagina) {
            const primeraImagen = await obtenerPrimeraImagenProyecto(proyecto.idProyecto);
            const proyectoDiv = document.createElement('div');
            proyectoDiv.classList.add('info-proyecto');
            proyectoDiv.innerHTML = `
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
        }
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

    async function obtenerPrimeraImagenProyecto(idProyecto) {
        try {
            const response = await fetch(`http://localhost:3000/imagen/${idProyecto}`);
            const data = await response.json();

            if (data && data.data && data.data.imagenesProyecto && Array.isArray(data.data.imagenesProyecto) && data.data.imagenesProyecto.length > 0) {
                const primeraImagen = data.data.imagenesProyecto[0].imagen;
                return primeraImagen;
            } else {
                console.error('Error: La propiedad imagenesProyecto no es un array válido o está vacío.');
                return 'https://via.placeholder.com/450'; // Coloca aquí la URL por defecto si no hay imagen
            }
        } catch (error) {
            console.error('Error al obtener imágenes del proyecto:', error);
            return 'https://via.placeholder.com/450'; // Coloca aquí la URL por defecto si hay errores
        }
    }

    obtenerProyectosDesdeBD();
});
