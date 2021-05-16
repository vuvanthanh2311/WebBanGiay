const Product = require('../modules/Product');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
const { render } = require('node-sass');

class cartController {
    cart(req, res) {
        // res.render('cart/cart');
        Product.find({}).limit(3)
            .then((product) => {
                res.render('cart/cart', {
                    product: mutipleMongooseObject(product),
                });
            })
            // .catch(next);
    }

}
module.exports = new cartController();