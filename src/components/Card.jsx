import data from "../data.json";
// import Head from "./Head";
import Head from "./Head"; // Переконайтеся, що "Head" імпортується як "default"

export const Card = () => {
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
          <Head id="id123" clas="card-title" />
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });
};
