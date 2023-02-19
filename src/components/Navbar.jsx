import "../scss/navbar.scss"
import useMediaQuery from "../hooks/useMediaQuery"
import MobileMenu from "./MobileMenu"
import NavbarItems from "./NavbarItems"
import { Link } from "react-scroll"
import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 640px)")

  const { scrollY } = useScroll()
  const [navHidden, setNavHidden] = useState()

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setNavHidden(false)
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setNavHidden(true)
    }
  }

  useMotionValueEvent(scrollY, "change", () => {
    update()
  })

  const navVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  }

  return (
    <motion.nav
      className="navbar"
      variants={navVariants}
      animate={isDesktop && navHidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      {isDesktop && (
        <Link to="home" href="#home" smooth spy>
          <div className="navbar__logo">
            <div className="navbar__logo-bg">
              <span className="navbar__logo-text">zyrek.dev</span>
            </div>
            <div className="navbar__logo-bg navbar__logo-bg--second"></div>
          </div>
        </Link>
      )}
      {isDesktop ? (
        <NavbarItems />
      ) : (
        <MobileMenu>
          <NavbarItems />
        </MobileMenu>
      )}
    </motion.nav>
  )
}

export default Navbar
