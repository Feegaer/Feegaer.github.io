import LinkButton from "../LinkButton/LinkButton";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const socialMediaIconsStyle = "p-2 px-3 text-center rounded-lg transition-colors bg-[var(--white)] text-[var(--tertiary-color)] hover:text-[var(--white)] hover:bg-[var(--tertiary-color)] hover:scale-[1.15] transition-color"
  return (
    <nav>
      <div className="flex justify-center gap-3">
        <LinkButton icon={faEnvelope} className={socialMediaIconsStyle} href="mailto:lanevecristianezequiel@gmail.com" />
        <LinkButton icon={faLinkedinIn} className={socialMediaIconsStyle} href="https://www.linkedin.com/in/ezelnv" />
        <LinkButton icon={faGithubAlt} className={socialMediaIconsStyle} href="https://www.github.com/Feegaer" />
      </div>
    </nav>
  )
}