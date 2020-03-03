const router = require('express').Router();

router.use('/albums', require('./albums'));
router.use('/users', require('./users'));

module.exports = router;