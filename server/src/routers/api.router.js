const router = require('express').Router();

const tokenRouter = require('./token.api.router');

const placeRouter = require('./place.api.router');

router.use('/tokens', tokenRouter);
router.use('/games', placeRouter);


module.exports = router;
