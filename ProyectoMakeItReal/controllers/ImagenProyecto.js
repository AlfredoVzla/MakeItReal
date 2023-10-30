const ImagenProyecto = require('../modelos/ImagenProyecto'); // Importa el modelo de ImagenProyecto
const { AppError } = require('../utils/appError');

// Método para crear un nuevo registro de ImagenProyecto
exports.crearImagenProyecto = async (req, res, next) => {
  try {
    const nuevoImagenProyecto = await ImagenProyecto.create(req.body);
    if (!nuevoImagenProyecto) {
      return next(new AppError('Error al crear imagen de proyecto', 500));
    } else {
      console.log("ImagenProyecto creado con éxito");
      res.status(201).json({
        status: 'success',
        data: {
          imagenProyecto: nuevoImagenProyecto
        }
      });
    }
  } catch (error) {
    return next(new AppError(`Error al crear imagen de proyecto: ${error.message}`, 400));
  
  }
};

// Método para obtener todas las imágenes de un proyecto por su idProyecto
exports.obtenerImagenesProyecto = async (req, res, next) => {
  try {
    const imagenesProyecto = await ImagenProyecto.findAll({
      where: { idProyecto: req.params.idProyecto },
    });
    if (imagenesProyecto && imagenesProyecto.length > 0) {
      console.log(JSON.stringify(imagenesProyecto, null, 2));
      res.status(200).json({
        status: 'success',
        data: {
          imagenesProyecto
        }
      });
    } else {
      return next(new AppError('No se encontraron imágenes de proyecto', 404));
    }
  } catch (error) {
    return next(new AppError('Error al obtener imágenes de proyecto', 400));
  }
};

// Método para actualizar una imagenProyecto por su ID
exports.actualizarImagenProyecto = async (req, res, next) => {
  try {
    const idImagenProyecto = req.params.idImagenProyecto;
    const [actualizado] = await ImagenProyecto.update(req.body, {
      where: { idimagenProyecto: idImagenProyecto },
    });
    if (!actualizado) {
      return next(new AppError(`No se encontró una imagen de proyecto con ID ${idImagenProyecto} para actualizar.`, 404));
    } else {
      const imagenProyectoActualizada = await ImagenProyecto.findByPk(idImagenProyecto);
      console.log("Imagen proyecto actualizado correctamente");
      res.status(200).json({
        status: 'success',
        data: {
          imagenProyecto: imagenProyectoActualizada
        }
      });
    }
  } catch (error) {
    console.error(error);
    return next(new AppError(`Error al actualizar imagen de proyecto: ${error.message}`, 400));
  }
};

// Método para eliminar una imagenProyecto por su ID
exports.eliminarImagenProyecto = async (req, res, next) => {
  try {
    const idImagenProyecto = req.params.idImagenProyecto;
    const eliminado = await ImagenProyecto.destroy({
      where: { idimagenProyecto: idImagenProyecto },
    });
    if (eliminado <= 0) {
      return next(new AppError(`No se encontró una imagen de proyecto con ID ${idImagenProyecto} para eliminar.`, 404));
    } else {
      console.log("Eliminado correctamente");
      res.status(200).json({
        status: 'success',
        data: {
          message: 'Imagen de proyecto eliminada correctamente'
        }
      });
    }
  } catch (error) {
    return next(new AppError(`Error al eliminar imagen de proyecto: ${error.message}`, 400));
    
  }
};

