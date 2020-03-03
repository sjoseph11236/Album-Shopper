const { db, User, Album, Order, OrderItem } = require('../server/db');
const users = require('./data/user.json');
const albums = require('./data/album.json');
const orders = require('./data/order.json');
const orderItems = require('./data/orderItem.json');
const {green, red} = require('chalk');

const seed = async() => {
  await db.sync({force: true});
  
  await User.bulkCreate(users);
  await Album.bulkCreate(albums);
  await Order.bulkCreate(orders);
  await OrderItem.bulkCreate(orderItems);

  console.log(green('Seeding success!'));
  db.close();
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'));
    console.error(err);
    db.close();
  });