const jwtConfig = require('./jwtConfig');

module.exports = {
  access: {
    maxAge: jwtConfig.access.expireIn,
    httpOnly: true,
  },
  refresh: {
    maxAge: jwtConfig.refresh.expireIn,
    httpOnly: true,
  },
};
