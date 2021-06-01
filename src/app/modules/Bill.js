const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bill = new Schema({
    user_id: { type: String },
    total: { type: Number },
    products: { type: [String] },
    status: { type: String },

}, {
    timestamps: true,
});



module.exports = mongoose.model('Bill', Bill);