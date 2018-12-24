/* eslint-disable global-require, import/no-extraneous-dependencies */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const port = process.env.PORT || 3001;

const app = require('./app');
const db = require('./models/db');

app.listen(port, () => {
  console.log('listening on port:', port);
});

