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
                // res.json(POB)
                // console.log(POB)

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

}
module.exports = new BillController();