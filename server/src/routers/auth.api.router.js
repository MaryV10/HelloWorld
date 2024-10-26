const router = require('express').Router();
const { signUp, signIn, logout, update, getUser } = require('../controllers/authController');
const { verifyAccessToken } = require('../middlewares/verifyToken');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/logout', logout);
router.put('/',  verifyAccessToken, update);
router.get('/:id', verifyAccessToken, getUser);

module.exports = router;
