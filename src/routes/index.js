const site = require('./sites');
const productRouter = require('./product');
const logon = require("./logon");
const admin = require('./admin');
const cart = require('./cart');
const Bill = require('./Bill');


function route(app) {
    app.use('/logon', logon);
    app.use('/product', productRouter);
    app.use('/admin', admin);
    app.use('/cart', cart);
    app.use('/Bill', Bill);
    app.use('/', site);

}
module.exports = route;