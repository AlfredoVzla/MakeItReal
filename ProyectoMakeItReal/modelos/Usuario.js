const Sequelize = require('sequelize');
const sequelize = require('../utils/connection');

const Usuario = sequelize.define('usuario', {
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefono: {
        type: Sequelize.STRING,
        allowNull: false
    },
    correoElectronico: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // Asegura que el email sea único
    },
    nombreUsuario: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // Asegura que el nombre de usuario sea único
    },
    contraseña: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagenPerfil: {
        type: Sequelize.STRING // Puedes ajustar el tipo de dato según tus necesidades
    }
});

module.exports = Usuario;
