const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bill = new Schema({
    user_id: { type: String },
    total: { type: String },
    address: { type: String },
    payment: { type: String },
    date: {type: timestamps},
    
}, {
    timestamps: true,
});



module.exports = mongoose.model('Bill', Bill);