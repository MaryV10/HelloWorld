const router = require("express").Router();

const authRouter = require("./auth.api.router");
const tokenRouter = require("./token.api.router");


const placeRouter = require('./place.api.router');
const photoRouter = require("./photo.router");


router.use('/tokens', tokenRouter);
router.use('/places', placeRouter);

router.use("/auth", authRouter);
router.use('/photos', photoRouter);



module.exports = router;
