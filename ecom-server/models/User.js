const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    emailVerified: Boolean,
    authData: Object
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
