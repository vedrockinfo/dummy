import React from 'react';
import { FiUsers } from 'react-icons/fi';

const Services = () => {
  return (
    <section id='services' class="services mt-large">
      <div className="container">
        <div className="our-heads">
          <h6 className="overlay-heading">services</h6>
          <h2 className="primary-heading text-center">what <span>we offer !</span></h2>
          <div className="space-one"></div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="web-cards">
              <FiUsers />
              <h2 className="secondaryHeading">Website Design</h2>
              <div className="content-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. sit amet consectetur, adipisicing elit. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="web-cards">
              <FiUsers />
              <h2 className="secondaryHeading">Web Development</h2>
              <div className="content-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. sit amet consectetur, adipisicing elit. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="web-cards">
              <FiUsers />
              <h2 className="secondaryHeading">Graphic Design</h2>
              <div className="content-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. sit amet consectetur, adipisicing elit. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
