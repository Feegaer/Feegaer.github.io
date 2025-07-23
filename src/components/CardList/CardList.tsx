import Card from "../Card/Card";
import type { ICard } from "../../interfaces/ICard";

export default function CardList({ cards }: { cards: Array<ICard> }) {

  if (!cards || cards.length === 0) {
    return <div className="text-center">No cards available</div>;
  }

  const render = cards.map((card, index) => (
    <Card 
      id={card.id}
      key={`card-${index}`}
      title={card.title}
      description={card.description}
      imageUrl={card.imageUrl}
    />
  ))

  return (
    <div className="p-4 block lg:flex">{render}</div>
  )
}