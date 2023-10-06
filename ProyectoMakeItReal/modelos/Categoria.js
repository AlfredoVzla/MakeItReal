const Sequelize = require('sequelize');
const sequelize = require('../utils/connection');

const Categoria = sequelize.define('Categoria', {
    idCategoria: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Método no puede estar vacío."
            }
        }
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Método no puede estar vacío."
            }
        }
    },
}, {
    timestamps:false,
    tableName: 'categoria'
});


Categoria.sync({ force: false }).then(() => {
    console.log('Modelo de Categoria sincronizado correctamente.');
});

module.exports = Categoria;