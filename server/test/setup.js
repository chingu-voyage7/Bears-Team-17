require('dotenv').config({ path: '.env.test' });
const db = require('../models/db');

before(async () => {
  await db.init();
});

after(async () => {
  await db.close();
});

