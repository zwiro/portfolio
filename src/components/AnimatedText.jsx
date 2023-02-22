import { motion } from "framer-motion"
import { useState } from "react"

function AnimatedText({ text }) {
  const [randomLetterIndexes, setRandomLetterIndexes] = useState([
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        duration: 1,
        delay: 1,
        when: "beforeChildren",
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="homepage__header"
    >
      {text.split("").map((character, i) => (
        <motion.span
          variants={item}
          key={`${character}-${i}`}
          className={
            randomLetterIndexes.includes(i) && i % 2 === 0
              ? "homepage__accent"
              : randomLetterIndexes.includes(i)
              ? "homepage__accent--blue"
              : ""
          }
        >
          {character}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText
