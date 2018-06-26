let multipart = require('connect-multiparty');
let multipartWare = multipart();
let message1Controller = require('./../controllers/Message1Controller');
module.exports = (router) => {
       /** Index **/
       router.route('/message').get(message1Controller.index);
};