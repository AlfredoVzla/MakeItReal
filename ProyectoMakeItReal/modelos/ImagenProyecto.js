const Sequelize = require('sequelize');
const sequelize = require('../utils/connection');
const Categoria = require('./Proyecto'); // Importa el modelo de proyecto




const ImagenProyecto=sequelize.define('imagenProyecto',{
    idimagenProyecto:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    imagen:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "imagen no puede estar vacía."
            }
        }
    },
   
    idProyecto:{
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
            isInt: {
                msg: "IdProyecto debe ser un Integer válido"
            },
            notEmpty: {
                msg: "IdProyecto  no puede estar vacío."
            }
        }
    },
},
{
    timestamps:false,
    tableName:'imagenproyecto',
});




module.exports= ImagenProyecto;
