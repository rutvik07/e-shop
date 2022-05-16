import express from 'express';

import {server_category,addcategory,get_category} from '../controller/firstcontroller'

const router = express.Router();

router.get('/add-category',server_category)
router.post("/server-add-category",addcategory)
router.get("/server-get-category",get_category)

export default router;