const Sequelize = require('sequelize');
const sequelize = require('../utils/connection');

const Categoria = sequelize.define('Categoria', {
    idCategoria: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            msg: "Ya existe una categoria con ese nombre."
        },
        validate: {
            notEmpty: {
                msg: "Nombre no puede estar vacío."
            }
        }
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Descripción no puede estar vacía."
            }
        }
    },
}, {
    timestamps:false,
    tableName: 'categoria'
});


Categoria.sync({ force: false }).then(() => {
    
});

module.exports = Categoria;