import express from 'express';
const router = express.Router();
//import products from '../data/products.js';
import Product from '../modules/productModel.js';
import { getProductByid, getProducts } from '../controllers/productController.js';

router.get('/', getProducts)
router.get('/:id', getProductByid)

export default router