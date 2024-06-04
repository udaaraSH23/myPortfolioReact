import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import { faMailBulk, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_or9ooqn', 'template_5truhlh', form.current, 'TrdArjRSdh7vbVrPy')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Contact Me".split('')}
              idx={15}
            />
          </h1>

          <div className="contact-form">
          <p className='mobile-description'>Whether you have a specific project in mind or just a question, 
            feel free to reach out using the form below. Let's bring your ideas to life!</p>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-wrap">

          <div className="info-map">
            <h2>Lets Talk</h2>
            <p>
              I am always eager to take on ambitious freelance projects and collaborate on innovative solutions.
              If you're looking for a dedicated full-stack developer with expertise in JavaScript, React.js,
              MERN Stack and more.you're in the right place.
            </p>
            <div className='contact-detail'>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                  <span>074 0116345</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMailBulk} className="icon" />
                  <span>udarasenarath85@gmail.com</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLocation} className="icon" />
                  <span>Srl Lanka</span>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact