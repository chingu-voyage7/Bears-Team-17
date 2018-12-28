const request = require('supertest');
const app = require('../app');
const assert = require('assert');

const Question = require('../models/questions');
const questionData = require('../test/questionData');
const User = require('../models/users');
const userData = require('../test/userData');

const createQuestion = author => question => {
  return { ...question, author };
};

beforeEach(async () => {
  const user = new User(userData[0]);
  await user.save();
  const makeQuestion = createQuestion(user._id);
  const questions = questionData.map(qd => {
    return new Question(makeQuestion(qd));
  });
  try {
    questions.forEach(async q => await q.save());
  } catch (e) {
    console.log('error creating question:', e);
  }
});

afterEach(async () => {
  await User.deleteMany({});
  await Question.deleteMany({});
});

describe('question api', () => {
  it('should get all questions', () => {
    return request(app)
      .get('/api/question')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        assert(res.body.length === 2, `incorrect length [${res.body.length}]`);
      });
  });
});

