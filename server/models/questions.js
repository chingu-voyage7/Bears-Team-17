const mongoose = require('mongoose');

const { Schema } = mongoose;

// question schema
const questionSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Users' },
  text: { type: String, required: true },
  tags: { type: Array },
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answers' }],
  date: { type: Date, default: Date.now },
  scores: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  edited: { type: Boolean, default: false },
});

// build Question model
const Questions = mongoose.model('Question', questionSchema);
module.exports = Questions;
