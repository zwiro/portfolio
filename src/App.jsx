import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import "./scss/global.scss"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
