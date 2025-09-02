import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkButton from "../LinkButton/LinkButton";

type Card = {
  srcImage?: string,
  title: string,
  description: string,
  icons?: Array<any>,
  href: string,
  hrefInnerText?: string
}

export default function Card({srcImage, title, description, icons, href, hrefInnerText}: Card) {

  const mappedIcons = icons ? icons.map(icon => <FontAwesomeIcon icon={icon} />) : false;

  return(
    <div className="grid gap-4 p-10 text-black relative">
      <div className="bg-white/30 backdrop-blur-sm w-full h-full absolute z-1 rounded-xl" />
      
      
      <span className="z-2 grid gap-4">
      <img className="bg-image h-[200px] w-[200px] object-cover" src={srcImage} alt="Image of card" />
        <header className="font-bold text-white">{title}</header>
        <p className="h-max-24 overflow-auto text-white">{description}</p>
        {icons && <span className="flex gap-2">{mappedIcons}</span>}
        <LinkButton 
          className="p-2 px-4 w-fit text-center rounded-lg transition-colors bg-[var(--tertiary-color)] hover:bg-[var(--tertiary-color)]/70 text-white font-semibold" 
          text={hrefInnerText} 
          href={href}
        />
      </span>
    </div>
  )
}