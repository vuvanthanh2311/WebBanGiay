const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Checkout = new Schema({
    user_id: { type: String },
    product_id: { type: String },
    total: { type: String },
    address: { type: String },
    date: { type: timestamps },

}, {
    timestamps: true,
});



module.exports = mongoose.model('Checkout', Checkout);