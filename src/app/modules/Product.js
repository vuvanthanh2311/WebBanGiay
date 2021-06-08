const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    image: { type: String },
    name: { type: String },
    price: { type: Number },
    type: { type: String },
    sex: { type: String },
    description: { type: String },
    brand: { type: String },
    slug: { type: String },
    size: { type: Number },
    number: { type: Number },
}, {
    timestamps: true,
});



module.exports = mongoose.model('Product', Product);