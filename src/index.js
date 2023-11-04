import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.json";
// import "./index.css";

const Card = () => {
  return data.map((photo) => {
    return (
      <div
        key={photo.id}
        className="card mx-auto my-2"
        style={{ width: "18rem" }}
      >
        <img src={photo.url} className="card-img-top" alt={photo.title} />
        <div className="card-body">
          <h5 className="card-title">Card title: {photo.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });
};
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
