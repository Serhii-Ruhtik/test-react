import Painting from './Painting';
import paintings from '../paintings';
export default function App() {
  return (
    <div>
      <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        autorName={paintings[0].author.url}
        autorNameUrl={paintings[0].author.tag}
        price={paintings[0].price}
      />

      <Painting
        url={paintings[1].url}
        title={paintings[1].title}
        autorName={paintings[1].author.url}
        autorNameUrl={paintings[1].author.tag}
        price={paintings[1].price}
      />

      <Painting
        url={paintings[2].url}
        title={paintings[2].title}
        autorName={paintings[2].author.url}
        autorNameUrl={paintings[2].author.tag}
        price={paintings[2].price}
      />
    </div>
  );
}
