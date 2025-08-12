import Card from "../Card/Card";
import type { ICard } from "../../interfaces/ICard";

export default function CardList({ cards }: { cards: any}) {
  
  if(!cards || !cards.length) return <span>There not exists cards to be loaded...</span>
  
  const mappedCards = cards.map((card: ICard, index: number) => (
    <Card
      title={card.title}
      subtitle={card.subtitle}
      image={card.image}
      description={card.description}
      buttonHref={card.buttonHref}
      buttonText={card.buttonText}
      buttonIcon={card.buttonIcon}
      key={index}
    />
  ))

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {mappedCards}
    </section>
  );
}