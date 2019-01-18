// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({ path: '.env.test' });
const db = require('../models/db');

// eslint-disable-next-line no-undef
before(async () => {
  await db.init();
});

// eslint-disable-next-line no-undef
after(async () => {
  await db.close();
});
