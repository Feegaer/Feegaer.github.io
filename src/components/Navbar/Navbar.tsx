import LinkButton from "../LinkButton/LinkButton";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const socialMediaIconsStyle = "p-3.5 text-center rounded-full transition-colors bg-white text-[#ff0d5a] shadow-lg hover:text-[white] hover:bg-[#ff0d5a]"
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