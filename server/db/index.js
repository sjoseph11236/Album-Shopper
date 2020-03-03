const db = require('./db');
const User = require('./models/User');
const Album = require('./models/Album');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');

// associations go here
User.hasMany(Order);
Order.belongsTo(User);

Album.belongsToMany(Order, {through: OrderItem});
Order.belongsToMany(Album, {through: OrderItem});

module.exports = { 
  db,
  User,
  Album,
  Order, 
  OrderItem,
};