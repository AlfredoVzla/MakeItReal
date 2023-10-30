const Sequelize= require('sequelize');
const sequelize = require('../utils/connection');

const Pago = sequelize.define('Pago', {
    idPago: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    monto: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            isFloat: {
                msg: "Monto debe ser un valor numérico"
            },
            min: {
                args: [0],
                msg: "Monto debe ser mayor o igual a 0"
            }
        }
    },
    fecha: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Fecha no puede estar vacía."
            },
            isDate: {
                msg: "Fecha debe ser válida"
            }
        }
        
    },
    método: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Método no puede estar vacío."
            }
        }
    },
    concepto: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Concepto no puede estar vacío."
            }
        }
    },
    id_Patrocinador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Id de patrocinador no puede estar vacío."
            },
            isInt: {
                msg: "IdPatrocinador debe ser un Integer válido"
            }
        }
    },
    id_Proyecto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Id de proyecto no puede estar vacío."
            },
            isInt: {
                msg: "IdProyecto debe ser un Integer válido"
            }
        }
    }
}, {
    timestamps: false,
    tableName: 'pago'
});

const syncModel = async () => {
    try {
        await Pago.sync();
        console.log('Modelo sincronizado correctamente.');
    } catch (error) {
        console.error('Error al sincronizar el modelo:', error);
    }
};

syncModel();

module.exports = Pago;