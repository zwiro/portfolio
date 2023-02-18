import Container from "./Container"
import "../scss/contact.scss"
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai"
import { AnimatePresence, motion } from "framer-motion"

function Contact() {
  const [messageSent, setMessageSent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const socialMedia = [
    {
      name: "Github",
      icon: <AiFillGithub />,
      link: "https://github.com/zwiro",
    },
    {
      name: "LinkedIn",
      icon: <AiFillLinkedin />,
      link: "",
    },
    {
      name: "Facebook",
      icon: <AiFillFacebook />,
      link: "",
    },
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [validationError, setValidationError] = useState({
    name: null,
    email: null,
    message: null,
  })

  const form = useRef()

  const validateForm = () => {
    if (!formData.name || !/[a-zA-Z]/.test(formData.name)) {
      setValidationError((prevError) => ({
        ...prevError,
        name: "Name can't be empty.",
      }))
    }
    if (formData.email === "" || !/[a-zA-Z]/.test(formData.email)) {
      setValidationError((prevError) => ({
        ...prevError,
        email: "Email can't be empty.",
      }))
    }
    if (formData.message === "" || !/[a-zA-Z]/.test(formData.message)) {
      setValidationError((prevError) => ({
        ...prevError,
        message: "Message can't be empty.",
      }))
    }
  }

  const sendEmail = (e) => {
    setSubmitted(true)
    validateForm()
    e.preventDefault()
    if (
      !validationError.name &&
      !validationError.email &&
      !validationError.message
    ) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            setSubmitted(false)
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
      setFormData({
        name: "",
        email: "",
        message: "",
      })
      setMessageSent(true)
      setTimeout(() => {
        setMessageSent(false)
      }, 2000)
    }
  }

  useEffect(() => {
    validateForm()
  }, [submitted])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  const input = {
    hidden: { width: 0 },
    show: { width: "100%", transition: { duration: 1 } },
  }

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(247, 37, 133, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(247, 37, 133, 1)",
    },
  }

  return (
    <Container page="contact" title="Contact me">
      <div className="contact__wrapper">
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <AnimatePresence>
            {messageSent && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="contact__success"
                viewBox="0 0 512 512"
              >
                !--! Font Awesome Pro 6.3.0 by @fontawesome -
                https://fontawesome.com License -
                https://fontawesome.com/license (Commercial License) Copyright
                2023 Fonticons, Inc. --
                <motion.path
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 4, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                />
              </motion.svg>
            )}
          </AnimatePresence>
          <div>
            <label className="contact__label">Name</label>
            <motion.input
              variants={input}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="contact__input"
              type="text"
              name="user_name"
              onChange={(e) => {
                setValidationError((prevError) => ({
                  ...prevError,
                  name: null,
                }))
                setFormData((prevData) => {
                  return { ...prevData, name: e.target.value }
                })
              }}
              value={formData.name}
            />

            {submitted && (
              <p className="contact__error">{validationError.name}</p>
            )}
          </div>
          <div>
            <label className="contact__label">Email</label>
            <motion.input
              variants={input}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="contact__input"
              type="email"
              name="user_email"
              onChange={(e) => {
                setValidationError((prevError) => ({
                  ...prevError,
                  email: null,
                }))
                setFormData((prevData) => {
                  return { ...prevData, email: e.target.value }
                })
              }}
              value={formData.email}
            />
            {submitted && (
              <p className="contact__error">{validationError.email}</p>
            )}
          </div>
          <div>
            <label className="contact__label">Message</label>
            <motion.textarea
              variants={input}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="contact__textarea"
              rows={4}
              name="message"
              onChange={(e) => {
                setValidationError((prevError) => ({
                  ...prevError,
                  message: null,
                }))
                setFormData((prevData) => {
                  return { ...prevData, message: e.target.value }
                })
              }}
              value={formData.message}
            />
            {submitted && (
              <p className="contact__error">{validationError.message}</p>
            )}
          </div>
          <input className="contact__submit" type="submit" value="Send" />
        </form>
        <div className="contact__icons">
          <h2 className="contact__header">Find me on</h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="contact__socials"
          >
            {socialMedia.map((social, i) => (
              <motion.div
                variants={item}
                className="contact__social"
                key={`${social}-${i}`}
              >
                <a href={social.link} target="_blank" className="contact__link">
                  {social.icon}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  )
}

export default Contact
