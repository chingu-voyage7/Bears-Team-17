const request = require('supertest');
const assert = require('assert');

const app = require('../app');

const Question = require('../models/questions');
const questionData = require('../test/questionData');
const User = require('../models/users');
const userData = require('../test/userData');

const createQuestion = author => question => ({ ...question, author });

// eslint-disable-next-line no-undef
before(async () => {
  await User.deleteMany({});
  await Question.deleteMany({});
});

beforeEach(async () => {
  const user = new User(userData[0]);
  await user.save();
  const makeQuestion = createQuestion(user._id);
  const questions = questionData.map(qd => new Question(makeQuestion(qd)));
  try {
    questions.forEach(async q => q.save());
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('error creating question:', e);
  }
});

afterEach(async () => Question.deleteMany({}));

describe('get question api', () => {
  it('should get all questions', () => request(app)
    .get('/api/question')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      assert(res.body.length === 2, `incorrect question count [${res.body.length}]`);
    })
  );
});
