const db = require('./db');
const User = require('./models/User');
const Album = require('./models/Album');

// associations go here

module.exports = { 
  db,
  User,
  Album,
};