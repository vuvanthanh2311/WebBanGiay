const Product = require('../modules/Product');
const { mutipleMongooseObject } = require('../../util/mongoose');
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
    news(req, res) {
        res.render('news');
    }
    newsshow(req, res) {
        res.send('news page slug');
    }

    //[get] news
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();