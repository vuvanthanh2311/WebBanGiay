const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    user_name: { type: String },
    content: { type: String },
    product_id: { type: String },
}, {
    timestamps: true,
});



module.exports = mongoose.model('Comment', Comment);