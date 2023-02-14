import Name from "./Name"
import WebDeveloper from "./WebDeveloper"
import "../scss/home.scss"
import { BsFillArrowDownCircleFill } from "react-icons/bs"

function Home() {
  return (
    <section id="home" className="homepage">
      <div>
        <div className="homepage__text-bg homepage__text-bg--primary">
          <Name />
        </div>
        <div className="homepage__text-bg homepage__text-bg--secondary">
          <WebDeveloper />
        </div>
      </div>
      <img
        className="homepage__image"
        src="/src/assets/remote-team.png"
        alt="People working on computers"
      />
      <BsFillArrowDownCircleFill className="homepage__arrow" />
    </section>
  )
}

export default Home
