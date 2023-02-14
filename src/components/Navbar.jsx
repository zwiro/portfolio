import "../scss/navbar.scss"
import useMediaQuery from "../hooks/useMediaQuery"
import { useState } from "react"
import MobileMenu from "./MobileMenu"
import NavbarItems from "./NavbarItems"

function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 640px)")

  return (
    <nav className="navbar">
      {isDesktop && (
        <div className="navbar__logo">
          <div className="navbar__logo-bg">
            <span className="navbar__logo-text">zyrek.dev</span>
          </div>
          <div className="navbar__logo-bg navbar__logo-bg--second"></div>
        </div>
      )}
      {isDesktop ? (
        <NavbarItems />
      ) : (
        <MobileMenu>
          <NavbarItems />
        </MobileMenu>
      )}
    </nav>
  )
}

export default Navbar
