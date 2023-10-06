const Sequelize = require('sequelize');
const sequelize = require('../utils/connection');
const Usuario = require('./Usuario'); // Importa el modelo de Usuario

const Patrocinador = sequelize.define('emprendedor',{
    idPatrocinador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },nombre: {
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
        type: Sequelize.STRING,
        allowNull: false
    },
    proyectosPatrocinador: {
        type: Sequelize.INTEGER,
        allowNull: false 
    },
    montoTotalPatrocinado: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    experienciaProyectos: {
        type: Sequelize.STRING, 
        allowNull: false 
    },
}, {
    sequelize,
    modelName: 'patrocinador', 
    tableName:'patrocinador', 
    timestamps: false,
    freezeTableName: true
});

module.exports = Patrocinador;
