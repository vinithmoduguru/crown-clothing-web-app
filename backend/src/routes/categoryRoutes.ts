import express from "express";
import {
  getCategories,
  createCategory,
} from "../controllers/categoryController";

const router = express.Router();

// GET route to fetch all items
router.get("/", getCategories);
router.post("/", createCategory);

export default router;
