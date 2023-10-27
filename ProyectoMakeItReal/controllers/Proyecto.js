const Proyecto = require('../modelos/Proyecto'); // Importa el modelo de Proyecto

// Método para crear un nuevo Proyecto
exports.crearProyecto = async (req, res, next) => {
  try {
    const nuevoProyecto = await Proyecto.create(req.body);
    if (!nuevoProyecto) {
      return next(new AppError('Error al crear proyecto', 500));
    } else {
      console.log("Proyecto creado con éxito");
      res.status(201).json({
        status: 'success',
        data: {
          proyecto: nuevoProyecto
        }
      });
    }
  } catch (error) {
    return next(new AppError('Error al crear proyecto', 400));
  }
};

// Método para obtener todos los Proyectos
exports.obtenerProyectos = async (req, res, next) => {
  try {
    const proyectos = await Proyecto.findAll();
    if (!proyectos || proyectos.length === 0) {
      return next(new AppError('No se encontraron proyectos', 404));
    } else {
      console.log(JSON.stringify(proyectos, null, 2));
      res.status(200).json({
        status: 'success',
        data: {
          proyectos
        }
      });
    }
  } catch (error) {
    return next(new AppError('Error al obtener proyectos', 400));
  }
};

// Método para obtener un proyecto por su ID
exports.obtenerProyectoPorId = async (req, res, next) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.idProyecto);
    if (!proyecto) {
      return next(new AppError(`No se encontró un proyecto con id ${req.params.idProyecto}.`, 404));
    } else {
      console.log(JSON.stringify(proyecto, null, 2));
      res.status(200).json({
        status: 'success',
        data: {
          proyecto
        }
      });
    }
  } catch (error) {
    return next(new AppError('Error al obtener proyecto por ID', 400));
  }
};

// Método para obtener un proyecto por su título
exports.obtenerProyectoPorTitulo = async (req, res, next) => {
  try {
    const proyecto = await Proyecto.findOne({
      where: { titulo: req.params.titulo }
    });
    if (!proyecto) {
      return next(new AppError(`No se encontró un proyecto con titulo ${req.params.titulo}.`, 404));
    } else {
      console.log(JSON.stringify(proyecto, null, 2));
      res.status(200).json({
        status: 'success',
        data: {
          proyecto
        }
      });
    }
  } catch (error) {
    return next(new AppError('Error al obtener proyecto por título', 400));
  }
};

// Método para obtener todos los proyectos de un emprendedor por su id_Emprendedor
exports.obtenerProyectosPorIdEmprendedor = async (req, res, next) => {
  try {
    const proyectos = await Proyecto.findAll({
      where: { id_Emprendedor: req.params.idEmprendedor }
    });
    if (!proyectos || proyectos.length === 0) {
      return next(new AppError(`No se encontraron proyectos con ID ${req.params.idEmprendedor}.`, 404));
    } else {
      console.log(JSON.stringify(proyectos, null, 2));
      res.status(200).json({
        status: 'success',
        data: {
          proyectos
        }
      });
    }
  } catch (error) {
    return next(new AppError('Error al obtener proyectos por ID de emprendedor', 400));
  }
};

// Método para actualizar un proyecto por su ID
exports.actualizarProyecto = async (req, res, next) => {
  try {
    const idProyecto = req.params.idProyecto;
    const [actualizado] = await Proyecto.update(req.body, {
      where: { id: idProyecto },
    });
    if (!actualizado) {
      return next(new AppError(`No se encontró un proyecto con ID ${idProyecto} para actualizar.`, 404));
    } else {
      const proyectoActualizado = await Proyecto.findByPk(idProyecto);
      console.log("Proyecto actualizado correctamente");
      res.status(200).json({
        status: 'success',
        data: {
          proyecto: proyectoActualizado
        }
      });
    }
  } catch (error) {
    return next(new AppError('Error al actualizar el proyecto', 400));
  }
};

// Método para eliminar un proyecto por su ID
exports.eliminarProyecto = async (req, res, next) => {
  try {
    const idProyecto = req.params.idProyecto;
    const eliminado = await Proyecto.destroy({
      where: { id: idProyecto },
    });
    if (eliminado <= 0) {
      return next(new AppError(`No se encontró un proyecto con ID ${idProyecto} para eliminar.`, 404));
    } else {
      console.log("Eliminado correctamente");
      res.status(200).json({
        status: 'success',
        data: {
          message: 'Proyecto eliminado correctamente'
        }
      });
    }
  } catch (error) {
    return next(new AppError('Error al eliminar el proyecto', 400));
  }
};
