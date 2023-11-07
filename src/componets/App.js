import PaintingList from './PaintingList';
import paintings from '../paintings';
import Section from './Section';
export default function App() {
  return (
    <div>
      <Section title="TOP Week">
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}

// {paintings.map(painting => (
//   <Painting
//     key={painting.id}
//     url={painting.url}
//     title={painting.title}
//     autorNameUrl={painting.author.url}
//     autorName={painting.author.tag}
//     price={painting.price}
//     quantity={painting.quantity}
//   />
// ))}
