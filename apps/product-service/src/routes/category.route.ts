import { Router } from "express";
import { createCategory, deletepCategory, getCategories, updateCategory } from "../controllers/category.controller";

const router: Router = Router();

router.post("/", createCategory)
router.put("/:id", updateCategory); 
router.delete("/:id",deletepCategory); 
router.get("/", getCategories); 

export default router;
