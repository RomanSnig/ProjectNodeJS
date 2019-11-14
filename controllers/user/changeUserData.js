const db = require('../../dataBase').getInstance();
const {hashPassword} = require('../../helpers/passwordHasher');

module.exports.changePassword = async (req, res) =>{
    try {
        const userModel = db.getModel('user');
        let{password, id} = req.body;
        if (!password || !id) throw new Error('Some field is empty');
        // const {id} = req.user;
        const isPresent =  await userModel.findOne({
            where: {
                id: id,
            }
        });
        if (!isPresent) throw new Error('User is not Present');
        const hashedPass = hashPassword(password);
        await userModel.update({password: hashedPass},{where: {id}
        });
        res.json({
            success: true,
            msg: isPresent
            // msg: insertedUser
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};

module.exports.changeName = async (req, res) =>{
  try {
      const userModel = db.getModel('user');
      let {name, id} = req.body;
      if (!name || !id) throw new Error('Some field is empty');
      // const {id} = req.user;
      console.log(req.body)
      const isPresent =  await userModel.findOne({
          where: {
              id: id,
          }
      });
      if (!isPresent) throw new Error('User is not Present');
      await userModel.update({name}, {where: {id}});
      res.json({
          success: true,
          msg: isPresent
          // msg: insertedUser
      });
  }  catch (e) {
      console.log(e);
      res.status(400).json({
          success: false,
          msg: e.message
      })
  }
};

module.exports.getAdmin = async (req, res) =>{
    try {
        const userModel = db.getModel('user');
        let {code, id} = req.body;
        if (!code || !id) throw new Error('Some field is empty');
        const isPresent =  await userModel.findOne({
            where: {
                id: id,
            }
        });
        if (!isPresent) throw new Error('User is not Present');
        
        if(code !== id) throw new Error('no!!!');
        await userModel.update({status: 'admin'}, {where: {id}});
        res.json({
            success: true,
            // msg: isPresent
            // msg: insertedUser
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};
