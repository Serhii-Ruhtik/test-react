import React from "react";
import ReactDOM from "react-dom/client";
// import Card from "./components/Card";
// import Card from "./components/Card"; // Переконайтеся, що "Card" імпортується як "default"
import Card from "./components/Card"; // Переконайтеся, що ім'я 'Card' відповідає експорту в 'Card.jsx'

// import "./index.css";

// console.log(card);
ReactDOM.createRoot(document.getElementById("root")).render(<Card />);

// const p = <p id="test-id">I am P</p>;
// console.log(p);

// const div = (
//   <div id="test-id" name="main" className="test-class">
//     Hello world, {p}
//   </div>
// );

// console.log(div);

// ReactDOM.createRoot(document.getElementById("root")).render(card);
