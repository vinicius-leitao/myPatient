const sequelize = require('sequelize');
const connection = require('../database/database');
const User = require('../models/User');

const Workspace = connection.define('workspaces', {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    speciality: {
        type: sequelize.STRING,
        allowNull: true
    }
    
});

// Workspace.sync({force: true});

module.exports = Workspace;