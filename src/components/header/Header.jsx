import React from 'react';
import CTA from "./CTA";
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello I am</h5>
      <h1>Vedant</h1>
      <h5 className="text-light">Frontent Developer</h5>
      <CTA />

      <div className="me">
        <img src={ME} alt='Vedant Gupta' />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>

      <HeaderSocials />
    </div>
   </header>
  )
}

export default Header
