const Product = require('../modules/Product');
const Cart = require('../modules/Cart');
const { MongooseObject } = require('../../util/mongoose');
const { mutipleMongooseObject } = require('../../util/mongoose');
const jwt = require('jsonwebtoken');



const { findOne } = require('../modules/Product');
const { render } = require('node-sass');



class ProductController {

    async  carts(req, res , next){
        const token = req.cookies.token;
          const user = jwt.verify(token, process.env.TOKEN_SECRET);
          req.user= user;
          const userId = req.user._id

       const cart = await Product.findOne({ slug: req.params.slug })
       const Pcart = new Cart({
        // total: 
        // quantity: 
        product_id: cart._id,
        user_id: userId,
        product_name: cart.name,
        product_image: cart.image,
        product_price: cart.price,
        product_description: cart.description,
        product_slug: cart.slug,
       })
       Pcart.save();
    //    res.json(Pcart)
    //    console.log(cart._id)
        res.redirect('/')
       
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