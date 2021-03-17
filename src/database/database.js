const Sequelize = require('sequelize');
require('dotenv').config();

const connection = new Sequelize('mypatient', process.env.DATABASE_USER_NAME, process.env.DATABASE_USER_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;