const Product = require('../modules/Product');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
const { render } = require('node-sass');
const jwt = require('jsonwebtoken');
const Cart = require('../modules/Cart');
const User = require('../modules/Users');

class cartController {
    cart(req, res, next) {
        const token = req.cookies.token;
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = user;
        const userId = req.user._id
            // res.render('cart/cart');
        Cart.find({ user_id: userId })
            .then((cart) => {
                res.render('cart/cart', {
                    cart: mutipleMongooseObject(cart),
                });
            })
            .catch(next);
    }
    destroy(req, res, next) {
        Cart.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
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
                    .catch(next);
            });
    }

}
module.exports = new cartController();