import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Image from "./components/Image/Image";
import LinkButton from "./components/LinkButton/LinkButton";

function App() {
  return (
    <>
    <div className="grid gap-2 p-4">
      <div className="w-98 h-98 flex">
        <Image/>
      </div>
      <div>
        <header className="text-2xl uppercase">Cristian Ezequiel La Neve</header>
        <p className="text-sm uppercase mb-3">Fullstack Developer</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt assumenda distinctio obcaecati repellat officiis magnam vero. Velit quis blanditiis minima temporibus alias, sunt at inventore ipsam ipsa sint, non pariatur!</p>
      </div>
      <LinkButton href="/src/assets/CV_ES_CRISTIAN_EZEQUIEL_LA_NEVE.pdf" icon={faFilePdf} text="Curriculum Vitae - Español" />
      <LinkButton href="/src/assets/CV_EN_CRISTIAN_EZEQUIEL_LA_NEVE.pdf" icon={faFilePdf} text="Curriculum Vitae - English" />
      <LinkButton href="https://www.linkedin.com/in/ezelnv/" icon={faLinkedinIn} text="LinkedIn" />
    </div>
    </>
  )
}

export default App;