const mongoose = require('mongoose');

const Auth = new mongoose.Schema({
    username: String,
    password: String
}, { collection: 'users' });

module.exports = mongoose.model('Auth', Auth);
