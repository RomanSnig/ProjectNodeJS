const db = require('../../dataBase').getInstance();

/**
 * This method using for....
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
module.exports.register = async (req, res) => {
    try {
        const UserModel = db.getModel('user');
        let {name, password, email} = req.body;
        if (!name || !password || !email) throw new Error('Some field is empty');

        const insertedUser = await UserModel.create({
            name,
            email,
            password,
        });

        res.json({
            success: true,
            msg: insertedUser
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};
