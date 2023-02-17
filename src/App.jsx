import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "./scss/global.scss"
import { useEffect, useState } from "react"

function App() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [bgPosition, setBgPosition] = useState(undefined)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(
        Math.floor(
          (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
            100
        )
      )
    })
    return () => {
      window.removeEventListener("scroll", () => {
        setScrollPosition(
          Math.floor(
            (window.scrollY /
              (document.body.offsetHeight - window.innerHeight)) *
              100
          )
        )
      })
    }
  }, [])

  useEffect(() => {
    setBgPosition(
      `${Math.floor(Math.random() * 1001) - 500}% ${scrollPosition}%`
    )
    document.body.animate(
      {
        backgroundPosition: bgPosition,
      },
      { duration: 500000, fill: "forwards" }
    )
  }, [scrollPosition])

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
