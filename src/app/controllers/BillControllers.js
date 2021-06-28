const Product = require('../modules/Product');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
const { render } = require('node-sass');
const jwt = require('jsonwebtoken');
const Bill = require('../modules/Bill');
const User = require('../modules/Users');


class BillController {
    show(req, res, next) {
        const token = req.cookies.token;
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = user;
        const userId = req.user._id
        Bill.find({ user_id: userId })
            .then((bill) => {

                res.render('Bill/show', {
                    bill: mutipleMongooseObject(bill),
                });
            })
            .catch(next);
    }
    store(req, res, next) {

        const Data = req.body;
        const bill = new Bill(Data);
        bill.save()
            .then(() => res.json("luu thanh cong"))
            .catch(next);
    }
    delete(req, res, next) {
        Bill.updateOne({ _id: req.params.id }, { status: "dh" })
            .then(() => res.redirect('/Bill/show'))
            .catch(next);
    }
    repurchase(req, res, next) {
        Bill.updateOne({ _id: req.params.id }, { status: "ctt" })
            .then(() => res.redirect('/Bill/show'))
            .catch(next);
    }
    detail(req, res, next) {
        Bill.findOne({ _id: req.params.id })
            .then((bill) => {
                User.findOne({ _id: bill.user_id })
                    .then((user) => {
                        res.render('Bill/detail', {
                            bill: MongooseObject(bill),
                            user: MongooseObject(user),
                        });
                    })

            })
            .catch(next);
    }

}
module.exports = new BillController();