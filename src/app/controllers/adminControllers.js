const Product = require('../modules/Product');
const User = require('../modules/Users');
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
        product.save()
            .then(() => res.redirect('/admin/createPD'))
            .catch(next);
    }
    dashboard(req, res) {
        res.render('admin/dashboard')
    }
    AccManage(req, res) {
        User.find({})
            .then((user) => {
                res.render('admin/AccManage', {
                    user: mutipleMongooseObject(user),
                });
            })
    }
    detailAcc(req, res) {
        User.findOne({ _id: req.params.id })
            .then(user => {
                res.render('admin/detailAcc', {
                    user: MongooseObject(user)
                });
                // res.json(user);

            })
    }
    ProductM(req, res) {
        Product.find({})
            .then((product) => {
                res.render('admin/ProductManage', {
                    product: mutipleMongooseObject(product),
                });
            })
    }
    updatePD(req, res, next) {
        const Data = req.body;
        Data.slug = req.body.name;
        Product.updateOne({ _id: req.params.id }, Data)
            .then(() => res.redirect('/admin/PDManage'))
            .catch(next);
    }

    detailPD(req, res) {
        Product.findOne({ _id: req.params.id })
            .then(product => {
                res.render('admin/UpdatePD', {
                    product: MongooseObject(product)
                });
                // res.json(user);

            })
    }
    

}
module.exports = new adminController();