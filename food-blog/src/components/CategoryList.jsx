import React from "react";

const Category = [
  "Recipes",
  "Healthy Food",
  "Street Food",
  "Desserts",
  "Restaurant Reviews",
  "Drinks",
  "Breakfast & Snacks",
  "Vegetarian",
];

const CategoryList = () => {
  return (
    <>
      {Category.map((item) => (
        <option className="mb-2" key={item}>
          {item}
        </option>
      ))}
    </>
  );
};

export default CategoryList;
