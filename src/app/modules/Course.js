const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Course = new Schema({

    name: { typeof: String },
    account: { typeof: String },
    password: { typeof: String },
    credate: { type: Date, default: Date.now },
    update: { type: Date, default: Date.now },
});
module.exports = mongoose.model('user', Course);