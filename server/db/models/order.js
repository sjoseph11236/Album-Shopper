const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM(
      'INCOMPLETE',
      'COMPLETE'
    ),
    allowNull: false,
    defaultValue: 'INCOMPLETE'
  },
});

module.exports = Order; 