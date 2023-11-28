const express = require ('express');
const app = express();
const fileUpload = require('express-fileupload');
const routerProyecto = require('./routes/Proyecto');
const routerImagen = require('./routes/ImagenProyecto');
const routerPatrocinador = require('./routes/Patrocinador');
const routerEmprendedor = require('./routes/Emprendedor');
const routerPago = require('./routes/pago');
const routerCategoria = require('./routes/categoria');
const cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/proyectos', routerProyecto);
app.use('/imagen',routerImagen);
app.use('/pago', routerPago);
app.use('/categoria', routerCategoria);
app.use( fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
    createParentPath: true
}));
app.use('/patrocinador',routerPatrocinador);
app.use('/emprendedor',routerEmprendedor);
app.listen(PORT, () => {
    console.log('Servidor de asistencias')
})