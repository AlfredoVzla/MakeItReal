document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const tuToken = getCookie('token');

    const idProyecto = params.get('id_Proyecto');
    const titulo = params.get('titulo');
    const descripcion = params.get('descripcion');
    const fechaInicio = params.get('fechaInicio');
    const objetivo = params.get('objetivo');
    const masInformacion = params.get('masInformacion');
    const metaFinanciamiento = params.get('metaFinanciamiento');
    const categoria = params.get('categoria');

    document.getElementById('titulo').value = titulo;
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('fechaInicio').value = fechaInicio;
    document.getElementById('objetivo').value = objetivo;
   // document.getElementById('masInformacion').value = masInformacion;
    document.getElementById('metaFinanciamiento').value = metaFinanciamiento;

    const selectCategoria = document.getElementById('categoria');
    const option = document.createElement('option');
    option.value = categoria;
    option.textContent = categoria;
    selectCategoria.appendChild(option);

    function agregarComentario() {
        const textoComentario = document.getElementById('textoComentario').value;
        const calificacionComentario = document.getElementById('calificacionComentario').value;

        const data = {
            texto: textoComentario,
            fecha: obtenerFechaActual(),
            calificacion: calificacionComentario,
            id_Proyecto: idProyecto
        };

        fetch('http://localhost:3000/comentarios', {
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
                        throw new Error(errorData.error);
                    } else {
                        const statusCode = response.status;
                        throw new Error('Error al enviar el comentario ' + statusCode);
                    }
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Comentario enviado con éxito:', data);
        })
        .catch(error => {
            console.error('Error al enviar el comentario:', error.message);
        });
    }

    function obtenerFechaActual() {
        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${year}-${month}-${day}`;
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    document.getElementById('botonComentar').addEventListener('click', agregarComentario);
});
