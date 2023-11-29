document.addEventListener('DOMContentLoaded', async() => {
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
    const id_Categoria = params.get('id_Categoria');
    const id_Emprendedor = params.get('id_Emprendedor');
console.log("CATEGORIA:"+id_Categoria);
    
    try {
        const categoriaEncontrada =  await buscarCategoriaPorId(id_Categoria);

        console.log("CATEGORIA ENCONTRA"+categoriaEncontrada);
        if (categoriaEncontrada) {
            
            document.getElementById('categoriaInput').value =  categoriaEncontrada.nombre;
        } else {
            console.log('La categoría no fue encontrada.');
        }
    } catch (error) {
        console.error('Error al obtener la categoría:', error);
    }

    document.getElementById('titulo').value = titulo;
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('fechaInicio').value = fechaInicio;
    document.getElementById('objetivo').value = objetivo;
    document.getElementById('masInformacion').value = masInformacion;
    document.getElementById('metaFinanciamiento').value = metaFinanciamiento;
    

    

    async function buscarCategoriaPorId(idCategoriaBuscada) {
        const baseUrl = 'http://localhost:3000/categoria';
    
        try {
            const response = await fetch(baseUrl);
    
            if (response.ok) {
                const data = await response.json();
    
                if (data.status === 'success' && data.data.categorias.length > 0) {
                    const categorias = data.data.categorias;
                    for (const categoria of categorias) {
                        
                        
                        if (parseInt(categoria.idCategoria) === parseInt(idCategoriaBuscada)) {
                            console.log('¡Coincidencia encontrada!');
                            console.log('Categoría encontrada:', categoria);
                            return categoria; // Retorna la categoría que coincide con el ID buscado
                        }
                    }
                    return null;
                } else {
                    return null;
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
    
    
    

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
});
