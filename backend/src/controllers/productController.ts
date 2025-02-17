import { Request, Response } from "express";
import Product, { IProduct } from "../models/productModel";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Get category from request query params
    const categoryId = req.query.categoryId as string;
    const filter: any = { isActive: true };
    if (categoryId) {
      filter.categoryId = categoryId;
    }
    const products = await Product.find(filter, {
      title: 1,
      description: 1,
      price: 1,
      imageUrl: 1,
      categoryId: 1,
    }).populate("categoryId", "title");
    // Add Category title to each product
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, description, price, imageUrl, categoryId }: Partial<IProduct> =
    req.body;
  try {
    const newProduct = await Product.create({
      title,
      description,
      price,
      imageUrl,
      categoryId,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};


export const createBulkProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { products, categoryId } = req.body;
  const sanitisedProducts = products.map((product: any) => ({
    title: product.name,
    imageUrl: product.imageUrl,
    price: product.price,
    categoryId: categoryId
  }))
  try {
    const newProducts = await Product.insertMany(sanitisedProducts);
    res.status(201).json(newProducts);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};