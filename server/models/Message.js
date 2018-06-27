let Sequelize = require('sequelize');
//Mapping between table database and model.
let ApplicationDBContext = require('./../Data/ApplicationDB');

let messageModel = ApplicationDBContext.applicationDBContext
    .define('message',{
        id:{type:Sequelize.INTEGER,primaryKey:true},
        name:Sequelize.STRING,
        email:Sequelize.STRING,
        subject:Sequelize.STRING,
        message:Sequelize.STRING,
        created_at:Sequelize.STRING,
        read_status:Sequelize.BOOLEAN
    },{
        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,

        // define the table's name
        tableName: 'message',
        timestamps: false
    });
    messageModel.prototype.show_message = function () {
        return this.message;
    };



module.exports = messageModel;