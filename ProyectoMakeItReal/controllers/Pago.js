const Pago = require('../modelos/pago.js');

exports.addPagoPromise= (idPago, monto, fecha, método, concepto, id_Patrocinador, id_Proyecto) =>{
    Pago.create({
        idPago : idPago,
        monto : monto, 
        fecha : fecha,
        método : método, 
        concepto : concepto, 
        id_Patrocinador : id_Patrocinador,
        id_Proyecto : id_Proyecto
    })
    .then(result =>{
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.addPagoAsync = async(idPago, monto, fecha, método, concepto, id_Patrocinador, id_Proyecto) => {
    try{
        const result = await Pago.create({
            idPago:idPago,
            monto:monto, 
            fecha:fecha, 
            método:método,
            concepto:concepto,
            id_Patrocinador:id_Patrocinador,
            id_Proyecto:id_Proyecto
        });
        console.log(result);
    } catch (err){
        console.log(err);
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





