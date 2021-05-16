const Product = require('../modules/Product');
const { MongooseObject } = require('../../util/mongoose');
const { mutipleMongooseObject } = require('../../util/mongoose');

const { findOne } = require('../modules/Product');
const { render } = require('node-sass');



class ProductController {



    shows(req, res, next) {
        //  res.send('thong depzai');
        Product.findOne({ slug: req.params.slug })
            .then(product => {
                res.render('product/shows', {
                    product: MongooseObject(product)
                });
                // res.json(product);

            })
            .catch(next);
    }

    search(req, res, next) {
        console.log(req.query.name);
        Product.find({ name: req.query.name })
            .then(product => {
                res.render('product/search', {

                    product: mutipleMongooseObject(product)
                });
                // console.log(product)


            })
            .catch(next);

    }



}
module.exports = new ProductController();