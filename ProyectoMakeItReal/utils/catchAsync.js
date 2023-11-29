// Para capturar cualquier error que ocurra en la ejecucion de 'funcionMiddleware' y lo pasa al siguiente middleware de manejo de errores
module.exports = funcionMiddleware => {
    return (req, res, next) => {
      funcionMiddleware(req, res, next).catch(next);
    };
};

