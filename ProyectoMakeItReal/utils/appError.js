class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
  
      this.statusCode = statusCode;
      // "Si el código de estado comienza con el número 4, es un error del cliente, entonces se establece el estado como 'fallo', de lo contrario, 
      //si el código de estado no comienza con 4, se considera un error general y se establece el estado como 'error'."
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = AppError;
