
module.exports = {
    /*sequelize_: new Sequelize(
        'database',
        'username',
        'password',
        {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        // SQLite only
        //storage: 'path/to/database.sqlite',

        // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
        operatorsAliases: false
    }),*/
    database:'realtime_message',
    username:'root',
    password:'',
    sec_object_param: {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        // SQLite only
        //storage: 'path/to/database.sqlite',

        // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
        operatorsAliases: false
    }
}