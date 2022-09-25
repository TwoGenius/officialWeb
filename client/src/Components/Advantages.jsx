
import React from 'react'
import "./advantages.css"
import Adv1 from "../assets/Adantage-2.svg";
import Adv2 from "../assets/Advantage-1.svg";
import Ellipse from "../assets/Advantages-Circle.svg";
const Advantages = () => {
  return (
    <div className='Advantages'>
      <div className="left-div">
        <img src={Adv1} alt="" />
        <img src={Adv2} alt="" />
      </div>
      <div className="right-div">
       <h2>The Advantages of Our VR That We Offer So Far</h2>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nostrum aut porro.</p>
       <button>Get It Now</button>
      </div>
      <img src={Ellipse} alt="" />
    </div>
  )
}

export default Advantages
