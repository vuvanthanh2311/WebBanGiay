const Product = require('../modules/Product');
const User = require('../modules/Users');
const Bill = require('../modules/Bill');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
const { render } = require('node-sass');

class adminController {
    // tạo mới sản phẩm
    create(req, res) {
            res.render('admin/CreProduct')
        }
        // lưu sản phẩm
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
        // quản lý tài khoản
    AccManage(req, res) {
            User.find({})
                .then((user) => {
                    res.render('admin/AccManage', {
                        user: mutipleMongooseObject(user),
                    });
                })
        }
        // chi tiết từng tài khoản
    detailAcc(req, res) {
            User.findOne({ _id: req.params.id })
                .then(user => {
                    res.render('admin/detailAcc', {
                        user: MongooseObject(user)
                    });
                    // res.json(user);

                })
        }
        // quản lý sản phẩm
    ProductM(req, res) {
            Product.find({})
                .then((product) => {
                    res.render('admin/ProductManage', {
                        product: mutipleMongooseObject(product),
                    });
                })
        }
        // cập nhật sản phẩm
    updatePD(req, res, next) {
            const Data = req.body;
            Data.slug = req.body.name;
            Product.updateOne({ _id: req.params.id }, Data)
                .then(() => res.redirect('/admin/PDManage'))
                .catch(next);
        }
        // chi tiết từng sản phẩm
    detailPD(req, res) {
            Product.findOne({ _id: req.params.id })
                .then(product => {
                    res.render('admin/UpdatePD', {
                        product: MongooseObject(product)
                    });
                    // res.json(user);

                })
        }
        // quản lý hóa đơn mua hàng
    BillMg(req, res, next) {
            Bill.find({})
                .then((bill) => {
                    res.render('admin/BillMg', {
                        bill: mutipleMongooseObject(bill),
                    });
                })
                .catch(next);
        }
        // duyệt hóa đơn
    duyetctt(req, res, next) {
        Bill.updateOne({ _id: req.params.id }, { status: "clh" })
            .then(() => res.redirect('/admin/BillMg'))
            .catch(next);
    }
    duyetclh(req, res, next) {
        Bill.updateOne({ _id: req.params.id }, { status: "danggiao" })
            .then(() => res.redirect('/admin/BillMg'))
            .catch(next);
    }
    duyetdg(req, res, next) {
        Bill.updateOne({ _id: req.params.id }, { status: "dagiao" })
            .then(() => res.redirect('/admin/BillMg'))
            .catch(next);
    }

}
module.exports = new adminController();