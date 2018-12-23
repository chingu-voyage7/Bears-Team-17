const mongoose = require('mongoose');

const { Schema } = mongoose;

// question schema
const questionSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  text: { type: String, required: true },
  tags: { type: Array },
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
  n_answers: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  scores: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  edited: { type: Boolean, default: false },
});

questionSchema.statics.getQuestions = function getQuestions(query) {
  return new Promise((resolve, reject) => {
    this.find({})
      .sort([[query.sortby, query.order]])
      .populate('author', 'name')
      .exec((err, docs) => {
        if (err) {
          return reject(err);
        }
        return resolve(docs);
      });
  });
};

// build Question model
module.exports = mongoose.model('Question', questionSchema);
