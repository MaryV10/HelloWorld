const router = require("express").Router();

const authRouter = require("./auth.api.router");
const tokenRouter = require("./token.api.router");


const placeRouter = require('./place.api.router');

const tagRouter = require("./tag.api.router");

const photoRouter = require("./photo.router");
const tagPlaceRouter = require("./tagPlace.api.router");


router.use("/tags", tagRouter);
router.use('/tokens', tokenRouter);
router.use('/places', placeRouter);

router.use("/auth", authRouter);
router.use('/photos', photoRouter);
router.use('/tagplace', tagPlaceRouter);


module.exports = router;
