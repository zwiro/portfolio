import { useState } from "react"
import { AiOutlineMenuFold } from "react-icons/ai"
import { AnimatePresence, motion } from "framer-motion"

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
      <AnimatePresence>
        {mobileMenuOpened && (
          <motion.div
            initial={{ x: "200%" }}
            animate={{ x: 0 }}
            exit={{ x: "200%" }}
            transition={{ type: "tween" }}
            className="navbar__mobile"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
