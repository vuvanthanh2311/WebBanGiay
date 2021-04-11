const Product = require('../modules/Product');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
const { render } = require('node-sass');
class SiteController {
    //[get]
    home(req, res, next) {
        // res.render('home');
        Product.find({})
            .then((product) => {
                res.render('home', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);
    }




    //[get] news
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();