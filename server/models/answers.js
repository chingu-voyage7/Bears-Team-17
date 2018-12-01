const mongoose = require('mongoose');

const { Schema } = mongoose;

// answer schema
const answerSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  info: { type: String },
  text: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  date: { type: Date, default: Date.now },
  scores: { type: Number, default: 0 },
  edited: { type: Boolean, default: false }
});

// build Answer model
const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;
