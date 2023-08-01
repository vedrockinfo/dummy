import React from 'react';
import Avatar1 from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.jpg';
import Avatar3 from '../../assets/avatar3.jpg';
import Avatar4 from '../../assets/avatar4.jpg';


const data = [
  {
    avatar:Avatar1,
    name:'Vedant',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, doloremque. Soluta natus vitae velit! Veniam iusto provident expedita perspiciatis, unde enim obcaecati, maxime laborum debitis eligendi, reprehenderit eius modi alias?'
  },
  {
    avatar:Avatar2,
    name:'Siddhant',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, doloremque. Soluta natus vitae velit! Veniam iusto provident expedita perspiciatis, unde enim obcaecati, maxime laborum debitis eligendi, reprehenderit eius modi alias?'
  },
  {
    avatar:Avatar3,
    name:'Dispencery',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, doloremque. Soluta natus vitae velit! Veniam iusto provident expedita perspiciatis, unde enim obcaecati, maxime laborum debitis eligendi, reprehenderit eius modi alias?'
  },
  {
    avatar:Avatar4,
    name:'Baigun',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, doloremque. Soluta natus vitae velit! Veniam iusto provident expedita perspiciatis, unde enim obcaecati, maxime laborum debitis eligendi, reprehenderit eius modi alias?'
  },
]

const Testimonials = () => {
  return (
   <section id="testimonials">
    <h5>Review from Clients</h5>
    <h2>Testimonials</h2>

    <div className="container testimonials__container">
      {
        data.map(({avatar, name, review}, index) => {
          return(
              <article key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="avatar__name">{name}</h5>
                <small className="avatar__review">
                  {review}
                </small>
          </article>
          )
        })
      }
    </div>
   </section>
  )
}

export default Testimonials
