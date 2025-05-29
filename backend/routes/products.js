import express from 'express';
import { getProductDetail, getProducts, newProduct, updateProduct, deleteProduct } from '../controllers/productControllers.js';
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/admin/products').post(newProduct);

router.route('/product/:id').get(getProductDetail);
router.route('/product/:id').put(updateProduct);
router.route('/product/:id').delete(deleteProduct);

export default router;
