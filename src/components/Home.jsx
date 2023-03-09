import Name from "./Name"
import WebDeveloper from "./WebDeveloper"
import "../scss/home.scss"
import { BsFillArrowDownCircleFill } from "react-icons/bs"
import { motion } from "framer-motion"
import AnimatedText from "./AnimatedText"

function Home() {
  const box = {
    show: {
      scale: [0, 0.5, 1.2, 1],
      rotate: 360,
    },
  }

  const paragraph = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  }
  return (
    <section id="home" className="homepage">
      <div>
        <motion.div
          drag
          dragSnapToOrigin={true}
          dragElastic={0.2}
          whileDrag={{ scale: 1.2 }}
          variants={box}
          transition={{ duration: 1 }}
          animate="show"
          className="homepage__text-bg homepage__text-bg--primary"
        >
          <Name />
        </motion.div>
        <motion.div
          drag
          dragSnapToOrigin={true}
          dragElastic={0.2}
          whileDrag={{ scale: 1.2 }}
          variants={box}
          transition={{ duration: 1.5 }}
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
          transition={{ duration: 1, delay: 4.5 }}
          className="homepage__subheader"
        >
          My name is{" "}
          <span className="homepage__accent homepage__accent--name">
            Przemysław
          </span>{" "}
          and I'm an aspiring{" "}
          <span className="homepage__accent--blue">front-end developer</span>
        </motion.h2>
        <motion.p
          variants={paragraph}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: 4.8 }}
          className="homepage__paragraph"
        >
          I'm coding mainly in{" "}
          <span className="homepage__accent--blue">React</span>
        </motion.p>
        <motion.p
          variants={paragraph}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: 5.1 }}
          className="homepage__paragraph"
        >
          Currently I'm learning{" "}
          <span className="homepage__accent">Next.js</span> and{" "}
          <span className="homepage__accent--blue">Redux</span>
        </motion.p>
        <motion.p
          variants={paragraph}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: 5.4 }}
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
