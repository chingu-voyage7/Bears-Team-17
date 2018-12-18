const express = require('express');
const Questions = require('../models/questions');
const db = require('../models/db');

const api = express.Router();

// post question
api.post('/postQuestion', (req, res) => {
  if (req.body.question) {
    const parsedQuestion = JSON.parse(req.body.question);
    const newQuestion = {
      title: parsedQuestion.messageTitle,
      text: parsedQuestion.messageText,
    };
    Questions.create(newQuestion, (error, questionPosted) => {
      if (!error) {
        res.json({
          success: true,
          message: 'Question posted'
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
