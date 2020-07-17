import React from "react"
import "./Contact.css"
import Section from "../section/Section"
import Bounce from "react-reveal/Bounce"
import ContactForm from "../contactForm/ContactForm"
import linkedin from "../../images/linkedin.png"
import github from "../../images/github.png"
import facebook from "../../images/facebook.png"

const Contact = () => {
  return (
    <section className="contact">
      <Section title="Contact">
        <ContactForm />
        <Bounce cascade>
          <div className="links">
            <a
              href="https://github.com/juliancesaro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Github Logo" width="40px" />
            </a>
            <a
              href="https://www.linkedin.com/in/juliancesaro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Linkedin Logo" width="40px" />
            </a>

            <a
              href="https://www.facebook.com/julian.cesaro.1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook Logo" width="40px" />
            </a>
          </div>
        </Bounce>
      </Section>
    </section>
  )
}

export default Contact
