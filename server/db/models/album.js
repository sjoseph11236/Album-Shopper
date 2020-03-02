const Sequelize = require('sequelize');
const db = require('../db');

const Album = db.define('album', { 
  name: { 
    type: Sequelize.STRING,
    allowNull: false, 
    validate: {
      notEmpty: true
    }
  },
  price:{
    type: Sequelize.INTEGER,
    defaultValue: 0, 
    allowNull: false,
    validate: { 
      min: 0,
      isInt: true
    }
  },
  artist: { 
    type: Sequelize.STRING,
    allowNull: false, 
    validate: {
      notEmpty: true
    }
  },
  description: { 
    type: Sequelize.TEXT,
    allowNull: true, 
  }, 
  imageUrl: { 
    type: Sequelize.STRING,
    allowNull: true, 
    defaultValue: 'https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/'
  } 
});

module.exports = Album;