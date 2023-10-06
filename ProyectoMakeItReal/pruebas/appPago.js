const PagoController = require('../controllers/Pago'); //Importa el controlador de Pago.

//CÓDIGO DE PRUEBA PARA LA CLASE PAGO.

async function crearPago(){
    try{
        const pruebaPago = await PagoController.addPagoAsync({
                monto: 5300.0,
                fecha: new Date(),
                método: 'Tarjeta',
                concepto: 'Donación',
                id_Patrocinador: 1,
                id_Proyecto: 1
        });
    } catch(error){
        console.log(error);
    }
}

async function obtenerPagos(){
    try{
        const pruebaPago = await PagoController.getPagos();
    } catch (error){
        console.log(error);
    }
}

async function obtenerPagosById(idProyecto){
    try{
        const pruebaPago = await PagoController.getPagosByProyecto(idProyecto);
    } catch (error){
        console.log(error);
    }
}

//crearPago();
//obtenerPagos();
//obtenerPagosById(1);
