import React from 'react';
import CTA from "./CTA";
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <div className="row">
        <div className="col-md-12">
          <span>Hello I am</span>
        <h1>Vedant</h1>
        <h5 className="text-light">Frontent Developer</h5>
        <CTA />

        </div>
      </div>
      

      <a href="#contact" className='scroll__down'>Scroll Down</a>

      <HeaderSocials />
    </div>
   </header>
  )
}

export default Header
