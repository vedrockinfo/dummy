import React from 'react';
import Port1 from '../../assets/vedant-project-01.jpg';
import Port2 from '../../assets/vedant-project-02.jpg';
import Port3 from '../../assets/vedant-project-03.jpg';
import Port4 from '../../assets/vedant-project-04.jpg';
import Port5 from '../../assets/vedant-project-05.jpg';
import Port6 from '../../assets/vedant-project-06.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Port1} alt="Portfolio One" />
          </div>
          <h3>Synergy Summit</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn'>Github</a>
            <a href="#https://dignityeducation.org/synergysummit" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Port2} alt="Portfolio One" />
          </div>
          <h3>Global Policymakers Conclave</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn'>Github</a>
            <a href="https://dignityeducation.org/policymaker/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Port3} alt="Portfolio One" />
          </div>
          <h3>A Monthly Digital Publication</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn'>Github</a>
            <a href="https://10xgood.org/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Port4} alt="Portfolio One" />
          </div>
          <h3>Devi Sansthan : Diginity Education Vision International</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn'>Github</a>
            <a href="https://disruptiveliteracy.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Port5} alt="Portfolio One" />
          </div>
          <h3>Satoshi DX</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn'>Github</a>
            <a href="https://satoshidx.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Port6} alt="Portfolio One" />
          </div>
          <h3>Aspyra</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn'>Github</a>
            <a href="https://aspyra.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
