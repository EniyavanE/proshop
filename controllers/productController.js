import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../modules/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products)
    }
    catch (err) {

        res.status(404).send({ message: `error in fetching products ${err}` });
    }
});

const getProductByid = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) { return res.send(product) }
        res.status(404).send("product not found")
    }

    catch (err) {
        res.status(404).send({ message: `error in fetching the product ${err}` });
    }
}
);
export { getProductByid, getProducts }