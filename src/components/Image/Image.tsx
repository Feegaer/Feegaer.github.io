import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";

export default function Image({ url }: { url?: string }) {

  if (!url) {
    return (
      <div className="w-full h-full flex items-center justify-center border border-gray-600">
        <FontAwesomeIcon icon={faImage} fontSize={72} />
      </div>
    )
  }

  return <img 
          width="100%"
          height="100%"
          className="object-cover border border-gray-600"
          src={url} 
        />
}