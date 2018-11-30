const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cars',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

//events handlers
db.on('connected', function () {
    console.log('connected to db');
  });
  
  db.on('error',function (err) {
    console.log('connection error: ' + err);
  });
  
  db.on('disconnected', function () {
    console.log('disconnected');
  });
  
  // tidy up connections
  process.on('SIGINT', function() {
    db.close(function () {
      console.log('disconnected through app termination');
      process.exit(0);
      });
  });  

module.exports = db;