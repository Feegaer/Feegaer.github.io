import type { ICard } from "../../interfaces/ICard";

export default function Card({id, imageUrl, title, description}: ICard) {

  if(!imageUrl) (imageUrl = "/public/image-solid-full.svg");

  return (
    <div className="mb-4 lg:mb-0 lg:me-4 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl border border-gray-400">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-75 object-cover"
        loading="lazy" 
      />
      <span className="block pt-0 p-4">
        <h2 className="text-xl font-bold mt-2">{title}</h2>
        <p className="text-gray-600 overflow-hidden max-h-[100px]">{description}</p>
        <a href="#" className="text-blue-500 hover:underline">Learn more</a>
      </span>
    </div>
  )
}