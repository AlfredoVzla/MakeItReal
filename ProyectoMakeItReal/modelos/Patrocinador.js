const Sequelize = require('sequelize');
const sequelize = require('../utils/connection');
const Usuario = require('./Usuario');

const Patrocinador = sequelize.define('emprendedor',{
    idPatrocinador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: {
            msg: "Nombre no puede estar vacío."
        }
    },
    telefono: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: {
            msg: "Telefono no puede estar vacío."
        },
        isNumeric: {
            msg: "El teléfono de patrocinador debe contener solo números."
        }
    },
    correoElectronico: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            msg:"Correo existente"
        }, // Asegura que el email sea único
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
          } ,// Asegura que el nombre de usuario sea único
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
                msg: "Contraseña no puede estar vacia."
            }
        }
    },
    imagenPerfil: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Imagen de perfil no puede estar vacia."
            }
        }
        
    },
    proyectosPatrocinador: {
        type: Sequelize.INTEGER,
        allowNull: false ,
        validate: {
            notEmpty: {
                msg: "Numero de proyectos patrocinados no debe estar vacios."
            }
        }
    },
    montoTotalPatrocinado: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Monto total patrocinado no puede estar vacio."
            }
        }
    },
    experienciaProyectos: {
        type: Sequelize.STRING, 
        allowNull: false ,
        validate: {
            notEmpty: {
                msg: "Experiencia proyectos no puede estar vacia."
            }
        }
    },
}, {
    sequelize,
    modelName: 'patrocinador', 
    tableName:'patrocinador', 
    timestamps: false,
    freezeTableName: true
});

module.exports = Patrocinador;
