import React from "react";
import categoriesJson from "./categories.json";
import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="categories-container">
      {categoriesJson.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
