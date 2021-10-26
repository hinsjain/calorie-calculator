import React from "react";
import ReactDOM from "react-dom";
import calorieData from "./data/calorie-data";
import FoodList from "./food-list";

import "./styles.css";

function TotalCalorie({ totalCalorie }) {
  return <h2>Your total calorie intake is {totalCalorie}</h2>;
}

function Heading({ heading }) {
  return <h1>{heading}</h1>;
}

function FoodTable({ calorieData, foodNameHandler }) {
  return calorieData
    .slice(0, 10)
    .map(({ name, measure, calories }) => (
      <FoodList
        key={name}
        name={name}
        measure={measure}
        calories={calories}
        onFoodNameClick={foodNameHandler}
      />
    ));
}

class App extends React.Component {
  state = {
    totalCalorie: 0
  };

  foodNameHandler = (totalCalorie) => {
    this.setState({ totalCalorie: this.state.totalCalorie + totalCalorie });
  };

  render() {
    return (
      <div className="App">
        <Heading heading={"Daily Calorie calculator"} />
        <FoodTable
          calorieData={calorieData}
          foodNameHandler={this.foodNameHandler}
        />
        <TotalCalorie totalCalorie={this.state.totalCalorie} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
