import React from 'react'
import { useState,useEffect } from 'react'
import './index.scss'
import homeRight from '../../assets/images/04.jpg'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {

    


const [letterClass,setLetterClass] = useState('text-animate');
const nameArray ="Udara".split('')
const jobArray = "Full Stack developer".split('')

useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])


  return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _15`}> </span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
            <br/>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
            </h1>
            <h2>HTML / Javascript / CSS / MERN Stack</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
        <div className='imgCntainer'>
          <img src={homeRight}/>
        </div>
      
    </div>
    <Loader type="pacman" />
    </>
    
  )
}

export default Home;
