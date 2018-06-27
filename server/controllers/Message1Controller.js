let Message = require('./../models/Message');

module.exports = {
    index: (req, res, next) => {
        Message.findAll().then((result) => {
            //console.log("Giá trị list:");
            //console.log(result);
            return res.json(result);
        }).catch((error) => {
            return res.json(error);
        });
    },
};