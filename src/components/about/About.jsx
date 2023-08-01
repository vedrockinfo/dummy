import React from 'react';
import Vedant from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {TbFolderCheck} from 'react-icons/tb';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Vedant} alt="Vedant Frontend Developer" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>
            <article className="about__card">
              <TbFolderCheck className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas atque cupiditate explicabo fugit minima deleniti libero esse iste vitae pariatur modi, eius, voluptate voluptates beatae. Earum magnam deserunt velit quasi.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
