
// const operacionesPago = require('./controllers/Pago');

// async function ejecutarOperaciones() {
//     try {
//     await operacionesPago.addPagoPromise(1, 100.0, new Date(), 'Tarjeta', 'Donación', 1, 1);
//     await operacionesPago.addPagoAsync(2, 100, new Date(), 'Efectivo', 'Compra', 2, 1);
//     await operacionesPago.getPagos();
//     } catch (error) {
//     console.error(error);
//     }
// }

// ejecutarOperaciones();


const sequelize = require('./utils/connection'); // Importa la conexión a la base de datos
const EmprendedorController = require('./controllers/Emprendedor'); // Importa el controlador de Emprendedor
const PatrocinadorController = require('./controllers/Patrocinador'); // Importa el controlador de Patrocinador

// Crea una instancia del controlador
const emprendedorController = new EmprendedorController();
const patrocinador = new PatrocinadorController();

// Función para probar los métodos del controlador
async function probarMetodos() {
  try {

    // const nuevoPatrocinador = await patrocinador.crearPatrocinador({
    //     nombre: "Nombre del Patrocinador",
    //     telefono: "123-456-7890",
    //     correoElectronico: "patrocinador@example.com",
    //     nombreUsuario: "nombre_usuario",
    //     contraseña: "contraseña_segura",
    //     imagenPerfil: "url_de_la_imagen.jpg",
    //     proyectosPatrocinador: 5, // Número de proyectos patrocinados
    //     montoTotalPatrocinado: 10000.0, // Monto total patrocinado en dólares
    //     experienciaProyectos: "Experiencia previa en proyectos similares"
    // });

    // const nuevoPatrocinador = await patrocinador.actualizarPatrocinador(2,{
    //     nombre:"2do patrocinador",
    //     telefono: "1234556"
    // });

    const eliminarPatrocinador = await patrocinador.eliminarPatrocinador(2);

    // // Crear un nuevo emprendedor
    // const nuevoEmprendedor = await emprendedorController.crearEmprendedor({
    //   // Proporciona los datos del nuevo emprendedor
    //   nombre: 'Nombre del Emprendedor',
    //   telefono: '123456789',
    //   correoElectronico: 'emprendedor@example.com',
    //   nombreUsuario: 'usuario123',
    //   contraseña: 'contraseña123',
    //   imagenPerfil: 'imagen.jpg',
    // });

    // console.log('Nuevo Emprendedor:', nuevoEmprendedor);

    // const emprendedorActualizado = await emprendedorController.actualizarEmprendedor(2, {
    //     telefono: '66441655646',
    //   });
  
    //   if (emprendedorActualizado) {
    //     console.log('Emprendedor Actualizado:', emprendedorActualizado);
    //   } else {
    //     console.log('Emprendedor no encontrado o no actualizado.');
    //   }


    // const emprendedorActualizado = await emprendedorController.eliminarEmprendedor(4);
  
      // Cierra la conexión a la base de datos al finalizar la prueba
      sequelize.close();

    }catch(err){
        console.log(err);
    }
}


// Llama a la función para probar los métodos
probarMetodos();
