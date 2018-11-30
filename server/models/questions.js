const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// question schema
const questionSchema = new Schema({
    title:  {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    info:  {type: String},
    text: {type: String, required: true},
    tags: {type: Array},
    answers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    date: {type: Date, 'default': Date.now},
    scores: {tyep: Number, 'default': 0},
    views: {tyep: Number, 'default': 0},
    edited: {tyep: Boolean, 'default': false}
});

// build Question model
const Question = mongoose.model('Question', questionSchema);
module.exports = Question;