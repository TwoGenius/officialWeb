import React from 'react'
import "./advantages.css"
import Adv1 from "../assets/Adantage-2.svg";
import Adv2 from "../assets/Advantage-1.svg";
import Ellipse from "../assets/Advantages-Circle.svg";
const Advantages = () => {
  return (
    <div className='Advantages'>
      <div className="left-div">
        <img src={Adv1} alt=""  className="img-1" />
        <img src={Adv2} alt="" className='img-2' />
      </div>
      <div className="right-div">
       <h2>The Advantages of <br /> Our VR That We <br /> Offer So Far</h2>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nostrum aut porro.</p>
       <button>Get It Now</button>
      </div>
      <img src={Ellipse} alt="" className="Ellipse" />
    </div>
  )
}

export default Advantages
