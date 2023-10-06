const Sequelize = require('sequelize');
const sequelize = require('../utils/connection');
const Categoria = require('./Categoria'); // Importa el modelo de Categoria
const Emprendedor=require('./Emprendedor') // Importa el modelo del emprendedor

const Proyecto=sequelize.define('proyecto',{
    idProyecto:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    titulo:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Titulo no puede estar vacío."
            }
        }
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Descripcion no puede estar vacío."
            }
        }
    },
    fechaInicio:{
        type:Sequelize.DATE,
        allowNull:false,
        validate: {
            isDate: {
                msg: "Fecha debe ser válida"
            },
            notEmpty:{
                msg:"Fecha de inicio no debe estar vacia"
            }
            
        }

    },
    fechaCreación:{
        type:Sequelize.DATE,
        allowNull:false,
        validate: {
            isDate: {
                msg: "Fecha debe ser válida"
            },
            notEmpty:{
                msg:"Fecha de creación de no debe estar vacia"
            }
        }
    },
    objetivo:{
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Objetivo no puede estar vacío."
            }
        }

    },
    estado:{
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Estado no puede estar vacío."
            }
        }
    },
    masInformacion:{
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "MasInformacion no puede estar vacío."
            }
        }
    },
    metaFinanciamiento:{
        type: Sequelize.FLOAT,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "MetaFinanciamiento no puede estar vacío."
            }
        }
    },
    cantidadRecaudada:{
        type: Sequelize.FLOAT,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Cantidad Recaudada no puede estar vacío."
            }
        }
    },
    id_Categoria:{
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
            isInt: {
                msg: "IdCategoria debe ser un Integer válido"
            },
            notEmpty: {
                msg: "IdCategoria  no puede estar vacío."
            }
        }
    },
    id_Emprendedor:{
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
            isInt: {
                msg: "IdEmprendedor debe ser un Integer válido"
            },
            notEmpty: {
                msg: "IdEmprendedor no puede estar vacío."
            }
        }

    },
},
{
    timestamps:false,
    tableName:'proyecto',
});


module.exports=Proyecto;
