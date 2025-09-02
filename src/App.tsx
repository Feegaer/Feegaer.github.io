import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import LinkButton from "./components/LinkButton/LinkButton";

import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faBootstrap, faCss, faHtml5, faJs, faNodeJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {  

  const projects = [
    {
      title: "Página Web Corporativa - Exgadet S.A.",
      idYTVideo: "F_y3TdA1a1U",
      description: "Página Web Corporativa desarrollada para Exgadet S.A., actualmente sigue vigente y puede ser visitada.",
      iconos: [faPhp, faHtml5, faCss, faJs],
      href: "https://www.exgadetsa.com.ar"
    },
    {
      title: "Mensajería automatizada con Zenvia API",
      idYTVideo: "BKZ0EMLwMfY",
      iconos: [faNodeJs],
      description: "Mensajería automatizada desarrollada con la API de Zenvia la cual permite contactar a un usuario a través de WhatsApp, se utilizó para notificar a los clientes de tareas realizadas en el hogar una vez sido visitado el mismo por el operario."
    },
    {
      title: "Sistema de administración de documentos",
      idYTVideo: "QGLzzwJT1BU",
      iconos: [faReact, faJs, faHtml5, faCss, faBootstrap],
      description: "Sistema de administración de documentos desarrollado para poder visualizar una lista de archivos los cuales consistian en avisos hacia los clientes sobre desperfectos encontrados en la última visita realizada por una inspección o tarea realizada."
    }
  ]
  const renderProjects = projects.map((project) => (
    <div className="grid gap-2 bg-white/15 rounded-2xl p-4">
      <iframe
        className="w-full h-64 rounded-xl"
        src={`https://www.youtube.com/embed/${project.idYTVideo}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
      <header className="font-semibold">{project.title}</header>
      <p>{project.description}</p>
      <p>{project.iconos?.map(icon => <FontAwesomeIcon icon={icon}/>)}</p>
      {project.href && <a className="bg-white/90 w-fit p-2 px-4 text-black items-center justify-center flex rounded-md" target="_blank" href={project.href}>Visitar</a>}
    </div>
  ))

  return(
    <main className="grid gap-10 p-4">
      <Navbar />
      <Profile />
      <span className="grid gap-4 grid-cols-1 md:grid-cols-3 mx-auto">{renderProjects}</span>
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