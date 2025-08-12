import "./App.css";

// ELIMINAR LINEA DE ABAJO DESPUÉS
import cards from "./components/Card/List";

import Image from "./components/Image/Image";
import LinkButton from "./components/LinkButton/LinkButton";
import ArticleText from "./components/ArticleText/ArticleText";

import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faFilePdf } from "@fortawesome/free-solid-svg-icons";

function App() {


  


  return(
    <main className="bg-gradient-to-r from-[#76030F] to-[#121B67] p-4">
      {/* Profile and biography */}
      <section className="col-span-1 grid grid-cols-1 gap-4">
        <span className="w-[110px] h-[110px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden bg-white/20 mx-auto">
          <Image/>
        </span>
        <ArticleText title="Cristian Ezequiel La Neve" subtitle="Fullstack Developer" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ex suscipit libero bibendum placerat. Nulla facilisi. Etiam placerat purus a luctus semper. Nam posuere ornare lacus, in commodo purus. Sed mattis ornare orci vel ultricies. Aliquam augue turpis, egestas sed mauris at, pharetra feugiat tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget commodo odio, viverra iaculis mauris. Vestibulum vel purus eget leo bibendum laoreet." />
        <LinkButton text="linkedin.com/in/ezelnv" icon ={faSquareLinkedin} href="https://www.linkedin.com/in/ezelnv/" />
        <LinkButton text="lanevecristianezequiel@gmail.com"  icon={faAt} href="mailto:lanevecristianezequiel@gmail.com" />
        <LinkButton text="CV (Español)" icon={faFilePdf}  href="/src/assets/CV_ES_CRISTIAN_EZEQUIEL_LA_NEVE.pdf" />
        <LinkButton text="CV (English)" icon={faFilePdf}  href="/src/assets/CV_EN_CRISTIAN_EZEQUIEL_LA_NEVE.pdf" /> 
      </section>
      
    </main>
  )
}

export default App;