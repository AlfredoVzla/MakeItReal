const jwt = require('jsonwebtoken');
const secretKey = '123456'; 

const verificarToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }

  jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      return res.status(401).json({ mensaje: 'Token inválido' });
    }
    req.usuario = decoded;
    next();
  });
};

module.exports = verificarToken;
