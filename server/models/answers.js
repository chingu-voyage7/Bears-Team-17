const mongoose = require('mongoose');

const { Schema } = mongoose;

// answer schema
const answerSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Users' },
  text: { type: String, required: true },
  comments: { type: Array },
  date: { type: Date, default: Date.now },
  scores: { type: Number, default: 0 },
  edited: { type: Boolean, default: false },
});

// build Answer model
module.exports = mongoose.model('Answer', answerSchema);
