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
  const query = {
    sortby: '',
    order: 1
  };
  switch (req.query.sortby) {
    case 'views':
      query.sortby = 'views';
      break;
    case 'scores':
      query.sortby = 'scores';
      break;
    case 'n_answers':
      query.sortby = 'n_answers';
      break;
    default:
      query.sortby = 'date';
  }
  if (!req.query.order) {
    query.order = -1;
  } else {
    query.order = req.query.order;
  }
  Questions.getQuestions(query)
    .then(docs => {
      res.json(docs);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = api;
