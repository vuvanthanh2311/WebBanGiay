const newPD = require('./newProduct');
const site = require('./sites');
const productRouter = require('./product');
const logon = require("./logon");


function route(app) {
    app.use('/logon', logon);
    app.use('/product', productRouter);
    app.use('/newPD', newPD);
    app.use('/', site);

}
module.exports = route;