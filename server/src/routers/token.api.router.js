const router = require('express').Router();
const { verifyRefreshToken } = require('../middlewares/verifyToken');
const generateTokens = require('../utils/generateToken');
const cookiesConfig = require('../configs/cookiesConfig');

router.get('/refresh', verifyRefreshToken, (req, res) => {
  const { accessToken, refreshToken } = generateTokens({
    user: res.locals.user,
  });

  return res
    .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
    .json({ user: res.locals.user, accessToken });
});

module.exports = router;
