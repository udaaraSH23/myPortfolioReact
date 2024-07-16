import { useEffect, useState } from 'react'
import {
  faNodeJs,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I am a Computer Science and electronics student with a deep passion for technology and electronics.
            Specializing in full-stack and mobile development, I excel in HTML, JavaScript, React.js, React Native, and Express.js.
            My commitment to innovation and continuous learning drives me to push boundaries and improve my skills in this ever-evolving
            field.
          </p>
          <p align="LEFT">
            I am seeking a role in an established IT company to work with the latest technologies on diverse and challenging projects.
            With a natural curiosity and a determination to solve design problems,
            I bring confidence and a fresh perspective to every project.
          </p>
          <p>
            Outside of tech, I am a sports fanatic and photography enthusiast, which keeps me balanced and inspired.
            In one sentence,I am a confident, curious, and evolving tech enthusiast, ready to make a meaningful impact.
          </p>
          
          
        </div>
        <div className='links'>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/udara-senarath-8b5a73263/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="#4d4d4e"
                  className="anchor-icon"
                />
                linkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/udaaraSH23"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  color="#4d4d4e"
                  className="anchor-icon"
                />
                Github
              </a>
            </li>

          </ul>
          </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About