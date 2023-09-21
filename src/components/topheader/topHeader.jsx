import React from 'react';
import { Link } from 'react-router-dom';

const topHeader = () => {
  return (
    <div className='topHeader'>
      <div className='container topHeader__container'>
        <div className='topHeader__row'>
            <div className='logo'>
                <Link to="/home">Vedant</Link>
            </div>
            <div className='navbar'>
                <ul className='nav-items'>
                    <li className='nav-links'>
                        <Link to="/quickdesign">Quick Design</Link>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default topHeader
