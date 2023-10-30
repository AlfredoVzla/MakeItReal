const Pago = require('../modelos/Pago');
const { AppError } = require ('../utils/appError');

exports.addPago = async (req, res, next) => {
    try {
        const { monto, fecha, método, concepto, id_Patrocinador, id_Proyecto } = req.body;

        const nuevoPago = await Pago.create({
            monto,
            fecha,
            método,
            concepto,
            id_Patrocinador,
            id_Proyecto
        });

        res.status(201).json({
            status: 'success',
            data: {
                pago: nuevoPago
            }
        });
    } catch (error) {
        return next(new AppError(`Error al crear pago: ${error.message}`, 400));
        
    }
};

exports.getPagos = async (req, res, next) => {
    try {
        const pagos = await Pago.findAll();

        res.status(200).json({
            status: 'success',
            data: {
                pagos
            }
        });
    } catch (error) {
        return next (new AppError ('Error al obtener pagos', 400));
    }
};

exports.getPagosByProyecto = async (req, res, next) => {
    const { id_Proyecto } = req.params;

    try {
        const pagos = await Pago.findAll({
            where: {
                id_Proyecto
            }
        });

        if (pagos.length === 0) {
            return next (new AppError ('Pagos no encontrados', 404));
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    pagos
                }
            });
        }
    } catch (error) {
        return next(new AppError(`Error al obtener pagos del proyecto: ${error.message}`, 400));
       
    }
};





