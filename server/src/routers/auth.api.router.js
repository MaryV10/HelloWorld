const router = require('express').Router();
const { signUp, signIn, logout, checkEmail } = require('../controllers/authController');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/logout', logout);
// router.post('/checkEmail', checkEmail);

module.exports = router;
