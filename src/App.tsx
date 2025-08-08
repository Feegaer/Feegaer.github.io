import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";


function App() {
  return (
    <>
    <div className="grid gap-4 p-4">
      <div className="w-98 h-98 flex">
        <img 
          width="100%"
          height="100%"
          className="object-cover border border-gray-600"
          src="" 
        />
      </div>
      <div>
        <header className="text-2xl uppercase">Cristian Ezequiel La Neve</header>
        <p className="text-sm uppercase mb-3">Fullstack Developer</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt assumenda distinctio obcaecati repellat officiis magnam vero. Velit quis blanditiis minima temporibus alias, sunt at inventore ipsam ipsa sint, non pariatur!</p>
      </div>
      <a className="border p-2" href="/src/assets/CV_ES_CRISTIAN_EZEQUIEL_LA_NEVE.pdf" target="_blank">
        <FontAwesomeIcon icon={faFilePdf} />
        <span className="ms-2">Curriculum Vitae - Español</span>
      </a>
      <a className="border p-2" href="/src/assets/CV_EN_CRISTIAN_EZEQUIEL_LA_NEVE.pdf" target="_blank">
        <FontAwesomeIcon icon={faFilePdf} />
        <span className="ms-2">Curriculum Vitae - English</span>
      </a>
      <a className="border p-2" href="https://www.linkedin.com/in/ezelnv/" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} />
        <span className="ms-2">LinkedIn</span>
      </a>
    </div>
    </>
  )
}

export default App;