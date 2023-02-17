import Container from "./Container"
import "../scss/contact.scss"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai"

function Contact() {
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

  const sendEmail = (e) => {
    e.preventDefault()
    if (formData.name === "" || !/[a-zA-Z]/.test(formData.name)) {
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
    if (
      validationError.name ||
      validationError.email ||
      validationError.message
    )
      return

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
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
  }

  return (
    <Container page="contact" title="Contact me">
      <div className="contact__wrapper">
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="contact__label">Name</label>
            <input
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
            <p className="contact__error">{validationError.name}</p>
          </div>
          <div>
            <label className="contact__label">Email</label>
            <input
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
            <p className="contact__error">{validationError.email}</p>
          </div>
          <div>
            <label className="contact__label">Message</label>
            <textarea
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
            <p className="contact__error">{validationError.message}</p>
          </div>
          <input className="contact__submit" type="submit" value="Send" />
        </form>
        <div className="contact__icons">
          <h2 className="contact__header">Find me on</h2>
          <div className="contact__socials">
            {socialMedia.map((social, i) => (
              <div className="contact__social" key={`${social}-${i}`}>
                <a href={social.link} target="_blank" className="contact__link">
                  {social.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Contact
