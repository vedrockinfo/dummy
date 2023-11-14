import React from 'react';
import Vedant from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FaHandPointRight } from "react-icons/fa";
import { SiTask } from "react-icons/si";
import { TbFolderCheck } from 'react-icons/tb';
import { SiSuperuser } from "react-icons/si";
import CircularCounter from '../CircularCounter/CircularCounter';

const About = () => {
  return (
    <section className='about-me mt-large' id='about'>
      <div className="container">
        <div className="row">
          <div className='col-md-6'>
            <img src={Vedant} alt="" className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <div className="our-heads">
              <h6 className="overlay-heading">about</h6>
              <h2 className="primary-heading">who <span>am i ?</span></h2>
              <div className="space-one"></div>
              <div className="content-para">
                <p><span className='grn-content'>Hello, I’m a Vedant, Frontend Developer</span> based on Lucknow, India.
                  I have rich experience in web site design & building
                  and customization. Also I am good at <span className='grn-content'>HTML, CSS/SCSS, Javascript,
                    Wordpress, jQuery, Bootstrap, Photoshop.</span></p>
                <ul className='primaryList'>
                  <li><FaHandPointRight /> Proficient in HTML, CSS/SCSS, jQuery, Bootstrap, Photoshop, Wordpress, Responsive Design and Media Query</li>
                  <li><FaHandPointRight /> Basic knowledge of Javascript, Adobe Illustrator, Github</li>
                  <li><FaHandPointRight /> Editing & Design Development with team in the company to build perfect web designs</li>
                  <li><FaHandPointRight /> Experienced in designing layout on Adobe XD and design Static Web Application on ReactJS</li>
                  <li><FaHandPointRight /> Convert PSD or Figma to HTML or Wordpress with pixel perfect effects</li>
                </ul>
              </div>
              <div className="experience-grid">
                <div className="experience-grid-items">
                  <div className="card">
                    <FaAward />
                    <h6 className="duration">4<sup>+</sup> years</h6>
                    <div className="content-para">
                      <p>Expereince</p>
                    </div>
                  </div>
                </div>
                <div className="experience-grid-items">
                  <div className="card">
                    <SiTask />
                    <h6 className="duration">20<sup>+</sup></h6>
                    <div className="content-para">
                      <p>Projects</p>
                    </div>
                  </div>
                </div>
                <div className="experience-grid-items">
                  <div className="card">
                    <SiSuperuser />
                    <h6 className="duration">100<sup>+</sup></h6>
                    <div className="content-para">
                      <p>Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-large">
          <div className="our-heads">
            <h6 className="overlay-heading">skills</h6>
            <h2 className="primary-heading text-center">Ready to <span>Serve</span></h2>
            <div className="space-one"></div>
          </div>
          <div className="content-para text-center">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sint corrupti, laborum, odit nemo quis a quas rem tenetur, dolor eveniet? Ipsa suscipit officia doloremque sit eaque. Quaerat, delectus minima.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi accusantium ipsam beatae vitae provident!</p>
          </div>
          <CircularCounter maxValue={100} animationDuration={1000} />
        </div>
      </div>
    </section>
  )
}

export default About
