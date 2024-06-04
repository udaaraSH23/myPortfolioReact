import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

import db from '../../firebase'
import { collection, getDocs, query, orderBy,limit } from "firebase/firestore";



const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    getProjects();
  }, [])

  //Firebase
  const [projectDetails, setProjectDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    try {
      const projectsQuery = query(collection(db, 'projects'), orderBy('pno', 'desc'),limit(10));
      const querySnapshot = await getDocs(projectsQuery);
      const projects = [];
      querySnapshot.forEach((doc) => {
        projects.push(doc.data());
      });
      setProjectDetails(projects);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false); // Ensure loading is set to false even if there's an error
    }
  };

  //visible projects
  const [activeProject, setActiveProject] = useState(0);
  const [startIndex, setStartIndex] = useState(0);


  const visibleProjects = projectDetails.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (activeProject < projectDetails.length - 1) {
      const newActiveProject = activeProject + 1;
      setActiveProject(newActiveProject);

      if (newActiveProject >= startIndex + 3) {
        setStartIndex(startIndex + 1);
      }
    }
  };

  const handlePrev = () => {
    if (activeProject > 0) {
      const newActiveProject = activeProject - 1;
      setActiveProject(newActiveProject);


      if (newActiveProject < startIndex) {
        setStartIndex(startIndex - 1);
      }
    }
  };


  return (
    <>
      {loading ? (
        <>
        <Loader type="pacman" />
        </>
        
      ) : (
        <div className="container project-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={"Projects".split('')}
                idx={15}
              />
            </h1>
            <p>
              Welcome to my projects portfolio! Here, you'll find a curated selection of my latest and
              most significant work.Each project reflects my skills, creativity,and dedication.
              Dive in to explore and see what I've been working on. Enjoy your visit!
            </p>

            <div className="project-catalog">
              {visibleProjects.map((project, index) => (
                <div
                  key={index + startIndex}
                  onClick={() => setActiveProject(index + startIndex)}
                  style={{ background: activeProject === index + startIndex ? '#4490b9' : '#115173' }}
                  className='projectTiles'
                >
                  <h2>{project.title}</h2>
                  <p>{project.intro}</p>
                </div>
              ))}
            </div>

            <div className='navigation-buttons'>
              <button onClick={handlePrev} disabled={startIndex === 0}>&lt;</button>
              <button onClick={handleNext} disabled={startIndex + 3 >= projectDetails.length}>&gt;</button>
            </div>

          </div>

          <div className='pr-description'>
            {projectDetails.map((project, index) => (
              <div
                key={index}
                className='desc-wrap'
                style={{ display: activeProject === index ? 'block' : 'none' }}
              >
                <h2>{project.title}</h2>
                <h5>{project.intro}</h5>
                <p>{project.description}</p>
                <div className='sklImg'>
                <div><p>{project.skills}</p></div>
                <div><img src={project.link} alt={project.title}/></div>
                </div>
                
              </div>
            ))}
          </div>


        </div>

      )}

    </>
  )
}

export default About