const cookiesConfig = require('../configs/cookiesConfig');
const userService = require('../services/userService');
const generateTokens = require('../utils/generateToken');



async function signUp(req, res) {
  const { nickname, firstName, secondName, email, password, avatarUrl } = req.body;

  if (!(nickname && firstName && email && password)) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const { user } = await userService.signUp(nickname, firstName, secondName, email, password, avatarUrl);
    const { accessToken, refreshToken } = generateTokens({ user });

    res
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .json({ user, accessToken });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}


async function signIn(req, res) {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const { user } = await userService.signIn(email, password);
    const { accessToken, refreshToken } = generateTokens({ user });

    res
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .json({ user, accessToken });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}


async function logout(req, res) {
  try {
    res.clearCookie('refreshToken').sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
}

module.exports = {
  signUp,
  signIn,
  logout,
};
