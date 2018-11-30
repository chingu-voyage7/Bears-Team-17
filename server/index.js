if (process.env !== 'production') {
  require('dotenv').config();
};
const bodyParser = require('body-parser');
const express = require('express'),
    app = express(),
    session = require('express-session');
const db = require('./models/db');
const users = require('./models/users');

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/test', (req, res) => {
  res.json({ success: true, message: "OK" });
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use( '/', express.static('client/build'));

  app.get('*', function (req, res) {
    res.sendFile( 'client/build/index.html');
  });
} else {
  app.use(express.static('../client/build')); // FIXME: remove path.resolve(__dirname, '..', 'frontend', 'build')));
  // Always return the main index.html, so react-router render the route in the client
  app.get('*', (req, res) => {
    res.sendFile('../client/build/index.html'); // path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
  });
}

app.listen( PORT, () => {
  console.log(`Find the server at port [${PORT}]`); // eslint-disable-line no-console
});
