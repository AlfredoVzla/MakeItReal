const Sequelize = require('sequelize');
const sequelize = require('../utils/connection');
const Usuario = require('./Usuario'); 

const Emprendedor = sequelize.define('emprendedor', {
  idEmprendedor: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true 
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
      type: Sequelize.STRING 
  }
}, {
    timestamps: false, 
    freezeTableName: true, 
});

module.exports = Emprendedor;
