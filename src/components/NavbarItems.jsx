import {
  AiOutlineHome,
  AiOutlineIdcard,
  AiOutlineMail,
  AiOutlineLaptop,
} from "react-icons/ai"
import { Link } from "react-scroll"
import useMediaQuery from "../hooks/useMediaQuery"

function NavbarItems() {
  const navbarItems = [
    { name: "Home", icon: <AiOutlineHome />, to: "home" },
    { name: "About", icon: <AiOutlineIdcard />, to: "about" },
    {
      name: "Projects",
      icon: <AiOutlineLaptop />,
      to: "projects",
    },
    { name: "Contact", icon: <AiOutlineMail />, to: "contact" },
  ]
  const isDesktop = useMediaQuery("(min-width: 640px)")

  return (
    <ul className={`${!isDesktop && "navbar__links--mobile"} navbar__links`}>
      {navbarItems.map((item, i) => (
        <li key={`${item}-${i}`}>
          <Link
            className="navbar__link"
            activeClass="navbar__link--active"
            smooth
            spy
            tabIndex={i + 1}
            to={item.to}
          >
            {item.icon} {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavbarItems
