const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    image: { typeof: String },
    name: { typeof: String },
    price: { typeof: String },
    credate: { type: Date, default: Date.now },
    update: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Product', Product);