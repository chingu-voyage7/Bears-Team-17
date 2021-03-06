/* eslint-disable global-require, import/no-extraneous-dependencies, no-console */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const port = process.env.PORT || 3001;

const app = require('./app');
const db = require('./models/db');

db.init();

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('app server listening on port:', port);
});
