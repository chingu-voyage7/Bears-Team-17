/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

async function init() {
  console.log(`mongo uri [${process.env.MONGODB_URI}]`);
  const db = await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  console.log('connected to db');
  // events handlers
  db.connection.on('error', err => {
    console.log(`connection error: ${err}`);
  });

  db.connection.on('disconnected', () => {
    console.log('disconnected');
  });
};

async function close() {
  await mongoose.connection.close();
}

// tidy up connections
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('disconnected through app termination');
    process.exit(0);
  });
});

module.exports = { init, close };
