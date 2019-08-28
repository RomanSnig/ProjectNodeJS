const router = require('express').Router();
const checkToken = require('../middlewares/checkToken');

const authUser = require('../controllers/auth/authUser');
const refreshToken = require('../controllers/user/refreshToken');

router.post('/log', authUser);// ++++++++++++++++++++++++++
router.post('/refresh', refreshToken);

module.exports = router;
