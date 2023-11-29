// const sequelize = require('./utils/connection');
// const appCategoria =require("./pruebas/appCategoria");
// const appEmprendedor = require("./pruebas/appEmprendedor");
// const appPatrocinador = require("./pruebas/appPatrocinador");
// const appProyecto = require("./pruebas/appProyecto");
// const appImagen = require("./pruebas/appImagenProyecto");
// const appComentario = require("./pruebas/appComentario");
// const appPago = require("./pruebas/appPago");

const express = require('express');
const categoriaRouter = require('./routes/categoria');
const comentarioRouter = require('./routes/comentario');
const emprendedorRouter = require('./routes/Emprendedor');
const patrocinadorRouter = require('./routes/Patrocinador');
const proyectoRouter = require('./routes/Proyecto');
const pagoRouter = require('./routes/pago');
const imagenRouter = require('./routes/ImagenProyecto');

const app = express();

app.use(express.json());

app.use('/categoria', categoriaRouter);
app.use('/comentarios', comentarioRouter);
app.use("/emprendedor", emprendedorRouter);
app.use("/patrocinador", patrocinadorRouter);
app.use('/pago', pagoRouter);
app.use('/proyectos', proyectoRouter);
app.use('/imagen', imagenRouter);

module.exports = app;



// appCategoria.crearCaterogia(); 
// appCategoria.obtenerCategorias();
// appCategoria.obtenerCategoriasById(2);
// appCategoria.editarCategoria(2);
// appCategoria.eliminarCategoria(2);

// appEmprendedor.crearEmprendedor();
// appEmprendedor.obtenerEmprendedores();
// appEmprendedor.obtenerEmprendedorCredenciales("jaimevzla03","123456");
// appEmprendedor.actualizarEmprendedor();
// appEmprendedor.obtenerEmprendedorId(1);
// appEmprendedor.eliminarEmprendedor(2);

// appPatrocinador.crearPatrocinador();
// appPatrocinador.obtenerPatrocinadores();
// appPatrocinador.obtenerPatrocinadorCredenciales("alfredo03","123456");
// appPatrocinador.actualizarPatrocinador();
// appPatrocinador.obtenerPatrocinadorId(1);
// appPatrocinador.eliminarPatrocinador(2);

 //appProyecto.agregarProyecto();
//appProyecto.obtenerProyectos();
//appProyecto.actualizarProyecto();
 //appProyecto.eliminarProyecto();

 //appImagen.agregarImagenProyecto();
// appImagen.obtenerImagenesProyecto();
//appImagen.actualizarImagenProyecto();
// appImagen.eliminarImagenProyecto();

// appComentario.agregarComentario();
// appComentario.obtenerComentarios();
// appComentario.actualizarComentario();
// appComentario.eliminarComentario(2);

// appPago.crearPago();
// appPago.obtenerPagos();
// appPago.obtenerPagosById(1);







