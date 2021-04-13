const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    password_comfirmation: { type: String, required: true },
    // address: { type: String, },

}, {
    timestamps: true,
});

module.exports = mongoose.model('User', User);