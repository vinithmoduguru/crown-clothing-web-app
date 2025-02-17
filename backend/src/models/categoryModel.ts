import mongoose, { Schema, Model, InferSchemaType } from "mongoose";

const CategorySchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export type ICategory = InferSchemaType<typeof CategorySchema>;

const Category: Model<ICategory> = mongoose.model<ICategory>(
  "Category",
  CategorySchema
);

export default Category;
