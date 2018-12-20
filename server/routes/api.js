const express = require('express');
const Questions = require('../models/questions');

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

module.exports = api;
