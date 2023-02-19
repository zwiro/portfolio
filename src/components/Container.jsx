import { motion } from "framer-motion"

function Container({ children, page, title }) {
  return (
    <section id={page} className={page}>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className={`${page}__title-bg`}
        layout
      >
        <h2 className={`${page}__title`}>{title}</h2>
      </motion.div>
      {children}
    </section>
  )
}

export default Container
