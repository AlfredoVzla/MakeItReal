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
        allowNull: false
    },
    fecha: {
        type: Sequelize.DATE,
        allowNull: false
    },
    calificacion: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_Proyecto: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'comentario',
    timestamps: false // Esto evita que se agreguen los campos createdAt y updatedAt
});

module.exports = Comentario;
