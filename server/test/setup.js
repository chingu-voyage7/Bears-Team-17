require('.dotenv').config({ path: '.env.test' });
const server = require('../server');

before(async () => {
  await server.init();
});

after(async () => {
  await server.stop();
});
