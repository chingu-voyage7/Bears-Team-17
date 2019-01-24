/* eslint-disable global-require, import/no-extraneous-dependencies */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const bodyParser = require('body-parser');
const express = require('express');
const apis = require('./routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', apis);
app.use('/test', (req, res) => {
  res.json({ success: true, message: 'OK' });
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(`${__dirname}/../client/build`));

  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/../client/build/index.html`);
  });
} else {
  // Always return the main index.html, so react-router render the route in the client
  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/../client/public/index.html`);
  });
}

module.exports = app;
