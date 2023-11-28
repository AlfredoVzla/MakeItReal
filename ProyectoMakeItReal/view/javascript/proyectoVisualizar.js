document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const tuToken = getCookie('token');

    document.cookie = `idproyecto=${params.get('id_Proyecto')}; path=/`;

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


    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
});
