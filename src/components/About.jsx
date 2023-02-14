import "../scss/about.scss"
import { IoLogoSass, IoLogoNodejs } from "react-icons/io"
import {
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiReact,
  SiJavascript,
} from "react-icons/si"

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
      name: "Redux Toolkit",
      icon: <SiRedux fill="#ba8fff" />,
    },
  ]
  return (
    <section id="about" className="aboutpage">
      <div className="aboutpage__title-bg">
        <span className="aboutpage__title">About me</span>
      </div>
      <div className="aboutpage__text">
        <p>
          Self taught web <span className="aboutpage__accent">developer</span>{" "}
          with passion for coding.
          <br />
          <br />
          Fast <span className="aboutpage__accent">learner</span> constantly
          involved in learning new things.
          <br />
          <br />
          Hard working and ready to face any{" "}
          <span className="aboutpage__accent">challenge</span>.
          <br />
          <br />
          Besides coding my hobby is looking into{" "}
          <span className="aboutpage__accent--blue">space</span> through an 8
          inch tube.
        </p>
        <p>
          Some of the{" "}
          <span className="aboutpage__accent--blue">technologies</span> that i
          have been using in my projects are:
        </p>
        <div className="aboutpage__techs">
          {techs.map((tech, i) => (
            <div key={`${tech}-${i}`} className="aboutpage__tech">
              {tech.icon}
              <span className="aboutpage__tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
