const Product = require('../modules/Product');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
const { render } = require('node-sass');
var ls = require('local-storage');
class SiteController {
    //[get]
    home(req, res, next) {
        // res.render('home');
        Product.find({}).limit(12)
            .then((product) => {
                res.render('home', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);
    }




  



    sport(req, res, next) {
        //  res.render('men/sport');
        Product.find({ type: "sport" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);
            
    }

    lazy(req, res, next) {
        //  res.render('men/lazy');
        Product.find({ type: "lazy" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);
    }

    leather(req, res, next) {
        //  res.render('men/leather');
        Product.find({ type: "leather" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);
    }

    sandan(req, res, next) {
        //  res.render('men/sandan');
        Product.find({ type: "sandan" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);
    }


    wsport(req, res, next) {
        Product.find({ type: "wsport" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });


            })
            .catch(next);

    }

    wsandan(req, res, next) {
        Product.find({ type: "wsandan" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }

    whighheel(req, res, next) {
        Product.find({ type: "whighheel" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }


    ksport(req, res, next) {
        Product.find({ type: "ksport" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }


    ksandan(req, res, next) {
        Product.find({ type: "ksandan" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }


    kslipper(req, res, next) {
        Product.find({ type: "kslipper" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }




}
module.exports = new SiteController();