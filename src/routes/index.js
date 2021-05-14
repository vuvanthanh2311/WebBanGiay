const site = require('./sites');
const productRouter = require('./product');
const logon = require("./logon");
const admin = require('./admin');


function route(app) {
    app.use('/logon', logon);
    app.use('/product', productRouter);
    app.use('/admin', admin);
    app.use('/', site);

}
module.exports = route;