const db = require('../../dataBase').getInstance();
// const Product = require('../../dataBase/models/product');

module.exports.getProduct = async(req, res) => {
    try {
        productModel = db.getModel('product');
        // const {user_id} = req.params;
        const product = await productModel.findAll(
            // user_id,
            {
                attributes: ['id', 'name', 'comment', 'price', 'image']
            });
        if (!product) throw new Error('Product is not found');
        res.json(product)
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

module.exports.create = async (req, res) =>{
  //   console.log(res.body);
  // const product = new Product({
  //     name: req.body.name,
  //     comment: req.body.comment,
  //     category: req.body.category,
  //     price: req.body.price,
  //     image: req.file ? req.file.path : ''
  // });
    try {
        const ProductModel = db.getModel('product');
        let {name, comment, image, price} = req.body;
        if(!name || !comment || !image || !price) throw new Error('Some field is empty');
        const insertedProduct = await ProductModel.create({
            name,
            comment,
            image,
            price,
        });

        res.json({
            success: true,
            msg: insertedProduct
        });

    } catch (e) {
        console.log(req.body);
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};
