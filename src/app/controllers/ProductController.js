const Product = require('../modules/Product');
const Comment = require('../modules/Comment');
const User = require('../modules/Users');
const { MongooseObject } = require('../../util/mongoose');
const { mutipleMongooseObject } = require('../../util/mongoose');
const jwt = require('jsonwebtoken');



const { findOne } = require('../modules/Product');
const { render } = require('node-sass');



class ProductController {

    // render giao diện từng sản phẩm
    shows(req, res, next) {

            Product.findOne({ slug: req.params.slug })
                .then(product => {
                    Comment.find({ product_id: product._id })
                        .then((comment) => {
                            res.render('product/shows', {
                                product: MongooseObject(product),
                                comment: mutipleMongooseObject(comment),
                            });
                        })

                })
                .catch(next);

        }
        // tìm kiếm sản phẩm
    search(req, res, next) {
            // hàm xử lý tìm kiếm
            const name = req.query.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const reg = new RegExp(name, 'ig');

            Product.find({
                    $or: [
                        { name: reg },
                        { brand: reg },
                        { sex: reg },
                    ]
                })
                .then(product => {
                    res.render('content/show', {
                        product: mutipleMongooseObject(product),
                    });
                })
                .catch(next);



        }
        // xóa sản phẩm
    destroy(req, res, next) {
            Product.deleteOne({ _id: req.params.id })
                .then(() => res.redirect('back'))
                .catch(next);
        }
        // lưu comment user
    comment(req, res, next) {
        const token = req.cookies.token;
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = user;
        const userId = req.user._id

        const Data = req.body;

        User.findOne({ _id: userId })
            .then((user) => {
                Data.user_name = user.fullname;
                const comment = new Comment(Data);
                comment.save()
                    .then(() => res.redirect('back'))
            })
            .catch(next);
    }



}
module.exports = new ProductController();