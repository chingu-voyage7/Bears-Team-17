const mongoose = require('mongoose');

const { Schema } = mongoose;

// question schema
const questionSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Users' },
  text: { type: String, required: true },
  tags: { type: Array },
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answers' }],
  n_answers: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  scores: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  edited: { type: Boolean, default: false },
});

// build Question model
const Questions = mongoose.model('Question', questionSchema);

// Find messages by own mongoose query
// eslint-disable-next-line func-names
questionSchema.statics.questions = function (sortby, callback) {
  Questions.find({})
    .select('title author text tags answers date scores views edited')
    .sort(sortby)
    .populate('author', 'name')
    .exec((err, docs) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, docs);
      }
    });
};

module.exports = Questions;
