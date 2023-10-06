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
        type: Sequelize.STRING, // Puedes ajustar el tipo de dato según tus necesidades
        allowNull: false
    },
    proyectosPatrocinador: {
        type: Sequelize.INTEGER, // O el tipo de dato adecuado
        allowNull: false // Ajusta esto según tus necesidades
    },
    montoTotalPatrocinado: {
        type: Sequelize.FLOAT, // O el tipo de dato adecuado para el monto
        allowNull: false // Ajusta esto según tus necesidades
    },
    experienciaProyectos: {
        type: Sequelize.STRING, // O el tipo de dato adecuado
        allowNull: false // Ajusta esto según tus necesidades
    },
}, {
    sequelize, // Conecta el modelo a la instancia de sequelize
    modelName: 'patrocinador', // Define el nombre de la tabla en la base de datos
    tableName:'patrocinador',
    timestamps: false, // Esto evita que se agreguen los campos createdAt y updatedAt
    freezeTableName: true // Usa el nombre 'patrocinador' para la tabla en la base de datos
});

module.exports = Patrocinador;
