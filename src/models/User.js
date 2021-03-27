const connection = require('../database/database');
const sequelize  = require('sequelize');

const User = connection.define('users', {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: sequelize.STRING,
        allowNull: false
    },
    post: {
        type: sequelize.STRING,
        allowNull: true
    },
    workspace:{
        type: sequelize.STRING,
        allowNull: true
    },
    email:  {
        type: sequelize.STRING,
        allowNull: false
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    }
    
});

// User.sync({force: true});

module.exports = User;