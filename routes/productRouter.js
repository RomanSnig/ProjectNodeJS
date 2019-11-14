const router = require('express').Router();
const upload = require('../middlewares/upload');

const pizzas = require('../controllers/products/pizzas');
const soccet = require('../controllers/products/order');

router.get('/pizzas', pizzas.getProduct);
router.post('/uploadProduct', upload.single('image'), pizzas.create);
router.post('/createOrder', soccet.createOrder);

module.exports = router;
