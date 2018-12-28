/*
userData
first (zeroth) user is seeded to db before testing (for all tests to use)
second user is not seeded and used to test creation
 */

module.exports = [{
  name: 'nik',
  email: 'n@e.com',
  password: 'interesting',
}, {
  name: 'francis',
  email: 'f@e.com',
  password: 'francispassword',
},
];
