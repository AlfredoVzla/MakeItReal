document.addEventListener('DOMContentLoaded', async function () {
    const btnBuscarPago = document.getElementById('btnBuscarPago');
    const resultadoPagos = document.querySelector('.resultado-pagos');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJNYXJpYTIiLCJpYXQiOjE3MDEwMzgwMjIsImV4cCI6MTcwMTA0MTYyMn0.gwaPrr0Sv4j5bgc9oosxPX2Gf3t9mLs7mGJdlUBIdQo';

    await cargarPagos('http://localhost:3000/pago/', token, resultadoPagos);

    btnBuscarPago.addEventListener('click', async function () {
        const tituloProyecto = document.getElementById('buscarPago').value.trim();

        await cargarPagos('http://localhost:3000/pago/titulo/', token, resultadoPagos, tituloProyecto);
    });
});

async function cargarPagos(baseUrl, token, container, tituloProyecto = null) {
    try {
        let url = baseUrl;

        if (tituloProyecto) {
            url += encodeURIComponent(tituloProyecto);
        }

        const response = await fetch(url, {
            headers: {
                Authorization: token
            }
        });

        const data = await response.json();

        let htmlContent = '';

        if (response.ok) {
            if (data.status === 'success') {
                if (data.message === 'No se encontró un proyecto con este título') {
                    htmlContent = '<p>No se encontró un proyecto con este título.</p>';
                } else if (data.data.pagos.length > 0) {
                    htmlContent = data.data.pagos.map(pago => `
                        <div class="info-pago">
                            <h3>ID Pago: ${pago.idPago}</h3>
                            <p>Fecha: ${pago.fecha}</p>
                            <p>Monto: $${pago.monto}</p>
                            <p>Método: ${pago.método}</p>
                            <p>Concepto: ${pago.concepto}</p>
                            <p>ID Patrocinador: ${pago.id_Patrocinador}</p>
                        </div>
                    `).join('');
                } else {
                    htmlContent = '<p>No hay pagos para este proyecto.</p>';
                }
            } else {
                console.error(`Error en la respuesta del servidor: ${data.message}`);
                htmlContent = `<p>Error en la respuesta del servidor: ${data.message}</p>`;
            }
        } else {
            console.error(`Error HTTP ${response.status}: ${response.statusText}`);
            htmlContent = `<p>Error HTTP ${response.status}: ${response.statusText}</p>`;
        }

        container.innerHTML = htmlContent;
    } catch (error) {
        console.error("Error al buscar pagos:", error);
        container.innerHTML = '<p>Error al buscar pagos. Por favor, inténtalo de nuevo.</p>';
    }
};