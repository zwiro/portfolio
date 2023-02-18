import "../scss/about.scss"
import { IoLogoSass, IoLogoNodejs } from "react-icons/io"
import {
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiReact,
  SiJavascript,
} from "react-icons/si"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import Container from "./Container"

function About() {
  const techs = [
    {
      name: "JavaScript",
      icon: <SiJavascript fill="#F7DF1E" />,
    },
    {
      name: "React.js",
      icon: <SiReact fill="#61DAFB" />,
    },
    {
      name: "Node.js",
      icon: <IoLogoNodejs fill="#43853D" />,
    },
    {
      name: "Sass",
      icon: <IoLogoSass fill="#BF4080" />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss fill="#38BDF8" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb fill="#00ED64" />,
    },
    {
      name: "Redux",
      icon: <SiRedux fill="#ba8fff" />,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  }

  const paragraph = {
    hidden: { x: "-150%" },
    show: { x: "0" },
  }

  return (
    <Container page="about" title="About me">
      <div className="about__text">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p variants={paragraph}>
            Self taught web <span className="about__accent">developer</span>{" "}
            with passion for coding 💻
          </motion.p>
          <motion.p variants={paragraph}>
            Fast <span className="about__accent">learner</span> dedicated to
            learning new things 👨‍🏫
          </motion.p>
          <motion.p variants={paragraph}>
            Hard working and ready to face any{" "}
            <span className="about__accent">challenge</span> 🥊
          </motion.p>
          <motion.p variants={paragraph}>
            Besides coding my hobby is looking into{" "}
            <span className="about__accent about__accent--blue">space</span>{" "}
            through an 8 inch tube 🔭
          </motion.p>
        </motion.div>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="about__skills"
          >
            Some of the{" "}
            <span className="about__accent about__accent--blue">
              technologies
            </span>{" "}
            that i have been using in my projects are:
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="about__techs"
          >
            {techs.map((tech, i) => (
              <Tilt key={`${tech}-${i}`} tiltReverse>
                <motion.div variants={item} className="about__tech">
                  <div className="about__tech-icon">{tech.icon}</div>
                  <span className="about__tech-name">{tech.name}</span>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  )
}

export default About
