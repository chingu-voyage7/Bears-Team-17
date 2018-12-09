const mongoose = require('mongoose');

const { Schema } = mongoose;

// user schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  info: { type: String },
  password: { type: String, required: true },
  rate: { type: Number, default: 0 },
  createdOn: { type: Date, default: Date.now },
});

// build User model
const User = mongoose.model('User', userSchema);
module.exports = User;
