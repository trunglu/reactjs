/** require dependencies */
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const routes = require('./routes/');

const app = express();
const router = express.Router();
//Config url connect DB only mongoDB
//const url = process.env.MONGODB_URI || "mongodb://localhost:27017/medium";

let port = 5000 || process.env.PORT;
/** Init model test variable **/
/*let mesM = require('./models/Message');
let l_m = mesM._model.findAll({
    attributes: ['message']
}).then((result) => {
    //console.log(result);
    if(result.length > 0) {
        for(var mes of result){
            console.log(mes.show_message());
        }
    }
});
*/
/** ------------------------------- **/
/** set up routes {API Endpoints} */
routes(router);
/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

app.use('/api', router);

//
//Test DEBUG connection MySql
//AppDBContext.applicationDBContext.authenticate()
    //.then(() => {
    //    console.log('Connection has been established successfully.');
        /*AppDBContext.applicationDBContext.query("SELECT * FROM message").then(myTableRows => {
            console.log(myTableRows);
        });*/
    //})
    //.catch(err => {
    //    console.error('Unable to connect to the database:', err);
    //});
//
//

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});