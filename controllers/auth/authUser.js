const db = require('../../dataBase').getInstance();
const tokenizer = require('../../helpers/tokinazer');

module.exports = async (req, res, next) =>{
  try {
      const UserModel = db.getModel('user');
      const {email = '', password = ''} = req.body;
      if (!email || !password) {
          throw new Error('Some field is empty')
      }
      const isPresent = await UserModel.findOne({
          where: {
              email: email,
              password: password
          }
      });
      if (!isPresent) throw new Error('You are not register');
      const {id, name} = isPresent;
      const token = tokenizer({id, name});
      res.json({
          access: true,
          accessToken: token
      })
  }
  catch (e) {
    console.log(e);
      res.status(400).json({
          access: false,
          msg:e.message
      })
  }
};
