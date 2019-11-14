const router = require('express').Router();
const controller = require('../controllers/user/createUser');
const feedback = require('../controllers/comments/feedback');
const createUser = require('../controllers/user/createUser');
const {changeName, changePassword, getAdmin} = require('../controllers/user/changeUserData');


router.post('/reg', controller.register);
router.post('/feedback', feedback.addFeedback);
router.post('/changePassword', changePassword);
router.post('/changeUserName', changeName);
router.post('/madeAdmin', getAdmin);

module.exports = router;
