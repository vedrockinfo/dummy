import React from 'react';
import CV from "../../assets/vedant-resume.pdf";

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Contact Us</a>
    </div>
  )
}

export default CTA
