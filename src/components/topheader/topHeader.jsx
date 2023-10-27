import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png"

const topHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`topHeader ${scrolled ? 'scrolled' : ''}`}>
      <div className='container topHeader__container'>
        <div className='topHeader__row'>
          <div className='logo'>
            <Link to="/"><img src={Logo} /></Link>
          </div>
          <a className="toggle" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <span></span><span></span><span></span>
          </a>

          <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header justify-content-end">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className='nav-items'>
                <li className='nav-links'>
                  <Link to="/" className='nav-item'>Home</Link>
                </li>
                <li className='nav-links'>
                  <Link to="/quickdesign" className='nav-item'>Quick Design</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default topHeader
