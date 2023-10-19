import React from 'react';
import Vedant from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { TbFolderCheck } from 'react-icons/tb';
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
              <h2 className="primary-heading">lorem is u</h2>
              <div className="space-one"></div>
              <div className="content-para">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sint corrupti, laborum, odit nemo quis a quas rem tenetur, dolor eveniet? Ipsa suscipit officia doloremque sit eaque. Quaerat, delectus minima.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi accusantium ipsam beatae vitae provident!</p>
              </div>
              <div className="experience-grid">
                <div className="experience-grid-items">
                  <div className="card">
                    <FaAward />
                    <h6></h6>
                    <div className="content-para">
                      <p>Expereince</p>
                    </div>
                  </div>
                </div>
                <div className="experience-grid-items">
                  <div className="card">
                    <FaAward />
                    <h6></h6>
                    <div className="content-para">
                      <p>Expereince</p>
                    </div>
                  </div>
                </div>
                <div className="experience-grid-items">
                  <div className="card">
                    <FaAward />
                    <h6></h6>
                    <div className="content-para">
                      <p>Expereince</p>
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
            <h2 className="primary-heading text-center">lorem is u</h2>
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
