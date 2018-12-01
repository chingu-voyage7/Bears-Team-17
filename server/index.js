/* eslint-disable global-require, import/no-extraneous-dependencies */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/test', (req, res) => {
  res.json({ success: true, message: 'OK' });
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile('client/build/index.html');
  });
} else {
  app.use(express.static('../client/build'));
  // Always return the main index.html, so react-router render the route in the client
  app.get('*', (req, res) => {
    res.sendFile('../client/build/index.html');
  });
}

app.listen(PORT, () => {
  console.log(`Find the server at port [${PORT}]`); // eslint-disable-line no-console
});
