import express from 'express';

import {serverproduct,add_product_data_from_user,show_products,products_list,pro_list} from '../controller/firstcontroller'

const router = express.Router();

router.get('/add-product',serverproduct);
router.post("/add-product-data",add_product_data_from_user);
router.post('/show-product',show_products);
router.post('/product-list',products_list);
router.post('/pro-list',pro_list);
export default router;