import AboutCard from "./AboutCard"
import { useEffect, useState } from 'react'

function About() {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    fetch('/about_cards')
      .then(res => res.json())
      .then(setAbouts)  
  }, [])

  function eachAbout() {
    return abouts.map(about => 
        <AboutCard about={about} key={about.id}/>
      )
  }

  return(
    <div className="about">
      <h1>ABOUT</h1>
      <div className="about-cards-div">
        {eachAbout()}
      </div>
      <div>
        <img 
          src="https://avatars.githubusercontent.com/u/87447218?v=4" 
          alt="profile"
          className="about-me-img"
        />
        <h2 className="about-me-title">Who Am I?</h2>
        <h3 className="about-me">I am a Software Engineer who loves both front-end and back-end development.</h3>
        <h3 className="about-me">My journey began at <a href="https://flatironschool.com/" target="_blank" rel="noreferrer">Flatiron School</a>, where I explored JavaScript, React, Ruby, and Rails fundamentals. I enjoy making beautiful and functional apps, with a back-bone of fuss-free code.</h3>
        <h3 className="about-me">I grew up in the Bay Area and currently reside in lovely San Francisco, CA. When I'm not coding, I enjoy record-collecting and DJing 60's music around the city.</h3>
      </div>
    </div>
  )
}

export default About

