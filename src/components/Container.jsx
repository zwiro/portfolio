import { motion } from "framer-motion"

function Container({ children, page, title }) {
  return (
    <section id={page} className={page}>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className={`${page}__title-bg`}
        layout
      >
        <span className={`${page}__title`}>{title}</span>
      </motion.div>
      {children}
    </section>
  )
}

export default Container
