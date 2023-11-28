document.addEventListener('DOMContentLoaded', function () {
    const proyectosContainer = document.getElementById('proyectos-container');
    const paginaActualElement = document.getElementById('pagina-actual');
    const paginaAnteriorBtn = document.getElementById('pagina-anterior');
    const paginaSiguienteBtn = document.getElementById('pagina-siguiente');
    const mensajeError = document.getElementById('mensaje-error');
    const tuToken = getCookie('token');

    const proyectosPorPagina = 3;
    let paginaActual = 1;
    let totalProyectos = 0;
    let proyectos = [];

    function obtenerProyectosDesdeBD() {
        const idEmprendedor = parseInt(getCookieID('idEmprendedor'));
    
        fetch('http://localhost:3000/proyectos')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                const proyectosFiltrados = data.data.proyectos.filter(proyecto => proyecto.id_Emprendedor === idEmprendedor);
                proyectos.splice(0, proyectos.length); // Limpiar el arreglo existente
                proyectos.push(...proyectosFiltrados); // Agregar los nuevos proyectos filtrados al arreglo
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


    async function mostrarModalEditar(proyecto) {
        const modal = document.getElementById('modalEditar');
        modal.style.display = 'block';
    
        // Lógica para cargar los datos del proyecto en el modal para editar
        const tituloInput = document.getElementById('titulo');
        tituloInput.value = proyecto.titulo;
    
        const descripcionInput = document.getElementById('descripcion');
        descripcionInput.value = proyecto.descripcion;
    
        const objetivoInput = document.getElementById('objetivo');
        objetivoInput.value = proyecto.objetivo;
    
        const estadoInput = document.getElementById('estado');
        estadoInput.value = proyecto.estado;
    
        const metaFinanciamientoInput = document.getElementById('metaFinanciamiento');
        metaFinanciamientoInput.value = proyecto.metaFinanciamiento;
    
    
    
        const guardarCambiosBtn = document.getElementById('guardarCambios');
        const cerrarModalBtn = document.getElementById('cerrarModal');
    
        guardarCambiosBtn.addEventListener('click', async () => {
            // Obtener los nuevos valores de los campos editados
            const nuevoTitulo = tituloInput.value;
            const nuevaDescripcion = descripcionInput.value;
            const nuevoObjetivo = objetivoInput.value;
            const nuevoEstado = estadoInput.value;
            const nuevaMetaFinanciamiento = metaFinanciamientoInput.value;
           // const nuevaCantidadRecaudada = cantidadRecaudadaInput.value;
    
            // Enviar los nuevos valores al servidor para actualizar el proyecto
            // Lógica para enviar los datos al servidor...
            try {
                console.log("EL ID DEL PROYECT0: "+proyecto.idProyecto);
                const response = await fetch(`http://localhost:3000/proyectos/${proyecto.idProyecto}`, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': tuToken,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        titulo: nuevoTitulo,
                        descripcion: nuevaDescripcion,
                        fechaInicio: proyecto.fechaInicio,
                        fechaCreación: proyecto.fechaCreación,
                        objetivo: nuevoObjetivo,
                        estado: nuevoEstado,
                        masInformacion: proyecto.masInformacion,
                        metaFinanciamiento: nuevaMetaFinanciamiento,
                        cantidadRecaudada: proyecto.cantidadRecaudada,
                        id_Categoria: proyecto.id_Categoria,
                        id_Emprendedor: proyecto.id_Emprendedor
                    
                    }),
                });
                
                if (response.ok) {
                    window.location.reload();
                   
                    obtenerProyectosDesdeBD();
                    console.log("Se actualizó el proyecto");
                } else {
                    
                    alert('Ocurrió un error al editar el proyecto. Por favor, inténtalo de nuevo.');
                }
            } catch (error) {
                console.error("Error al editar categoría:", error);
            }
    
            // Cerrar el modal después de guardar los cambios
            modal.style.display = 'none';
        });
    
        cerrarModalBtn.addEventListener('click', () => {
            // Cerrar el modal al hacer clic en el botón "Cerrar"
            modal.style.display = 'none';
        });
    }
    

    async function renderizarProyectos(proyectosPagina) {
         // Limpiar el contenedor antes de agregar los nuevos proyectos
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
                <button class="editar-btn">Editar</button>
                <button class="detalle-btn">Detalle</button>
                <button class="financiar-btn">Financiar</button>
                
            `;
            proyectosContainer.appendChild(proyectoDiv);
           

            
            proyectosContainer.appendChild(proyectoDiv);
           
            
            const editarBtn = proyectoDiv.querySelector('.editar-btn');
            editarBtn.removeEventListener('click', mostrarModalEditar); // Eliminar el evento anterior
            editarBtn.addEventListener('click', async () => {
                await mostrarModalEditar(proyecto);

            
              
            });

            const financiarBtn = proyectoDiv.querySelector('.financiar-btn');
        financiarBtn.addEventListener('click', async () => {
            await mostrarModalPago(proyecto);
        });

            const detalleBtn = proyectoDiv.querySelector('.detalle-btn');
          
            detalleBtn.addEventListener('click', async () => {
                
                const urlParams = new URLSearchParams();
            
                
                urlParams.append('id_Proyecto', proyecto.idProyecto);
                urlParams.append('titulo', proyecto.titulo);
                urlParams.append('descripcion', proyecto.descripcion);
                urlParams.append('fechaInicio', proyecto.fechaInicio);
                urlParams.append('fechaCreacion', proyecto.fechaCreacion);
                urlParams.append('objetivo', proyecto.objetivo);
                urlParams.append('estado', proyecto.estado);
                urlParams.append('metaFinanciamiento', proyecto.metaFinanciamiento);
                urlParams.append('cantidadRecaudada', proyecto.cantidadRecaudada);
            
                
                window.location.href = `proyectoVisualizar.html?${urlParams.toString()}`;
            });
        }
    }
    
    async function mostrarModalPago(proyecto) {
        const tuToken = getCookie('token');
        const modalPago = document.getElementById('modalPago');
        modalPago.style.display = 'block';
    
        const limpiarCampos = () => {
            document.getElementById('monto').value = '';
            document.getElementById('fecha').value = '';
            document.getElementById('metodo').value = '';
            document.getElementById('concepto').value = '';
            document.getElementById('id_Patrocinador').value = '';
        };
    
        const btnCerrarModal = modalPago.querySelector('.close');
        btnCerrarModal.addEventListener('click', () => {
            modalPago.style.display = 'none';
        });
    
        const btnGuardarPago = modalPago.querySelector('#guardarPago');
        btnGuardarPago.addEventListener('click', async () => {
            const monto = document.getElementById('monto').value;
            const fecha = document.getElementById('fecha').value;
            const metodo = document.getElementById('metodo').value;
            const concepto = document.getElementById('concepto').value;
            const idPatrocinador = document.getElementById('id_Patrocinador').value;
    
            const datosModal = {
                monto,
                fecha,
                método: metodo,
                concepto,
                id_Patrocinador: parseInt(idPatrocinador),
                id_Proyecto: proyecto.idProyecto
            };
    
            try {
                const response = await fetch('http://localhost:3000/pago/', {
                    method: 'POST',
                    headers: {
                        'Authorization': tuToken,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datosModal)
                });
    
                if (!response.ok) {
                    throw new Error('Error al enviar los datos de pago');
                }
    
                const proyectoActualizado = {
                    ...proyecto,
                    cantidadRecaudada: proyecto.cantidadRecaudada + parseFloat(monto)
                };
    
                const responseProyecto = await fetch(`http://localhost:3000/proyectos/${proyecto.idProyecto}`, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': tuToken,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(proyectoActualizado)
                });
    
                if (responseProyecto.ok) {
                    window.location.reload();
                    obtenerProyectosDesdeBD();
                    console.log('Se actualizó el proyecto');
                } else {
                    alert('Ocurrió un error al editar el proyecto. Por favor, inténtalo de nuevo.');
                }
    
                modalPago.style.display = 'none';
                limpiarCampos();
            } catch (error) {
                console.error('Error:', error.message);
            }
        });
    
        const btnCerrarModalPago = modalPago.querySelector('#cerrarModalPago');
        btnCerrarModalPago.addEventListener('click', () => {
            modalPago.style.display = 'none';
            limpiarCampos();
        });
    }
    
    

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    

    function actualizarPagina() {
        console.log("SE LLAMO ACTUALIZAR PAGINA ");
        totalProyectos = proyectos.length;
        proyectosContainer.innerHTML = ''; // Limpiar contenedor de proyectos
    
        const inicio = (paginaActual - 1) * proyectosPorPagina;
        const fin = inicio + proyectosPorPagina;
        const proyectosPagina = proyectos.slice(inicio, fin);
    console.log("PROYECTOS: "+proyectosPagina.length);
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
