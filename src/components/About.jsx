import "../scss/about.scss"
import { IoLogoSass } from "react-icons/io"
import {
  SiTailwindcss,
  SiRedux,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPrisma,
  SiNextdotjs,
  SiFirebase,
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
      name: "React",
      icon: <SiReact fill="#61DAFB" />,
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
      name: "Redux",
      icon: <SiRedux fill="#ba8fff" />,
    },
    { name: "TypeScript", icon: <SiTypescript fill="#3178c6" /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Firebase", icon: <SiFirebase fill="#FFCA28" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    {
      name: "tRPC",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          fill="#398ccb"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>tRPC</title>
          <path d="M24 12c0 6.62-5.38 12-12 12S0 18.62 0 12 5.38 0 12 0s12 5.38 12 12ZM1.21 12A10.78 10.78 0 0 0 12 22.79 10.78 10.78 0 0 0 22.79 12 10.78 10.78 0 0 0 12 1.21 10.78 10.78 0 0 0 1.21 12Zm10.915-6.086 2.162 1.248a.25.25 0 0 1 .125.217v1.103l2.473 1.428a.25.25 0 0 1 .125.217v2.355l.955.551a.25.25 0 0 1 .125.217v2.496a.25.25 0 0 1-.125.217l-2.162 1.248a.25.25 0 0 1-.25 0l-.956-.552-2.472 1.427a.25.25 0 0 1-.25 0l-2.472-1.427-.956.552a.25.25 0 0 1-.25 0l-2.162-1.248a.25.25 0 0 1-.125-.217V13.25a.25.25 0 0 1 .125-.217l.955-.551v-2.355a.25.25 0 0 1 .125-.217l2.473-1.428V7.38a.25.25 0 0 1 .125-.217l2.162-1.248a.25.25 0 0 1 .25 0Zm1.268 10.049a.25.25 0 0 1-.125-.217V13.25a.25.25 0 0 1 .125-.217l2.16-1.248a.25.25 0 0 1 .25 0l.707.408v-1.922l-2.098-1.21v.814a.25.25 0 0 1-.125.217l-2.162 1.248a.25.25 0 0 1-.25 0l-2.162-1.248a.25.25 0 0 1-.125-.217V9.06L7.49 10.271v1.922l.707-.408a.25.25 0 0 1 .25 0l2.16 1.248a.25.25 0 0 1 .125.217v2.496a.25.25 0 0 1-.125.217l-.705.408L12 17.582l2.098-1.211ZM10.088 9.73l1.662.96V8.766l-1.662-.955Zm3.824 0V7.811l-1.662.955v1.924ZM12 6.418l-1.66.96 1.66.954 1.66-.954Zm-5.59 9.184 1.66.958v-1.921l-1.66-.956Zm3.822 0v-1.92l-1.662.957v1.923Zm-1.91-3.311-1.662.96 1.661.955 1.66-.956Zm5.446 3.31 1.66.96v-1.922l-1.66-.956Zm3.822 0v-1.918l-1.662.956v1.922Zm-1.912-3.31-1.66.96 1.66.955 1.66-.956Z" />
        </svg>
      ),
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
              <motion.div key={`${tech}-${i}`} variants={item}>
                <Tilt tiltReverse>
                  <motion.div className="about__tech">
                    <div className="about__tech-icon">{tech.icon}</div>
                    <span className="about__tech-name">{tech.name}</span>
                  </motion.div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  )
}

export default About
