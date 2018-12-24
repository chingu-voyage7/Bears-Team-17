/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// events handlers
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

module.exports = db;
