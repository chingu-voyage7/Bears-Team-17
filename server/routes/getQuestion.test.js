const request = require('supertest');
const assert = require('assert');

const app = require('../app');

const Question = require('../models/questions');
const questionData = require('../test/questionData');
const User = require('../models/users');
const userData = require('../test/userData');

const createQuestion = author => question => ({ ...question, author });

describe('get question api', () => {
  let user;
  // eslint-disable-next-line no-undef
  before(async () => {
    await User.deleteMany({});
    await Question.deleteMany({});
    user = new User(userData[0]);
    await user.save();
  });

  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    const makeQuestion = createQuestion(user._id);
    const questions = questionData.map(qd => new Question(makeQuestion(qd)));
    try {
      questions.forEach(async q => q.save());
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('error creating question:', e);
    }
  });

  // eslint-disable-next-line no-undef
  afterEach(async () => Question.deleteMany({}));
  // eslint-disable-next-line no-undef
  after(async () => User.deleteMany());

  it('should get all questions', () => request(app)
    .get('/api/question')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      assert(res.body.success, 'Failed to request questions:' + res.body.err);
      assert(res.body.list.length === 2, `incorrect question count [${res.body.length}]`);
    })
  );
});
