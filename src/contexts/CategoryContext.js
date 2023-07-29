import { createContext, useState } from "react";
import { categoriesData } from "../db/categoriesData";

export const CategoryContext = createContext();

function CategoryContextProvider({ children }) {
  const [categories, setCategories] = useState(categoriesData);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;
