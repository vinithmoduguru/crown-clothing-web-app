import express from "express";
import { getProducts, createProduct, createBulkProducts, deleteProduct } from "../controllers/productController";

const router = express.Router();

// GET route to fetch all items
router.get("/", getProducts);
router.post("/", createProduct);
router.post("/bulk", createBulkProducts);
router.delete("/:id", deleteProduct);

export default router;
