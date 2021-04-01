const site = require('./sites');

function route(app) {
    app.use('/', site);
}
module.exports = route;
