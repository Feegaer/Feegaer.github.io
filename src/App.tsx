import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import ProjectList from "./components/ProjectList/ProjectList";
import LinkButton from "./components/LinkButton/LinkButton";

import { faCircleDown } from "@fortawesome/free-regular-svg-icons";

function App() {  
  return(
    <main className="grid gap-10 p-4 bg-[url(/src/assets/bg_pattern_topographic.webp)]">
      <Navbar />
      <Profile />
      <ProjectList />
      <div className="grid gap-4 text-center">
        <header className="font-bold">Curriculum Vitae</header>
        <LinkButton
          href="/src/assets/CV_ES_CRISTIAN_EZEQUIEL_LA_NEVE.pdf"
          text="Descargar"
          className="border-2 bg-[#ff0d5a] p-2 rounded-md font-semibold"
          icon={faCircleDown}
        />
      </div>
    </main>
  )
}

export default App;