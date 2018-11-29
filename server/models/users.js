const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema({
    name:  {type: String, required = True},
    email: {type: String, required = True},
    info:  {type: String},
    password: {type: String, required = True},
    rate: {tyep: Int},
    createdOn: {type: Date, 'default': Date.now}
});

// build user model
const User = mongoose.model('User', userSchema);
module.exports = User;