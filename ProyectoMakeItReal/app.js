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
const EmprendedorController = require('./controllers/Emprendedor'); // Importa el controlador de Emprendedor
const PatrocinadorController = require('./controllers/Patrocinador'); // Importa el controlador de Patrocinador
const ComentarioController = require("./controllers/Comentario"); 
const ProyectoController = require('./controllers/Proyecto');
const CategoriaController = require('./controllers/Categoria');
const PagoController = require('./controllers/Pago');

const emprendedor = new EmprendedorController();
const patrocinador = new PatrocinadorController();
const comentario = new ComentarioController();
// CÓDIGO DE PRUEBA DE LA CLASE EMPRENDEDOR
async function crearEmprendedor(){
  try {
      const pruebaEmprendedor = await emprendedor.crearEmprendedor({
        nombre:"Jaime Valenzuela",
        telefono:"6441920149",
        correoElectronico:"jvalenzuela0302@gmail.com",
        nombreUsuario:"jaimevzla03",
        contraseña:"123456",
        imagenPerfil:"imagen.jpg"
      });
  } catch (error) {
    console.log(error);
  }
}

async function actualizarEmprendedor(){
  try {
      const pruebaEmprendedor = await emprendedor.actualizarEmprendedor(6,{
        nombre:"Alfredo Valenzuela",
        telefono:"6441920149",
        correoElectronico:"alfredo0302@gmail.com",
        nombreUsuario:"jaimevzla03",
        contraseña:"123456",
        imagenPerfil:"imagen.jpg"
      });
  } catch (error) {
    console.log(error);
  }
}

async function obtenerEmprendedores(){
  try {
      const pruebaEmprendedor = await emprendedor.obtenerEmprendedores();
  } catch (error) {
    console.log(error);
  }
}

async function obtenerEmprendedorId(){
  try {
      const pruebaEmprendedor = await emprendedor.obtenerEmprendedorPorId(6);
  } catch (error) {
    console.log(error);
  }
}

async function eliminarEmprendedor(){
  try {
      const pruebaEmprendedor = await emprendedor.eliminarEmprendedor(5);
  } catch (error) {
    console.log("No se pudo eliminar el emprendedor, seguramente tiene proyectos asignados");
  }
}

// crearEmprendedor();
// actualizarEmprendedor();
// obtenerEmprendedores();
// obtenerEmprendedorId();
// eliminarEmprendedor();

// CÓDIGO DE PRUEBA DE LA CLASE PATROCINADOR
async function crearPatrocinador(){
  try {
      const pruebaPatrocinador = await patrocinador.crearPatrocinador({
        nombre:"Jaime Valenzuela",
        telefono:"6441920149",
        correoElectronico:"jvalenzuela0302@gmail.com",
        nombreUsuario:"jaimevzla03",
        contraseña:"123456",
        imagenPerfil:"imagen.jpg",
        proyectosPatrocinador:0,
        montoTotalPatrocinado:0,
        experienciaProyectos:"Ninguna"
      });
  } catch (error) {
    console.log(error);
  }
}

async function actualizarPatrocinador(){
  try {
    const pruebaPatrocinador = await patrocinador.actualizarPatrocinador(3,{
        nombre:"Alfredo Reyes",
      });
  } catch (error) {
    console.log(error);
  }
}

async function obtenerPatrocinadores(){
  try {
    const pruebaPatrocinador = await patrocinador.obtenerPatrocinadores();
  } catch (error) {
    console.log(error);
  }
}

async function obtenerPatrocinadorId(){
  try {
      const pruebaPatrocinador = await patrocinador.obtenerPatrocinadorPorId(3);
  } catch (error) {
    console.log(error);
  }
}

async function eliminarPatrocinador(){
  try {
    const pruebaPatrocinador = await patrocinador.eliminarPatrocinador(1);
  } catch (error) {
    console.log("No se pudo eliminar el patrocinador, seguramente tiene proyectos asignados");
  }
}

// crearPatrocinador();
// actualizarPatrocinador();
// obtenerPatrocinadores();
// obtenerPatrocinadorId();
// eliminarPatrocinador();

// CÓDIGO DE PRUEBA DE LA CLASE COMENTARIOS
async function agregarComentario(){
  try {
    const pruebaComentario = await comentario.crearComentario({
      texto:"Este es un comentario para probar",
      fecha: new Date(),
      calificacion:4,
      id_Proyecto:1
    });
  } catch (error) {
    console.log("No se pudo agregar el comentario");
  }
}

async function obtenerComentario(){
  try {
    const pruebaComentario = await comentario.obtenerComentarios();
  } catch (error) {
    console.log("No se pudieron obtener los comentarios");
  }
}

async function actualizarComentario(){
  try {
    const pruebaComentario = await comentario.actualizarComentario(1,{
      texto:"Se actualizó el comentario"
    });
  } catch (error) {
    console.log("No se pudo actualizar el comentario");
  }
}

async function eliminarComentario(){
  try {
    const pruebaComentario = await comentario.eliminarComentario(1);
  } catch (error) {
    console.log("No se pudo eliminar el comentario");
  }
}

// agregarComentario();
// obtenerComentario();
// actualizarComentario();
// eliminarComentario();

