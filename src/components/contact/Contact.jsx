import React from 'react';
import {GoMail} from 'react-icons/go';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Us</h2>
     
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <GoMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ved@gmail.com</h5>
            <a href="mailto:ved@gmail.com">Send Message</a>
          </article>
          <article className='contact__option'>
          <BsFillTelephoneFill className='contact__option-icon' />
            <h4>Call Me Now</h4>
            <h5>7905359039</h5>
            <a href="tel:7905359039">Connect Now</a>
          </article>
          <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>7905359039</h5>
            <a href="mailto:ved@gmail.com">Send Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" id="name" placeholder='Your Full Name' required />
          <input type="email" name="email" id="email" placeholder='Your Email Address' required />
          <textarea name="message" id="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
