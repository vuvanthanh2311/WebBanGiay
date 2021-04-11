const newPD = require('./newProduct');
const site = require('./sites');


function route(app) {
    app.use('/newPD', newPD);
    app.use('/', site);
}
module.exports = route;