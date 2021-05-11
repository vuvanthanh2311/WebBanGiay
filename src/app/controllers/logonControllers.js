const User = require('../modules/Users');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
const { render } = require('node-sass');


class logonController {
    signin(req, res) {
        res.render('logon/signin')
    }
    signup(req, res) {
        res.render('logon/signup')
    }
    profile(req, res) {
        res.render('logon/profile')
    }
    store(req, res, next) {

        const Data = req.body;
        const user = new User(Data);
        user.save();
        res.json(Data);
    }

}
module.exports = new logonController();