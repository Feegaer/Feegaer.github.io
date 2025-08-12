import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function LinkButton({ href, icon, text, className }: {href?: string, icon: any, text?: string, className?: string }) {
  return (
    <a 
      className={className} 
      href={href} 
      target="_blank">
        {icon && <FontAwesomeIcon icon={icon} />}
        <span className="ms-2">{text || ""}</span>
    </a>
  )
}