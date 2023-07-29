import React, { useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { CategoryContext } from "../../contexts/CategoryContext";
import CategoryCard from "../../components/category-card/CategoryCard";

function Home() {
  const { categories } = useContext(CategoryContext);

  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      <div>
        <h2>Categories</h2>
        <div className="flex-row flex-wrap gap-1">
          {categories.map((eachCategory) => (
            <CategoryCard key={eachCategory._id} cardData={eachCategory} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
