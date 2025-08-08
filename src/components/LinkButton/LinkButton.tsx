import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function LinkButton({ href, icon, text }: {href?: string, icon: any, text: string }) {
  return (
    <a 
      className="border p-2 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors" 
      href={href} 
      target="_blank">
        {icon && <FontAwesomeIcon icon={icon} />}
        <span className="ms-2">{text}</span>
    </a>
  )
}