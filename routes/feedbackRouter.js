const router = require('express').Router();

const getFeedback = require('./../controllers/comments/getFeedback');

router.get('/getFeedback', getFeedback);

module.exports = router;
