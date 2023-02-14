import { useState } from "react"
import { AiOutlineMenuFold } from "react-icons/ai"

function MobileMenu({ children }) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)

  return (
    <>
      <AiOutlineMenuFold
        className={`${
          mobileMenuOpened && "navbar__toggler--opened"
        } navbar__toggler`}
        onClick={() => setMobileMenuOpened((prevState) => !prevState)}
      />
      {mobileMenuOpened && <div className="navbar__mobile">{children}</div>}
    </>
  )
}

export default MobileMenu
