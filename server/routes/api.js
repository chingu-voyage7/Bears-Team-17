const express = require('express');
const Questions = require('../models/questions');

const api = express.Router();

// post question
api.post('/question', (req, res) => {
  if (req.body.question) {
    // const parsedQuestion = JSON.parse(req.body.question);
    const { question } = req.body;
    Questions.create(question, (error, doc) => {
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
  } else {
    res.json({ success: false, message: 'No question' });
  }
});

// get question
api.get('/question', (req, res) => {
  const query = {
    sortby: 'date',
    order: -1
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
  switch (req.query.order) {
    case '1':
      query.order = req.query.order;
      break;
    default:
      query.order = -1;
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
