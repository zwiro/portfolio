import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "./scss/global.scss"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset
      document.body.style.backgroundPositionY = scrollPosition * 0.5 + "px"
      document.body.animate(
        { backgroundPositionX: scrollPosition + "px" },
        { duration: 1000000, fill: "forwards" }
      )
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
