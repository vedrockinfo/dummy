import React from 'react';
import Port1 from '../../assets/portfolio1.jpg';
import Port2 from '../../assets/portfolio2.jpg';
import Port3 from '../../assets/portfolio3.jpg';
import Port4 from '../../assets/portfolio4.jpg';
import Port5 from '../../assets/portfolio5.png';
import Port6 from '../../assets/portfolio6.jpg';

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
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Port2} alt="Portfolio One" />
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Port3} alt="Portfolio One" />
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Port4} alt="Portfolio One" />
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Port5} alt="Portfolio One" />
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Port6} alt="Portfolio One" />
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
