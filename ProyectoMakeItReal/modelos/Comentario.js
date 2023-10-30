const Sequelize = require('sequelize');
const sequelize = require('../utils/connection');

const Comentario = sequelize.define('comentario', {
    idComentario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    texto: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Texto no puede estar vacío."
            }
        }
    },
    fecha: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Fecha no puede estar vacía."
            }
        }
    },
    calificacion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Calificación no puede estar vacía."
            }
        }
    },
    id_Proyecto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Id de Proyecto no puede estar vacío."
            },
            isInt: {
                msg: "IdProyecto debe ser un Integer válido"
            }
        }
    }
}, {
    tableName: 'comentario',
    timestamps: false // Esto evita que se agreguen los campos createdAt y updatedAt
});

module.exports = Comentario;
