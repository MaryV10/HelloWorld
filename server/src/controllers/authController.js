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

async function update(req, res) {
  // const { id } = req.params;
  const { nickname, firstName, secondName} = req.body;
  const { user } = res.locals;
  console.log(req.body, '66666666666666666666666');
  console.log(user.id, 'useeeerIDD');
  try {
    if (nickname.trim() === "" || firstName.trim() === "" || secondName.trim() === "") {
      res.status(400).json({
        message: "Not update",
      });
    } else {
      console.log({nickname,
        firstName,
        secondName}, 'lllllllllllllllll');
        
      const updateUser = await userService.updateUser( user.id, {
        nickname,
        firstName,
        secondName
      });
      console.log(updateUser, 'updateUser');

      res.status(200).json({ updateUser });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getUser(req, res) {
  const { user } = res.locals;
  try {
      const updateUser = await userService.getUser( user.id);
      res.status(200).json({ updateUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  signUp,
  signIn,
  logout,
  update,
  getUser
};
