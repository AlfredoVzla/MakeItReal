//const operacionesPago = require('./controllers/Pago');
//const operacionesCategoria = require('./controllers/Categoria');


//async function ejecutarOperaciones() {
    //try {
    //await operacionesPago.addPagoPromise(1, 100.0, new Date(), 'Tarjeta', 'Donación', 1, 1);
    //await operacionesPago.addPagoAsync(2, 100, new Date(), 'Efectivo', 'Compra', 2, 1);
    //await operacionesPago.getPagos();
    //await operacionesPago.getPagosByProyecto(1);
    // await operacionesCategoria.addCategoriaPromise(4, 'Arte', 'Arte');
    //await operacionesCategoria.addCategoriaAsync(5, 'Humo', 'Humor');
    //await operacionesCategoria.getCategorias();
    //await operacionesCategoria.getCategoriaById(3);
    //await operacionesCategoria.updateCategoriaById(3, 'Comida', 'Comida')
    //await operacionesCategoria.deleteCategoriaById(5);
    //} catch (error) {
    //console.error(error);
    //}
//}

const sequelize = require('./utils/connection'); // Importa la conexión a la base de datos
const EmprendedorController = require('./controllers/Emprendedor'); // Importa el controlador de Emprendedor
const PatrocinadorController = require('./controllers/Patrocinador'); // Importa el controlador de Patrocinador
const ComentarioController = require("./controllers/Comentario");
const PeroyectoController = require('./controllers/Proyecto');
const ProyectoController = require('./controllers/Proyecto');

// Crea una instancia del controlador
const comentario = new ComentarioController();
const emprendedorController = new EmprendedorController();
const patrocinador = new PatrocinadorController();
const proyecto = new ProyectoController();

async function probarMetodosComentario(){
  try{

    // const comentarioNuevo = await comentario.crearComentario({
    //   texto: 'Este es un comentario de prueba',
    //   fecha: new Date(),
    //   calificacion: 4,
    //   id_Proyecto: 1, // Reemplaza con el ID de un proyecto existente
    // });

    // const comentarioBuscado = await comentario.obtenerComentarios();

    // const comentarioActualizado = await comentario.actualizarComentario(2,{
    //   texto: 'Esta es una segunda prueba',
    //   fecha: new Date()
    // });

    // const comentarioEliminado = await comentario.eliminarComentario(2);

  }catch(err){
    console.log(err);
  }
}

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


async function probarMetodosProyecto(){
  try{

    /*
    const proyectoNuevo = await proyecto.crearProyecto({
     titulo: 'Proyecto hailMary',
     descripcion:'Libro de ciencia ficcion',
     fechaInicio: new Date(),
     fechaCreación: new Date(),
     objetivo:"si",
     estado:"Activo",
     masInformacion:"mas info",
     metaFinanciamiento: 43444.3,
     cantidadRecaudada:2000.8,
     id_Categoria:1,
     id_Emprendedor:1
     });*/

     /*
     const proyectosa = await proyecto.obtenerProyectos();
     const proyectoActualizado = await proyecto.actualizarProyecto(2,{
       titulo: 'titulo modificado',
      fecha: new Date()
     });
     await proyecto.obtenerProyectos();*/

     //const proyectoEliminado = await proyecto.eliminarProyecto(2);
   

  }catch(err){
    console.log(err);
  }
}


// Llama a la función para probar los métodos
// probarMetodos();

//probarMetodosComentario();

probarMetodosProyecto();
