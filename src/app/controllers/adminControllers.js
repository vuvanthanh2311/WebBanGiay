const Product = require('../modules/Product');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
const { render } = require('node-sass');

class adminController {
    create(req, res) {
        res.render('admin/CreProduct')
    }
    store(req, res, next) {

        const Data = req.body;
        Data.slug = req.body.name;
        const product = new Product(Data);
        product.save();
        res.json(Data);
    }

}
module.exports = new adminController();