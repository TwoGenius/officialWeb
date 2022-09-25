import React from 'react'
import Project1 from '../assets/hackathon.jpg'
import Project2 from '../assets/learn-to-code.jpg'
const Projects = () => {
  return (
    <div className="Projects">
      <div className="Heading_and_button">
        <h2>Different Projects We Built </h2>
        <h2>on Different Domains</h2>
        <button>See All</button>
      </div>
      <div className="Cards">
         <img src={Project1} alt="" />
         <img src={Project2} alt="" />
         <img src={Project2} alt="" />
         <img src={Project1} alt="" />
      </div>
    </div>
  )
}

export default Projects
