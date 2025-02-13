import { Route, Routes } from "react-router";
import CategoriesPreview from "../../categories-preview/categories-preview";
import Category from "../../category/category";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
