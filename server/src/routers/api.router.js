const router = require("express").Router();

const authRouter = require("./auth.api.router");
const tokenRouter = require("./token.api.router");


const placeRouter = require('./place.api.router');
const pendingPlacesRouter = require('./pendingPlace.api.router')

router.use('/tokens', tokenRouter);
router.use('/places', placeRouter);
router.use('/pendingPlaces', pendingPlacesRouter);
router.use("/auth", authRouter);



module.exports = router;
