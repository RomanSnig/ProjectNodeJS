const router = require('express').Router();

const authUser = require('../controllers/auth/authUser');

 router.post('/log', authUser); // ++++++++++++++++++++++++++

module.exports = router;
