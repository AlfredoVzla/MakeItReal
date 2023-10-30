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
      allowNull: false,
      validate: {
          notEmpty: {
              msg: "Nombre no puede estar vacío."
          }
      }
  },
  telefono: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
          notEmpty: {
              msg: "Telefono no puede estar vacío."
          },
          isNumeric: {
              msg: "El teléfono de emprendedor debe contener solo números."
          }
      }
  },
  correoElectronico: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true, // Asegura que el email sea único
      validate: {
          notEmpty: {
              msg: "Correo Electronico no puede estar vacío."
          },
          isEmail: {
              msg: "Por favor, ingresa un correo electrónico válido."
          }
      }
  },
  nombreUsuario: {
      type: Sequelize.STRING,
      allowNull: false,
      unique:{
        msg:'Nombre de usuario en uso.'
      }, // Asegura que el nombre de usuario sea único
      validate: {
        notEmpty: {
            msg: "Nombre de usuario no puede estar vacío."
        }
    }
  },
  contraseña: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
            msg: "Contraseña no puede estar vacía."
        }
    }
  },
  imagenPerfil: {
      type: Sequelize.STRING 
  }
}, {
    timestamps: false, 
    freezeTableName: true, 
});

module.exports = Emprendedor;
