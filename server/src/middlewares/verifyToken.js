const jwt = require('jsonwebtoken');

const verifyRefreshToken = (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    res.locals.user = user;

    next();
  } catch (error) {
    console.error('Invalid refresh token');
    res.sendStatus(400);
  }
};

const verifyAccessToken = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    res.locals.user = user;
    next();
  } catch (error) {
    console.error('Invalid access token');
    res.sendStatus(400);
  }
};

module.exports = {
  verifyRefreshToken,
  verifyAccessToken,
};
