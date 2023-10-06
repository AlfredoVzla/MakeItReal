
const { Sequelize, DataTypes } = require('sequelize');


class Conexion{
    constructor(configuracion){
        this.configuracion=configuracion;
        this.sequelize=new Sequelize(configuracion)
    }

   async conectar(){
    try {
       await this.sequelize.authenticate();
        console.log("Conectado");
    } catch (error) {
        throw new Error("Error al conectar");
    }   
    }

  async desconectar(){

        try {
            await this.sequelize.close();
            console.log("Desconectado");
        } catch (error) {
            throw new Error("Error al desconectar");
        }
    

    }
}


//PRUEBA
const configuracionDB = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '123456',
    database: 'makeitreal',
};

async function probarConexion() {
    const conexion = new Conexion(configuracionDB);

    try {
        await conexion.conectar();
        
   
        await conexion.desconectar();
    } catch (error) {
        console.error(error);
    }
}

probarConexion();

