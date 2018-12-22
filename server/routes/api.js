const express = require('express');
const Questions = require('../models/questions');
const Users = require('../models/users');

const api = express.Router();

// post question
api.post('/question', (req, res) => {
  if (req.body.question) {
    const parsedQuestion = JSON.parse(req.body.question);
    const newQuestion = {
      author: parsedQuestion.messageAuthor,
      title: parsedQuestion.messageTitle,
      text: parsedQuestion.messageText,
      tags: parsedQuestion.messageTags,
    };
    Questions.create(newQuestion, (error, doc) => {
      if (!error) {
        res.json({
          success: true,
          message: 'Question posted',
          question: doc
        });
      } else {
        res.json({
          success: false,
          message: error,
        });
      }
    });
  }
});

// get question
api.get('/question', (req, res) => {
  let sortby = '';
  switch (req.query.sortby) {
    case 'views':
      sortby = 'views';
      break;
    case 'scores':
      sortby = 'scores';
      break;
    case 'n_answers':
      sortby = 'scores';
      break;
    default:
      sortby = 'date';
  }
  Questions.find({})
    .sort(sortby)
    .populate('author', 'name')
    .exec((err, docs) => {
      if (err) {
        res.json(err);
      } else {
        res.json(docs);
      }
    });
});

module.exports = api;
