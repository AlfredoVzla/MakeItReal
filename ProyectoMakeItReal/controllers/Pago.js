const Pago = require('../modelos/Pago');

exports.addPago = async (req, res) => {
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
        res.status(400).json({
            status: 'fail',
            message: 'Error al agregar pago: ' + error.message
        });
    }
};

exports.getPagos = async (req, res) => {
    try {
        const pagos = await Pago.findAll();

        res.status(200).json({
            status: 'success',
            data: {
                pagos
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error al obtener pagos: ' + error.message
        });
    }
};

exports.getPagosByProyecto = async (req, res) => {
    const { id_Proyecto } = req.params;

    try {
        const pagos = await Pago.findAll({
            where: {
                id_Proyecto
            }
        });

        if (pagos.length === 0) {
            res.status(404).json({
                status: 'fail',
                message: 'No se encontraron pagos para el proyecto con ID: ' + id_Proyecto
            });
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    pagos
                }
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error al obtener pagos: ' + error.message
        });
    }
};





