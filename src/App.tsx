import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import ProjectList from "./components/ProjectList/ProjectList";
import LinkButton from "./components/LinkButton/LinkButton";

import { faCircleDown } from "@fortawesome/free-regular-svg-icons";

function App() {  
  return(
    <main className="grid gap-10 p-4">
      <Navbar />
      <Profile />
      <ProjectList />
      <div className="grid gap-4 text-center">
        <header className="font-bold">Curriculum Vitae</header>
        <LinkButton
          href="https://drive.google.com/file/d/1fGA6TGc4aThNhSxQbayIbece7rZtQ0vM/view?usp=drive_link"
          text="Descargar"
          className="border-1 bg-[var(--tertiary-color)] hover:bg-[var(--tertiary-color)]/80 p-2 rounded-md font-semibold transition-colors"
          icon={faCircleDown}
        />
      </div>
    </main>
  )
}

export default App;