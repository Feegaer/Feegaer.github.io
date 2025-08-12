import Image from "../Image/Image";
import ArticleText from "../ArticleText/ArticleText";
import LinkButton from "../LinkButton/LinkButton";

import type { ICard } from "../../interfaces/ICard";

export default function Card({ image, title, subtitle, description, buttonHref, buttonText, buttonIcon}: ICard) {
  return (
    <div className="relative p-4 rounded-xl grid gap-4">
      <div className="rounded-xl absolute inset-0 bg-white/20 backdrop-blur-md z-0"></div>

      <span className="rounded-md flex overflow-hidden z-1">
        <Image url={image} />
      </span>
      <ArticleText
        title={title}
        subtitle={subtitle}
        text={description}
      />
      <LinkButton
        className="border p-2 rounded-md text-center z-1 hover:bg-gradient-to-r from-[#76030F] to-[#121B67]"
        href={buttonHref}
        text={buttonText}
        icon={buttonIcon}
      />
    </div>
  )
}