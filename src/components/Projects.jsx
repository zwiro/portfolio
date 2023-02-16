import "../scss/projects.scss"
import { motion } from "framer-motion"
import recipebaseImage from "../assets/recipebase.png"
import todoAppImage from "../assets/todoapp.png"
import wordguesserImage from "../assets/wordguesser.png"
import otherImage from "../assets/github.png"
import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import Container from "./Container"
import { AiOutlineClose } from "react-icons/ai"

function Projects() {
  const projects = [
    {
      title: "Recipebase",
      description:
        "Fullstack application for browsing and sharing cooking recipes. Login credentials for logging in: email: test@test.com, password: test123.",
      techs: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary",
        "Tailwind",
        "Redux-Toolkit",
      ],
      link: "https://recipebase-7qn0.onrender.com/",
      image: recipebaseImage,
    },
    {
      title: "Wordguesser",
      description:
        "Word guessing game inspired by Wordle made in vanilla JavaScript.",
      techs: ["Vanilla JavaScript"],
      link: "https://zwiro.github.io/wordle-clone/",
      image: wordguesserImage,
    },
    {
      title: "Todo",
      description:
        "Todo App with dark mode made in React. Design from frontendmentor.io.",
      techs: ["React.js", "Sass"],
      link: "https://zwiro.github.io/todo-app/",
      image: todoAppImage,
    },
    {
      title: "More",
      description: "Check out my other projects on my github.",
      techs: [],
      link: "https://github.com/zwiro",
      image: otherImage,
    },
  ]

  const [activeCard, setActiveCard] = useState(null)

  const isDesktop = useMediaQuery("(min-width: 640px")

  const openCard = (clickedCard) => {
    if (activeCard !== null) {
      setActiveCard(null)
    } else setActiveCard(clickedCard)
  }

  return (
    <Container page="projects" title="My projects">
      <div
        className={`${!isDesktop && "projects__grid--mobile"} projects__grid`}
      >
        {projects.map((project, i) => (
          <motion.div
            layout
            key={`${project}-${i}`}
            className={`${
              activeCard === i
                ? "projects__project--active"
                : activeCard !== null && "projects__project--inactive"
            } projects__project`}
            onClick={() => openCard(i)}
          >
            <div className="projects__project-header">
              <p className="projects__project-title">{project.title}</p>
              {activeCard === i && (
                <AiOutlineClose
                  className="projects__project-close-btn"
                  onClick={openCard}
                />
              )}
            </div>
            {activeCard === i && (
              <p className="projects__techs">
                {project.techs.map((tech, i) => (
                  <span className="projects__tech" key={`${tech}-${i}`}>
                    {tech}
                  </span>
                ))}
              </p>
            )}
            <img
              src={project.image}
              alt="Project's image"
              className="projects__image"
            />
            {activeCard === i && (
              <>
                <p className="projects__description">{project.description}</p>
                <a className="projects__link" href={project.link}>
                  Visit site
                </a>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

export default Projects
