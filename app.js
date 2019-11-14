const express = require('express');
const bodyPurser = require('body-parser');
const app = express();

const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');
const getById = require('./controllers/user/getById');
const pizzas = require('./controllers/products/pizzas');
const feedback = require('./routes/userRouter');
const pizza = require('./routes/productRouter');
const getFeedback = require('./routes/feedbackRouter');
const order = require('./routes/productRouter');

const cors = require('cors');
app.use(cors());

const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

app.use(bodyPurser.json());
app.use(bodyPurser.urlencoded({extended: true}));


app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/user', feedback);
app.use('/product', pizza);
app.use('/user', getFeedback);
app.use('/product', pizza);
app.use('/uploads', express.static('uploads'));
app.use('/order', order);
app.get('/userId/:user_id', getById);
app.get('/pizzas', pizzas.getProduct);

app.get('/', (req, res, next) =>{
    res.end('Good');
});
app.use('*', (req, res) => {
    res.status(404).json('Page not found')
});
 app.listen(3000, () =>{
     console.log('OK');
 });
