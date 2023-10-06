const operacionesPago = require('./controllers/Pago');

async function ejecutarOperaciones() {
    try {
    await operacionesPago.addPagoPromise(1, 100.0, new Date(), 'Tarjeta', 'Donación', 1, 1);
    await operacionesPago.addPagoAsync(2, 100, new Date(), 'Efectivo', 'Compra', 2, 1);
    await operacionesPago.getPagos();
    } catch (error) {
    console.error(error);
    }
}

ejecutarOperaciones();

