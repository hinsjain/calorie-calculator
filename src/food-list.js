import React from "react";

function FoodList({ name, measure, calories, onFoodNameClick }) {
  return (
    <div onClick={() => onFoodNameClick(calories)}>
      <span> {name} </span>
      <span> {measure} </span>
      <span> {calories} </span>
    </div>
  );
}

export default FoodList;
