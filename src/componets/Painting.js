const Painting = ({ url, title, autorNameUrl, autorName, price }) => {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={autorNameUrl}>{autorName}</a>
      </p>
      <p>Price: {price} credit</p>
      <p>availability: закінчується або є в наявності </p>
      <button type="butoon">add to cart</button>
    </div>
  );
};
export default Painting;
