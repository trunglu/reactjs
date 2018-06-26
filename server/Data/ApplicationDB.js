//This file return a ApplicationDB context.
let Sequelize = require('sequelize');
const config_database = require('./../config/database');
module.exports = {
    applicationDBContext: new Sequelize(
        config_database.database,
        config_database.username,
        config_database.password,
        config_database.sec_object_param
    ),
};