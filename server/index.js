/* eslint-disable global-require, import/no-extraneous-dependencies */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const apis = require('./routes/api');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', apis);
app.use('/test', (req, res) => {
  res.json({ success: true, message: 'OK' });
});

// db events handlers
db.on('connected', () => {
  console.log('connected to db');
});

db.on('error', err => {
  console.log(`connection error: ${err}`);
});

db.on('disconnected', () => {
  console.log('disconnected');
});

// tidy up connections
process.on('SIGINT', () => {
  db.close(() => {
    console.log('disconnected through app termination');
    process.exit(0);
  });
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
