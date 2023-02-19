import Name from "./Name"
import WebDeveloper from "./WebDeveloper"
import "../scss/home.scss"
import { BsFillArrowDownCircleFill } from "react-icons/bs"
import { motion } from "framer-motion"
import AnimatedText from "./AnimatedText"

function Home() {
  const box = {
    hidden: { scale: 0 },
    show: { scale: 1, rotate: 360 },
  }

  const paragraph = {
    hidden: { scale: 0 },
    show: { scale: 1 },
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
      <div className="homepage__bio">
        <AnimatedText text={"Hello world"} />
        <motion.h2
          variants={paragraph}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: 3 }}
          className="homepage__subheader"
        >
          My name is{" "}
          <span className="homepage__accent homepage__accent--name">
            Przemysław
          </span>{" "}
          and I'm an aspiring{" "}
          <span className="homepage__accent--blue">front-end developer</span>.
        </motion.h2>
        <motion.p
          variants={paragraph}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: 3.3 }}
          className="homepage__paragraph"
        >
          I'm coding mainly in{" "}
          <span className="homepage__accent--blue">React.js</span>.
        </motion.p>
        <motion.p
          variants={paragraph}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: 3.6 }}
          className="homepage__paragraph"
        >
          Currently I'm learning{" "}
          <span className="homepage__accent">TypeScript</span> and{" "}
          <span className="homepage__accent--blue">Next.js</span>
        </motion.p>
        <motion.p
          variants={paragraph}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: 3.9 }}
          className="homepage__paragraph"
        >
          <span className="homepage__accent">Scroll down</span> to learn more
          about me!
        </motion.p>
      </div>
      <BsFillArrowDownCircleFill className="homepage__arrow" />
    </section>
  )
}

export default Home
