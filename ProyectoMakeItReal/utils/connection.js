const mysql= require('mysql2/promise');


class Conexion{
    constructor(configuracion){
        this.configuracion=configuracion;
    }

   async conectar(){
    try {
        this.connection = await mysql.createConnection(this.configuracion);
        console.log("Conectado");
    } catch (error) {
        throw new Error("Error al conectar");
    }   
    }

  async desconectar(){
    if (this.connection) {
        try {
            await this.connection.end();
            console.log("Desconectado");
        } catch (error) {
            throw new Error("Error al desconectar");
        }
    }

    }
}


//PRUEBA
const configuracionDB = {
    host: 'localhost',
    user: 'root',
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