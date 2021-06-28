const Product = require('../modules/Product');
const Cart = require('../modules/Cart');
const { MongooseObject } = require('../../util/mongoose');
const { mutipleMongooseObject } = require('../../util/mongoose');
const jwt = require('jsonwebtoken');



const { findOne } = require('../modules/Product');
const { render } = require('node-sass');



class ProductController {

    async carts(req, res, next) {
        const token = req.cookies.token;
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = user;
        const userId = req.user._id
            // const Size = sessionStorage.getItem("Size");
        const cart = await Product.findOne({ slug: req.params.slug })
        const Pcart = new Cart({
            // total: 
            // quantity: 
            // size: Size,
            product_id: cart._id,
            user_id: userId,
            product_name: cart.name,
            product_image: cart.image,
            product_price: cart.price,
            product_description: cart.description,
            product_slug: cart.slug,
        })
        Pcart.save();
        res.redirect('back')

    }


    shows(req, res, next) {

        Product.findOne({ slug: req.params.slug })
            .then(product => {
                res.render('product/shows', {
                    product: MongooseObject(product),

                });
                // res.json(product);
                console.log(product._id)


            })
            .catch(next);

    }

    search(req, res, next) {

        
        Product.find({ $or :[ 
            {name: req.query.name},
            {brand: req.query.name},
            {sex: req.query.name},
        ] })
            .then(product => {
                res.render('content/show', {
                    product: mutipleMongooseObject(product),
                });
            })
            .catch(next);

            

    }
    destroy(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }



}
module.exports = new ProductController();