import express from "express";
import { getCustomers,getCustomer,addCustomer,updateCustomer } from "../controllers/customerController.js";


const router = express.Router();

router.get("/", getCustomers);
router.get("/:id", getCustomer);
router.post("/add", addCustomer);
router.put("/:id", updateCustomer);



export default router;