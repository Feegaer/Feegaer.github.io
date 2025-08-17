import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap} from "@fortawesome/free-regular-svg-icons";

export default function Profile()
{
  return(  
    <section className="grid justify-center text-center items-center text-shadow-sm">
      <img 
        alt="Profile Pic" 
        src="/profile_pic.png"
        className="h-[180px] w-[180px] object-cover rounded-full mb-4 mx-auto border-[#ff0d5a] border-4"
      />
      <h6>Cristian Ezequiel La Neve</h6>
      <h6 className="font-bold">Fullstack Developer</h6>
      <p>
        <FontAwesomeIcon icon={faMap} />
        &nbsp;Buenos Aires, Argentina.
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        &nbsp;lanevecristianezequiel@gmail.com
      </p>
    </section>
  )
}