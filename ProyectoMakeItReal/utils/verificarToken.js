const jwt = require('jsonwebtoken');
const secretKey = '123456'; // Reemplaza con tu clave secreta

const verificarToken = (req, res, next) => {
  // Obtén el token del encabezado de la solicitud
  const token = req.header('Authorization');

  // Verifica si el token existe
  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }

  // Verifica el token
  jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      return res.status(401).json({ mensaje: 'Token inválido' });
    }
    req.usuario = decoded; // Almacena la información del usuario en el objeto 'req' para su uso posterior
    next(); // Continúa con la siguiente función de middleware o controlador
  });
};

module.exports = verificarToken;
