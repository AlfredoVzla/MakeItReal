const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('makeitreal', 'root', '2206', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;

