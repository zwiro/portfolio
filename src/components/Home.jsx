import Name from "./Name"
import WebDeveloper from "./WebDeveloper"
import "../scss/home.scss"
import { BsFillArrowDownCircleFill } from "react-icons/bs"
import { motion } from "framer-motion"
import homepageImage from "../assets/remote-team.png"

function Home() {
  const box = {
    hidden: { scale: 0 },
    show: { scale: 1, rotate: 360 },
  }
  return (
    <section id="home" className="homepage">
      <div>
        <motion.div
          variants={box}
          transition={{ duration: 1 }}
          initial="hidden"
          animate="show"
          className="homepage__text-bg homepage__text-bg--primary"
        >
          <Name />
        </motion.div>
        <motion.div
          variants={box}
          transition={{ duration: 1.5 }}
          initial="hidden"
          animate="show"
          className="homepage__text-bg homepage__text-bg--secondary"
        >
          <WebDeveloper />
        </motion.div>
      </div>
      <img
        className="homepage__image"
        src={homepageImage}
        alt="People working on computers"
      />
      <BsFillArrowDownCircleFill className="homepage__arrow" />
    </section>
  )
}

export default Home
