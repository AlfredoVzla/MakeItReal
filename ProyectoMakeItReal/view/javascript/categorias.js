document.addEventListener('DOMContentLoaded', async function () {
    const listaCategorias = document.getElementById('listaCategorias');
    await cargarCategorias('http://localhost:3000/categoria', listaCategorias);
});

async function cargarCategorias(baseUrl, container) {
    try {
        const response = await fetch(baseUrl);

        if (response.ok) {
            const data = await response.json();

            if (data.status === 'success' && data.data.categorias.length > 0) {
                const categoriasHTML = data.data.categorias.map(categoria => `
                    <div class="categoria" data-id="${categoria.idCategoria}">
                        <h3>${categoria.nombre}</h3>
                        <p>${categoria.descripcion}</p>
                        <label class="btn-eliminar" onclick="eliminarCategoria(event)">Eliminar</label>
                        <label class="btn-editar" onclick="editarCategoria(event, '${categoria.idCategoria}')">Editar</label>
                    </div>
                `).join('');

                container.innerHTML = categoriasHTML;
            } else {
                container.innerHTML = '<p>No se encontraron categorías</p>';
            }
        } else {
            console.error(`Error HTTP ${response.status}: ${response.statusText}`);
            container.innerHTML = `<p>Error HTTP ${response.status}: ${response.statusText}</p>`;
        }
    } catch (error) {
        console.error("Error al buscar categorías:", error);
        container.innerHTML = '<p>Error al buscar categorías. Por favor, inténtalo de nuevo.</p>';
    }
}

async function eliminarCategoria(event) {
    const categoriaId = event.currentTarget.closest('.categoria').getAttribute('data-id');

    try {
        if (categoriaId !== 'undefined') {
            const response = await fetch(`http://localhost:3000/categoria/${categoriaId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const listaCategorias = document.getElementById('listaCategorias');
                await cargarCategorias('http://localhost:3000/categoria', listaCategorias);
            } else {
                console.error(`Error HTTP ${response.status}: ${response.statusText}`);
                alert('Ocurrió un error al eliminar la categoría. Por favor, inténtalo de nuevo.');
            }
        } else {
            console.error('ID de categoría no definido');
        }
    } catch (error) {
        console.error("Error al eliminar categoría:", error);
        alert('Ocurrió un error al eliminar la categoría. Por favor, inténtalo de nuevo.');
    }
}

function abrirModal() {
    document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

async function editarCategoria(event, id) {
    categoriaIdEditar = id;
    const categoriaId = event.currentTarget.closest('.categoria').getAttribute('data-id');

    const categoriaElement = event.currentTarget.closest('.categoria');
    const nombre = categoriaElement.querySelector('h3').innerText;
    const descripcion = categoriaElement.querySelector('p').innerText;

    abrirModal();
    document.getElementById('nombreCategoria').value = nombre;
    document.getElementById('descripcionCategoria').value = descripcion;
}

async function guardarEdicion() {
    const nuevoNombre = document.getElementById('nombreCategoria').value;
    const nuevaDescripcion = document.getElementById('descripcionCategoria').value;

    if (nuevoNombre.trim() !== '' && nuevaDescripcion.trim() !== '') {
        try {
            const response = await fetch(`http://localhost:3000/categoria/${categoriaIdEditar}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: nuevoNombre,
                    descripcion: nuevaDescripcion,
                }),
            });

            if (response.ok) {
                const listaCategorias = document.getElementById('listaCategorias');
                await cargarCategorias('http://localhost:3000/categoria', listaCategorias);
            } else {
                console.error(`Error HTTP ${response.status}: ${response.statusText}`);
                alert('Ocurrió un error al editar la categoría. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error("Error al editar categoría:", error);
        } finally {
            cerrarModal();
        }
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

