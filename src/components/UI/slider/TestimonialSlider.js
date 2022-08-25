import React, { useState } from 'react'
import  '../../../styles/testimonial-slider.css'

import Ava01 from '../../../asstes/images/ava-1.jpg'
import Ava02 from '../../../asstes/images/ava-2.jpg'
import Ava03 from '../../../asstes/images/ava-3.jpg'

function TestimonialSlider() {
    const [current,setCurrent]=useState(0)
    const testimonialData=[
        {
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto velit iste? Sed totam accusamus illo dolor? Natus, cupiditate voluptate soluta quia fugiat dolor voluptatum nemo neque eaque perferendis odit.",
            url:Ava01,
            user:"Jhon Doe"
        },
        {
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto velit iste? Sed totam accusamus illo dolor? Natus, cupiditate voluptate soluta quia fugiat dolor voluptatum nemo neque eaque perferendis odit.",
            url:Ava02,
            user:"Mitchell Marsh"
        },
        {
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto velit iste? Sed totam accusamus illo dolor? Natus, cupiditate voluptate soluta quia fugiat dolor voluptatum nemo neque eaque perferendis odit.",
            url:Ava03,
            user:"Steven Crock"
        },
    ]
    const length=testimonialData.length;
    if(!Array.isArray(testimonialData) || length <= 0 ){
        return null;
    }
    const nextSlide=()=>{
     setCurrent(current===length-1 ? 0 : current+1)
    }
    const preveSlide=()=>{
      setCurrent(current === 0 ? length-1 : current-1)
    }
  return (
    <div className='testimonial'>
        <div className='testimonial-container'>
        {testimonialData.map((item,index)=>(
        <div key={index} className={`testimonial-card ${current===index ? ' active' : 'slide'}`}>
         <p>{item.text}</p>
         <div key={index} className="img-card">
            <img src={item.url} alt="user-img"  />
         <h6>{item.user}</h6>

         </div>
        </div>
    ))}
    
        </div >
        <div className='arrow-slider'>
         <span onClick={preveSlide} className="left-slide"> 
         <i class="ri-arrow-left-s-line"></i>
        </span>
        <span onClick={nextSlide} className="right-slide">
        <i class="ri-arrow-right-s-line"></i>
        </span>
  
    </div>
 
    
    </div>
  )
}

export default TestimonialSlider
