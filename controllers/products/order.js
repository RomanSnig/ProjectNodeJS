const db = require('../../dataBase/index').getInstance();

module.exports.createOrder = async (req, res) => {
    try {
        const orderModel = db.getModel('order');
        let {list, accommodation, totalPrice, user} = req.body;
        if (!list || !accommodation || !totalPrice) throw new Error('Some field is empty');
        const createdOrder = await orderModel.create({
            list,
            accommodation,
            totalPrice,
            user
        });
        res.json({
            success: true,
            msg: createdOrder
        })
    } catch (e) {
        console.log(e);
        console.log(req.body);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};
