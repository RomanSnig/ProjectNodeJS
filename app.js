const express = require('express');
const bodyPurser = require('body-parser');
const app = express();

const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');

const cors = require('cors');
app.use(cors());

const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

app.use(bodyPurser.json());
app.use(bodyPurser.urlencoded({extended: true}));


app.use('/user', userRouter);
app.use('/auth', authRouter);

app.get('/', (req, res, next) =>{
    res.end('Good');
});
app.use('*', (req, res) => {
    res.status(404).json('Page not found')
});
 app.listen(3000, () =>{
     console.log('OK');
 });
