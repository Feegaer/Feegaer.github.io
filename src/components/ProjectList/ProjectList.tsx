import Card from "../Card/Card";

export default function ProjectList({ cards }: { cards?: Array<any>}) {



  const mappedElements = cards ? cards.map((card, index) => (
    <Card
      title={card.title}
      description={card.description}
      icons={card.icons}
      href={card.href}
      hrefInnerText={card.hrefInnerText}
      key={index}
    />
  )) : <p className="text-center p-2 bg-white/30 rounded-md">No se han encontrado proyectos cargados aun...</p>;

  return(
    <div className="grid gap-4">
      <header className="font-bold text-center">Proyectos</header>
      {mappedElements}
    </div>
  )
}