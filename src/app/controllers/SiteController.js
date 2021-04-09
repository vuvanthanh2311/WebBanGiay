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

    sport(req, res, next) {
        //  res.render('men/sport');
        Product.find({ type:"sport"})
            .then((product) => {
                res.render('men/sport', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);
    }

    lazy(req, res, next) {
        //  res.render('men/lazy');
        Product.find({type:"lazy"})
            .then((product) => {
                res.render('men/lazy', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);
    }
    
    leather(req, res, next) {
        //  res.render('men/leather');
        Product.find({type:"leather"})
            .then((product) => {
                res.render('men/leather', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);
    }
    
    sandan(req, res, next) {
        //  res.render('men/sandan');
        Product.find({type:"sandan"})
            .then((product) => {
                res.render('men/sandan', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);
    }
    


    
}
module.exports = new SiteController();