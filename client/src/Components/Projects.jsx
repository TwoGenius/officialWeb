import React from 'react'
import "./project.css"
import Project1 from '../assets/hackathon.jpg'
import Project2 from '../assets/learn-to-code.jpg'
const Projects = () => {
  return (
    <div className="Projects">
      <div className="Heading_and_button">
        <h2>Different Projects We Built <br /> on Different Domains</h2>
        <button className='SeeAllBtn' >See All</button>
      </div>
      <div className="Cards">
         <div className="row one">
         <img src={Project1} alt="" />
         <img src={Project2} alt="" />
         </div>
        <div className="row two">
        <img src={Project2} alt="" />
         <img src={Project1} alt="" />
        </div>
      </div> 
    </div>
  )
}

export default Projects
