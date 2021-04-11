const Product = require('../modules/Product');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
const { render } = require('node-sass');
class newController {


    //[get] news
    detail(req, res, next) {

        Product.findOne({ link: req.params.slug })
            .then(product => {
                res.render('newPD/detailPD', {
                    product: MongooseObject(product)
                })
            })
            .catch(next)

    }
    newPD(req, res) {
        res.render('newPD/detailPD')
    }
    create(req, res) {
        res.render('newPD/create')
    }


}
module.exports = new newController();