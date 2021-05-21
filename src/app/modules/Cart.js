const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
    total: { type: String },
    quantity: { type: String },
    product_id: {type: String},
    user_id: {type: String},
    product_name: {type: String},
    product_image: {type: String},
    product_price: {type: String},
    product_description: {type: String},
    product_slug:{type: String},
    
}, {
    timestamps: true,
});



module.exports = mongoose.model('Cart', Cart);