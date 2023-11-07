const Painting = ({ url, title, autorNameUrl, autorName, price, quantity }) => {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={autorNameUrl}>{autorName}</a>
      </p>
      <p>Price: {price} credit</p>
      <p>quantity: {quantity < 10 ? 'закінчується' : 'є внаявності'} </p>
      <button type="butoon">add to cart</button>
    </div>
  );
};
export default Painting;
