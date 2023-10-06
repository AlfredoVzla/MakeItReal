const Pago = require('../modelos/pago.js');

exports.addPagoPromise = async (data) => {
    try {
        const nuevoPago = await Pago.create(data);
        console.log('Pago creado con éxito:', nuevoPago);
    } catch (error) {
        console.log(error);
    }
};

exports.addPagoAsync = async (data) => {
    try {
        const nuevoPago = await Pago.create(data);
        console.log('Pago creado con éxito:', nuevoPago);
    } catch (error) {
        console.log(error);
    }
};

exports.getPagos = async () => {
    try{
        const result = await Pago.findAll();
        console.log(JSON.stringify(result, null, 2));
    } catch (error) {
        console.log(error);
    }
};

exports.getPagosByProyecto = async (id_Proyecto) => {
    try {
        const pagos = await Pago.findAll({
            where: {
                id_Proyecto: id_Proyecto
            }
        });

        if (pagos.length === 0) {
            console.log("No se encontraron pagos para el proyecto con ID:", id_Proyecto);
        } else {
            console.log(JSON.stringify(pagos, null, 2));
        }
    } catch (error) {
        console.log(error);
    }
};





