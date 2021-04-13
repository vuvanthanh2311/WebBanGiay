const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    image: { type: String },
    name: { type: String },
    price: { type: String },
    type: { type: String },

    slug: { type: String, slug: "name", unique: true },

}, {
    timestamps: true,
});



module.exports = mongoose.model('Product', Product);