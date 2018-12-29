const request = require('supertest');
const assert = require('assert');

const app = require('../app');

const Question = require('../models/questions');
const questionData = require('../test/questionData');
const User = require('../models/users');
const userData = require('../test/userData');

describe('create question api', () => {
  let user; // test user
  // eslint-disable-next-line no-undef
  before(async () => {
    await User.deleteMany();
    await Question.deleteMany();
    user = new User(userData[0]);
    await user.save();
  });
  // eslint-disable-next-line no-undef
  after(async () => {
    await User.deleteMany();
    await Question.deleteMany();
  });
  it('should create a new question', () => request(app)
    .post('/api/question')
    .send({ question: { ...questionData[0], author: user._id } })
    .set('Accept', 'application/json')
    .expect(200)
    .then(res => {
      assert(res.body.success === true, 'incorrect response, success false');
      // eslint-disable-next-line quotes
      assert(res.body.message === 'Question posted', `incorrect response message [${res.body.message}]`);
      const { question } = res.body;
      assert(question.title === questionData[0].title, `incorrect question returned [${res.body}]`);
    })
  );
});
