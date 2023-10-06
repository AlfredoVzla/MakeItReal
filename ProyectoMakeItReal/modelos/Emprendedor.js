const Sequelize = require('sequelize');
const sequelize = require('../utils/connection');
const Usuario = require('./Usuario'); // Importa el modelo de Usuario

const Emprendedor = sequelize.define('emprendedor', {
  idEmprendedor: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true // Asegura que se autoincremente el ID
}
,nombre: {
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
}, {
    timestamps: false, // Esto evita que se agreguen los campos createdAt y updatedAt
    freezeTableName: true, // Usa el nombre 'emprendedor' para la tabla en la base de datos
});

module.exports = Emprendedor;
