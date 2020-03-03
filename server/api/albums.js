const router = require('express').Router();
const { Album } = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const albums = await Album.findAll();
    res.send(albums);
    
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;