const Product = require('../modules/Product');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
const { render } = require('node-sass');
const jwt = require('jsonwebtoken');
const User = require('../modules/Users');

class cartController {
    // render giỏ hàng
    cart(req, res, next) {
            Product.find({}).limit(12)
                .then((product) => {
                    res.render('cart/cart', {
                        product: mutipleMongooseObject(product),
                    });
                })
                .catch(next);
        }
        // xóa sản phẩm trong giỏ hàng
    checkout(req, res, next) {
        const token = req.cookies.token;
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = user;
        const userId = req.user._id
            // res.render('cart/cart');
        User.findOne({ _id: userId })
            .then((user) => {
                res.render('cart/checkout', {
                    user: MongooseObject(user),
                })

            })
            .catch(next);
    }

}
module.exports = new cartController();