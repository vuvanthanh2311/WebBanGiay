const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Billdetail = new Schema({
    bill_id: { type: String },
    product_id: { type: String },
    price:{type: String},
    quantity:{type: String},
    
}, {
    timestamps: true,
});



module.exports = mongoose.model('Billdetail', Billdetail);