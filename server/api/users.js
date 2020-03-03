const router = require('express').Router();
const { User } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    // Check if req. has admin privileges
    const users = await User.findAll({
      attributes: ['id', 'email']
    });
    
    res.send(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;