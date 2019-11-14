const db = require('./../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const feedbackModel = db.getModel('feedback');
        const feedback = await feedbackModel.findAll({
            attributes:['name', 'comment']
        });
        if(!feedback) throw new Error('Feedback not found');
        res.json(feedback)
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};
