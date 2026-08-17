import React from "react";

const Categoty = [
  "Recipes",
  "Healthy Food",
  "Street Food",
  "Desserts",
  "Restaurant Reviews",
  "Drinks",
  "Breakfast & Snacks",
  "Vegetarian"
];

const CategotyList = () => {
  return (
    <>
      {Categoty.map((item) => (
        
        <p className="mb-2" key={item}>{item}</p>
      ))}
    </>
  );
};

export default CategotyList;
