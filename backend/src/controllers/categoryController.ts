import { Request, Response } from "express";
import Category from "../models/categoryModel";

// Get active categories
export const getCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories = await Category.find(
      { isActive: true },
      { title: 1, imageUrl: 1 }
    );
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Create a new category
export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, imageUrl }: { title: string; imageUrl: string } = req.body;
  try {
    const newCategory = await Category.create({ title, imageUrl });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
