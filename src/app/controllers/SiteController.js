const Product = require('../modules/Product');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
const { render } = require('node-sass');
var ls = require('local-storage');
const jwt = require('jsonwebtoken');
const User = require('../modules/Users');
class SiteController {
    //[get]
    home(req, res, next) {
        const token = req.cookies.token;
        if (token) {
            const user = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = user;
            const userId = req.user._id

            Product.find({ sex: "men" }).limit(8)
                .then((sex) => {
                    Product.find({}).limit(12)
                        .then((product) => {
                            res.render('home', {
                                product: mutipleMongooseObject(product.reverse()),
                                sex: mutipleMongooseObject(sex),

                            });
                        })
                        .catch(next);
                })

        } else {
            Product.find({ sex: "men" }).limit(8)
                .then((sex) => {
                    Product.find({}).limit(12)
                        .then((product) => {
                            res.render('home', {
                                product: mutipleMongooseObject(product.reverse()),
                                sex: mutipleMongooseObject(sex),
                            });
                        })
                        .catch(next);
                })
        }

    }







    sport(req, res, next) {
        //  res.render('men/sport');
        Product.find({ type: "sport", sex: "men" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }

    lazy(req, res, next) {
        //  res.render('men/lazy');
        Product.find({ type: "lazy", sex: "men" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);
    }

    leather(req, res, next) {
        //  res.render('men/leather');
        Product.find({ type: "leather", sex: "men" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);
    }

    sandan(req, res, next) {
        //  res.render('men/sandan');
        Product.find({ type: "sandan", sex: "men" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);
    }


    wsport(req, res, next) {
        Product.find({ type: "sport", sex: "woman" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });


            })
            .catch(next);

    }

    wsandan(req, res, next) {
        Product.find({ type: "sandan", sex: "woman" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }

    whighheel(req, res, next) {
        Product.find({ type: "highheel", sex: "woman" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }


    ksport(req, res, next) {
        Product.find({ type: "sport", sex: "kid" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }


    ksandan(req, res, next) {
        Product.find({ type: "sandan", sex: "kid" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }


    kslipper(req, res, next) {
        Product.find({ type: "slipper", sex: "kid" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }

    men(req, res, next) {
        Product.find({ sex: "men" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }

    woman(req, res, next) {
        Product.find({ sex: "woman" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }

    kid(req, res, next) {
        Product.find({ sex: "kid" })
            .then((product) => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

    }

}
module.exports = new SiteController();