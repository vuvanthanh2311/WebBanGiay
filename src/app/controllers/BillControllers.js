const Product = require('../modules/Product');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
const { render } = require('node-sass');
const jwt = require('jsonwebtoken');
const Bill = require('../modules/Bill');
const User = require('../modules/Users');


class BillController {
    show(req, res) {
        User.findOne({ _id: req.params.id })
            .then(user => {
                res.render('Bill/show', {
                    user: MongooseObject(user)
                });
            })
    }
    store(req, res, next) {

        const Data = req.body;
        const bill = new Bill(Data);
        bill.save()
            .then(() => res.redirect('/admin/createPD'))
            .catch(next);
    }

}
module.exports = new BillController();