const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    image: { typeof: String },
    name: { typeof: String },
    price: { typeof: String },
    type: { typeof: String },
    
    slug: { type: String, slug: "name", unique: true},

},{
    timestamps: true,
  });



module.exports = mongoose.model('Product', Product);