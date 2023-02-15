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
        duration: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <section id="about" className="aboutpage">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="aboutpage__title-bg"
      >
        <span className="aboutpage__title">About me</span>
      </motion.div>
      <div className="aboutpage__text">
        <motion.div variants={container} initial="hidden" whileInView="show">
          <motion.p variants={item}>
            Self taught web <span className="aboutpage__accent">developer</span>{" "}
            with passion for coding.
          </motion.p>
          <motion.p variants={item}>
            Fast <span className="aboutpage__accent">learner</span> constantly
            involved in learning new things.
          </motion.p>
          <motion.p variants={item}>
            Hard working and ready to face any{" "}
            <span className="aboutpage__accent">challenge</span>.
          </motion.p>
          <motion.p variants={item}>
            Besides coding my hobby is looking into{" "}
            <span className="aboutpage__accent aboutpage__accent--blue">
              space
            </span>{" "}
            through an 8 inch tube.
          </motion.p>
        </motion.div>
        <div>
          <p className="aboutpage__skills">
            Some of the{" "}
            <span className="aboutpage__accent aboutpage__accent--blue">
              technologies
            </span>{" "}
            that i have been using in my projects are:
          </p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="aboutpage__techs"
          >
            {techs.map((tech, i) => (
              <Tilt key={`${tech}-${i}`} tiltReverse>
                <motion.div variants={item} className="aboutpage__tech">
                  <div className="aboutpage__tech-icon">{tech.icon}</div>
                  <span className="aboutpage__tech-name">{tech.name}</span>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
