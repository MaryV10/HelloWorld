const router = require('express').Router();

const tokenRouter = require('./token.api.router');

const placeRouter = require('./place.api.router');
const pendingPlacesRouter = require('./pendingPlace.api.router')

router.use('/tokens', tokenRouter);
router.use('/places', placeRouter);
router.use('/pendingPlaces', pendingPlacesRouter);


module.exports = router;
