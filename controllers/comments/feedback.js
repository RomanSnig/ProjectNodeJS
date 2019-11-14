const db = require('../../dataBase/index').getInstance();

module.exports.addFeedback = async (req, res) => {
  try {
      const commentsModel = db.getModel('feedback');
      let {name, comment, userId} = req.body;
      if (!name || !comment || !userId) throw new Error('Some field is empty');
      const createdFeedback = await commentsModel.create({
          name,
          comment,
          userId,
      });
      res.json({
          success: true,
          msg: createdFeedback
      });
      console.log(req.body)
  }  catch (e) {
      console.log(e);
      console.log(req.body);
      res.status(400).json({
          success: false,
          msg: e.message
      })
  }
};
