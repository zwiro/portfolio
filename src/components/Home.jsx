import Name from "./Name"
import WebDeveloper from "./WebDeveloper"
import "../scss/home.scss"
import { BsFillArrowDownCircleFill } from "react-icons/bs"
import { Link } from "react-scroll"
import { motion } from "framer-motion"

function Home() {
  const box = {
    hidden: { scale: 0 },
    show: { scale: 1, rotate: 360, transition: { duration: 1 } },
  }
  return (
    <section id="home" className="homepage">
      <div>
        <motion.div
          variants={box}
          initial="hidden"
          animate="show"
          className="homepage__text-bg homepage__text-bg--primary"
        >
          <Name />
        </motion.div>
        <motion.div
          variants={box}
          initial="hidden"
          animate="show"
          className="homepage__text-bg homepage__text-bg--secondary"
        >
          <WebDeveloper />
        </motion.div>
      </div>
      <img
        className="homepage__image"
        src="/src/assets/remote-team.png"
        alt="People working on computers"
      />
      <Link to="about" smooth spy tabIndex={5}>
        <BsFillArrowDownCircleFill className="homepage__arrow" />
      </Link>
    </section>
  )
}

export default Home
