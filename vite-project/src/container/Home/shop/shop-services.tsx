export const getCategories = async () => {
  const res = await fetch(`/api/categories`);
  const data = await res.json();
  return data;
};
