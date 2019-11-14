const db = require('../../dataBase').getInstance();
const tokenizer = require('../../helpers/tokinazer');
const {checkHashPassword} = require('../../helpers/passwordHasher');

module.exports = async (req, res) =>{
  try {
      const UserModel = db.getModel('user');
      const {email = '', password = ''} = req.body;
      if (!email || !password) {
          throw new Error('Some field is empty')
      }
      const isPresent = await UserModel.findOne({
          where: {
              email: email,
              // password: password
          }
      });
      if (!isPresent) throw new Error('You are not register');
      // const passwordChecker = await UserModel.findOne({
      //    where: {
      //        email,
      //        password
      //    }
      // });
      // if (!passwordChecker) throw new Error('Password is wrong');
      // const {id, name, password: hashPassword} = isPresent;
      const {id, name, password: hashPassword} = isPresent;

      const isPassOK = await checkHashPassword(password, hashPassword);
      if (!isPassOK) throw new Error('Password is wrong');

      const token = tokenizer({id, name});
      delete isPresent.dataValues.password;
      // const token = {id, name};
      // res.json(passwordChecker);
      res.json({
          access: true,
          msg: token,
          user: isPresent
      })
      // res.json(token)
  }
  catch (e) {
    console.log(e);
      res.status(400).json({
          access: false,
          msg:e.message
      })
  }
};

// module.exports = async (req, res) =>{
//     try {
//         const UserModel = db.getModel('user');
//         const {email = '', password = ''} = req.body;
//         if (!email || !password) {
//             throw new Error('Some field is empty')
//         }
//
//         // const token = ();
//         const isPresent = await UserModel.findOne({
//             where: {
//                 email: email,
//                 // password: password
//             }
//         });
//         if (!isPresent) throw new Error('You are not register');
//         // const passwordChecker = await UserModel.findOne({
//         //    where: {
//         //        email,
//         //        password
//         //    }
//         // });
//         // if (!passwordChecker) throw new Error('Password is wrong');
//         // const {id, name, password: hashPassword} = isPresent;
//         const {id, name, password: hashPassword} = isPresent;
//
//         const isPassOK = await checkHashPassword(password, hashPassword);
//         if (!isPassOK) throw new Error('Password is wrong');
//
//         const token = tokenizer({id, name});
//         // res.json(passwordChecker);
//         res.json({
//             access: true,
//             accessToken: token
//         })
//     }
//     catch (e) {
//         console.log(e);
//         res.status(400).json({
//             access: false,
//             msg:e.message
//         })
//     }
// };

