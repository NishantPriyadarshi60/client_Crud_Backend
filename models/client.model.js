const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    mobile: String,
    project: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Client', ClientSchema)