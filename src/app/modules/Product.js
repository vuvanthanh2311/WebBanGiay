const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    image: { type: String },
    name: { type: String },
    price: { type: String },
    type: { type: String },
    description: { type: String },

    slug: { type: String, slug: "name", },

}, {
    timestamps: true,
});



module.exports = mongoose.model('Product', Product);