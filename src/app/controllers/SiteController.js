const Course = require("../modules/Course")
const { mutipleMongooseObject } = require('../../util/mongoose')
class SiteController {
    //[get]
    home(req, res, next) {
        // res.render('home');
        Course.find({})
            .then(course => {
                res.render("home", {
                    course: mutipleMongooseObject(course)
                })
            })
            .catch(next)
    }

    //[get] news
    news(req, res) {
        res.render('news');
    }
    newsshow(req, res) {
        res.send('news page slug');
    }

    //[get] news
    search(req, res) {
        res.render('search');
    }

}
module.exports = new SiteController();