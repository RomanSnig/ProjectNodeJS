const db = require('../../dataBase').getInstance();

module.exports = async(req, res) => {
    try {
        userModel = db.getModel('user');
        // const {user_id} = req.params;
        const user = await userModel.findAll(
            // user_id,
            {
                attributes: ['id', 'name', 'email']
            });
        if (!user) throw new Error('User is not found');
        res.json(user)
        // {
        //     success: true,
        //     msg: user
        // })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: e.message,
        });
        console.log(e)
    }
};
