const Product = require('../modules/Product');
const { MongooseObject } = require('../../util/mongoose');

class ProductController {
   
  
    
    shows(req, res, next) {
        //  res.send('thong depzai');
        Product.findOne({slug: req.params.slug })
            .then( product => {
                res.render('product/shows', {
                    product: MongooseObject(product)
                });
                // res.json(product);
                
            })
            .catch(next);
    }
    


    
}
module.exports = new ProductController();