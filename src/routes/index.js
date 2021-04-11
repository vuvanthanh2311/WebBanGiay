const newPD = require('./newProduct');
const site = require('./sites');
const productRouter = require('./product');


function route(app) {
    app.use('/newPD', newPD);
    app.use('/', site);
    app.use('/product', productRouter);
}
module.exports = route;