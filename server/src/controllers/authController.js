const cookiesConfig = require('../configs/cookiesConfig');
const userService = require('../services/userService');
const generateTokens = require('../utils/generateToken');
// const axios = require('axios');


// ====================== i dont haveAccount on HUNTER.IO
// async function checkEmail(req, res) {
//   const { email } = req.body;

//   if (!email) {
//     return res
//       .status(400)
//       .json({ exists: false, message: 'Email is required' });
//   }
 //   try {
//     const { data } = await axios.get(
//       `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${process.env.HUNTER_IO_API_KEY}`
//     );

//     if (data.data && data.data.result === 'undeliverable') {
//       return res.status(200).json({ exists: false });
//     }

//     return res.status(200).json({ exists: true });
//   } catch (error) {
//     console.log('Error checking email', error);
//     return res
//       .status(500)
//       .json({ exists: false, message: 'Internal Server Error' });
//   }
// }



async function signUp(req, res) {
  const { nickname, firstName, secondName, email, password, avatarUrl } = req.body;

  if (!(nickname && email && password)) {
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
