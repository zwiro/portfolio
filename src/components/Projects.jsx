import "../scss/projects.scss"
import { motion } from "framer-motion"
import recipebaseImage from "../assets/recipebase.png"
import todoAppImage from "../assets/todoapp.png"
import remindImage from "../assets/remind.png"
import wordguesserImage from "../assets/wordguesser.png"
import reshopImage from "../assets/reshop.png"
import kanbunnyImage from "../assets/kanbunny.png"
import otherImage from "../assets/github.png"
import { useEffect, useState } from "react"
import Container from "./Container"
import { AiOutlineClose } from "react-icons/ai"

function Projects() {
  const projects = [
    {
      title: "Recipebase",
      description:
        "My fullstack application for browsing and sharing cooking recipes. It was made using MERN stack, Redux-Toolkit and styled with Tailwind. User can sign up, sign in and then perform CRUD operations on recipes. \nCredentials for logging in: \nemail: test@test.com, password: test123",
      shortDescription:
        "Fullstack application for browsing and sharing cooking recipes.",
      techs: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary",
        "Tailwind",
        "Redux-Toolkit",
      ],
      link: "https://recipebase-7qn0.onrender.com/",
      repo: "https://github.com/zwiro/mern-app-recipebase",
      image: recipebaseImage,
    },
    {
      title: "kanbunny",
      description:
        "My fullstack application for creating kanban boards. I made it with Next.js, tRPC, Prisma and styled with Tailwind. User can sign up via GitHub, and then create projects, boards, lists, tasks and invite other users to cooperate.",
      shortDescription: "Fullstack application for creating kanban boards.",
      techs: [
        "React",
        "TypeScript",
        "Next.js",
        "Next-Auth",
        "Prisma",
        "tRPC",
        "Tailwind",
      ],
      link: "https://kanbunny.vercel.app/",
      repo: "https://github.com/zwiro/kanbunny",
      image: kanbunnyImage,
    },
    {
      title: "Remind",
      description:
        "Calendar planning app made with React and TypeScript. It allows user to create, edit and delete events that are assigned to a date picked from the calendar. It has also light/dark theme switcher and prefered theme is saved to the local storage.",
      shortDescription: "Calendar Planning App made with React and TypeScript.",
      techs: [
        "React",
        "TypeScript",
        "Tailwind",
        "Redux-Toolkit",
        "Redux-Persist",
        "Framer-Motion",
      ],
      link: "https://zwiro.github.io/remind-calendar-app/",
      repo: "https://github.com/zwiro/remind-calendar-app",
      image: remindImage,
    },
    // {
    //   title: "Wordguesser",
    //   description:
    //     "Wordle clone made in vanilla JavaScript. User types 5 letter words and then gets a feedback: yellow color means the letter is present in word but isn't on proper position and green color indicates that letter is correctly positioned.",
    //   shortDescription: "Wordle clone made in vanilla JavaScript.",
    //   techs: ["JavaScript"],
    //   link: "https://zwiro.github.io/wordle-clone/",
    //   repo: "https://github.com/zwiro/wordle-clone",
    //   image: wordguesserImage,
    // },
    // {
    //   title: "Todo",
    //   description:
    //     "Todo App made in React. User can add, delete and check elements on the list. Also the theme can be switched between light and dark mode. Design and challenge from frontendmentor.io.",
    //   shortDescription: "Todo App made in React.",
    //   techs: ["React", "Sass"],
    //   link: "https://zwiro.github.io/todo-app/",
    //   repo: "https://github.com/zwiro/todo-app",
    //   image: todoAppImage,
    // },
    // {
    //   title: "Reshop",
    //   description:
    //     "Shopping app made with React and TypeScript. The products are categorized and user can filter and sort products while browsing. It also has fully functioning cart, where user can add, remove and change amount of items inside it.",
    //   shortDescription: "Shopping store made with React and TypeScript.",
    //   techs: ["React", "TypeScript", "Tailwind", "React-Router"],
    //   link: "https://zwiro.github.io/reshop-app/",
    //   repo: "https://github.com/zwiro/reshop-app",
    //   image: reshopImage,
    // },
    {
      title: "More",
      description: "Check out my other projects on my github.",
      shortDescription: "Check out my other projects on my github.",
      techs: [],
      link: "https://github.com/zwiro",
      image: otherImage,
    },
  ]

  const [activeCard, setActiveCard] = useState(null)
  const [cursorPosition, setCursorPosition] = useState()
  const [projectBgPosition, setProjectBgPosition] = useState(undefined)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  }

  const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  }

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      e.stopPropagation()
      setActiveCard(null)
    })
    document.body.addEventListener("mousemove", (e) => {
      setCursorPosition(Math.floor((e.clientY / window.innerHeight) * 100))
    })
    return () => {
      document.body.removeEventListener("click", (e) => {
        e.stopPropagation()
        setActiveCard(null)
      })
      document.body.removeEventListener("mousemove", (e) => {
        setCursorPosition(Math.floor((e.clientY / window.innerHeight) * 100))
      })
    }
  }, [])

  useEffect(() => {
    setProjectBgPosition(`${cursorPosition}%`)
  }, [cursorPosition])

  return (
    <Container page="projects" title="My projects">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={` projects__grid`}
      >
        {projects.map((project, i) => (
          <motion.div
            tabIndex={0}
            variants={item}
            layout
            key={`${project}-${i}`}
            className={`${
              activeCard === i
                ? "projects__project--active"
                : activeCard !== null && "projects__project--inactive"
            } projects__project`}
            onClick={(e) => {
              e.stopPropagation()
              setActiveCard(i)
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation()
                setActiveCard(i)
              }
            }}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url('${project.image}')`,
              backgroundPositionY: activeCard !== null && projectBgPosition,
            }}
          >
            <div className="projects__project-header">
              <h3 className="projects__project-title">{project.title}</h3>
              {activeCard === null && (
                <p className="projects__short-description">
                  {project.shortDescription}
                </p>
              )}
              {activeCard === i && (
                <motion.button
                  className="projects__project-close-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveCard(null)
                  }}
                >
                  <AiOutlineClose className="projects__project-close-icon" />
                </motion.button>
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
            {activeCard === i && (
              <>
                <p className="projects__description">{project.description}</p>
                <div className="projects__links">
                  {project.repo && (
                    <a
                      className="projects__link projects__link--blue"
                      target="_blank"
                      href={project.repo}
                    >
                      Repository
                    </a>
                  )}
                  <a
                    className="projects__link"
                    target="_blank"
                    href={project.link}
                  >
                    Visit site
                  </a>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Container>
  )
}

export default Projects
