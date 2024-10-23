const router = require('express').Router();

const tokenRouter = require('./token.api.router');

router.use('/tokens', tokenRouter);


module.exports = router;
