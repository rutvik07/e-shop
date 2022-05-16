import express from 'express';
import { testControllerMethod,adduser,addproduct,userwithproduct,listallusers,pricerange,serverrendering,serverform,add_data_from_user,get_session,set_session,destroy_session,userdata} from "../controller/firstcontroller";

const router = express.Router();

router.get("/test-method",testControllerMethod);
router.post("/add-user",adduser);
router.post("/add-product",addproduct);
router.post("/user-product",userwithproduct);
router.post("/user-list",listallusers);
router.post("/product-price",pricerange);
router.get("/shop-cart",serverrendering)
router.get("/server-form",serverform)
router.post("/add-user-data",add_data_from_user);

router.get("/get-session",get_session);
router.get("/set-session/:name",set_session);
router.get("/destroy-session",destroy_session);
router.post("/user-data",userdata);





export default router;

