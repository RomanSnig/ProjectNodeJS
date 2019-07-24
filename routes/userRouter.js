const router = require('express').Router();
const controller = require('../controllers/user/createUser');
const createUser = require('../controllers/user/createUser');


router.post('/reg', controller.register)

module.exports = router;
