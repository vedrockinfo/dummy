import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import Port1 from '../../assets/vedant-project-01.jpg';
import Port2 from '../../assets/vedant-project-02.jpg';
import Port3 from '../../assets/vedant-project-03.jpg';
import Port4 from '../../assets/vedant-project-04.jpg';
import Port5 from '../../assets/vedant-project-05.jpg';
import Port6 from '../../assets/vedant-project-06.jpg';

const tabData = [
  { id: 1, label: 'Jaipur 96498 54220', content: '<h1>Custom HTML for Tab 1</h1><p>More content...</p>' },
  { id: 2, label: 'Ruchi Khand 95800 58888', content: 'Content for Tab 2' },
  { id: 3, label: 'Barabanki 7408403000', content: 'Content for Tab 3' },
];

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio mt-large'>
      <div className="container">
        <div className="our-heads">
          <h6 className="overlay-heading">portfolio</h6>
          <h2 className="primary-heading text-center">lorem is u</h2>
          <div className="space-one"></div>
        </div>
        <div className="portfolio-tabs">
          <Tabs tabs={tabData} />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
