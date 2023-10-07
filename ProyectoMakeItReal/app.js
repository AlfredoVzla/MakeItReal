//const operacionesPago = require('./controllers/Pago');
//const operacionesCategoria = require('./controllers/Categoria');


//async function ejecutarOperaciones() {

//  const data1 = {
//    monto: 530.0,
//    fecha: new Date(),
//    método: 'Tarjeta',
//    concepto: 'Donación',
//    id_Patrocinador: 1,
//    //id_Proyecto: 1
//     //};

//     //  try {
//     //await operacionesPago.addPagoPromise(data1);
//     //await operacionesPago.addPagoAsync(data1);
//     //await operacionesPago.getPagos();
//     //await operacionesPago.getPagosByProyecto(1);
//     //await operacionesCategoria.addCategoriaPromise(data1);
//     //await operacionesCategoria.addCategoriaAsync(data1);
//     //await operacionesCategoria.getCategorias();
//     //await operacionesCategoria.getCategoriaById(3);
//     //await operacionesCategoria.updateCategoriaById(3, 'Comida', 'Comida')
//     //await operacionesCategoria.deleteCategoriaById(5);
//} catch (error) {
//console.error(error);
//}
//}
//ejecutarOperaciones();

// const sequelize = require('./utils/connection'); // Importa la conexión a la base de datos
// const EmprendedorController = require('./controllers/Emprendedor'); // Importa el controlador de Emprendedor
// const PatrocinadorController = require('./controllers/Patrocinador'); // Importa el controlador de Patrocinador
// const ComentarioController = require("./controllers/Comentario");
// const PeroyectoController = require('./controllers/Proyecto');
// const ProyectoController = require('./controllers/Proyecto');

// // Crea una instancia del controlador
// const comentario = new ComentarioController();
// const emprendedorController = new EmprendedorController();
// const patrocinador = new PatrocinadorController();
// const proyecto = new ProyectoController();


// async function probarMetodosProyecto(){
//   try{

//     /*
//     const proyectoNuevo = await proyecto.crearProyecto({
//      titulo: 'Proyecto hailMary',
//      descripcion:'Libro de ciencia ficcion',
//      fechaInicio: new Date(),
//      fechaCreación: new Date(),
//      objetivo:"si",
//      estado:"Activo",
//      masInformacion:"mas info",
//      metaFinanciamiento: 43444.3,
//      cantidadRecaudada:2000.8,
//      id_Categoria:1,
//      id_Emprendedor:1
//      });*/

//      /*
//      const proyectosa = await proyecto.obtenerProyectos();
//      const proyectoActualizado = await proyecto.actualizarProyecto(2,{
//        titulo: 'titulo modificado',
//       fecha: new Date()
//      });
//      await proyecto.obtenerProyectos();*/

//      //const proyectoEliminado = await proyecto.eliminarProyecto(2);
   

//   }catch(err){
//     console.log(err);
//   }
// }

const sequelize = require('./utils/connection'); // Importa la conexión a la base de datos
const ProyectoController = require('./controllers/Proyecto');
const CategoriaController = require('./controllers/Categoria');
const PagoController = require('./controllers/Pago');

const appEmprendedor = require("./pruebas/appEmprendedor");

// // Agregar emprendedor
// appEmprendedor.crearEmprendedor({
//   nombre:"Jaime Valenzuela",
//   telefono:"6441920149",
//   correoElectronico:"jvalenzuela0302@gmail.com",
//   nombreUsuario:"jaimevzla03",
//   contraseña:"123456",
//   imagenPerfil:"imagen.jpg"
// });

// // Actualizar emprendedor
// appEmprendedor.actualizarEmprendedor(6,{
//   nombre:"James Valenzuela",
//   telefono:"6441920149",
//   correoElectronico:"alfredo0302@gmail.com",
//   nombreUsuario:"jaimevzla03",
//   contraseña:"123456",
//   imagenPerfil:"imagen.jpg"
// });

// // Obtener emprendedores
// appEmprendedor.obtenerEmprendedores();

// // Obtener emprendedor por ID
appEmprendedor.obtenerEmprendedorId(6);

// Obtener emprendador por credenciales 
// appEmprendedor.obtenerEmprendedorCredenciales("jaimevzla03","123456");

// // Eliminar emprendedor
// appEmprendedor.eliminarEmprendedor(6);

