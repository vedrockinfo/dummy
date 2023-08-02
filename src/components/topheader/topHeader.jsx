import React from 'react';
import { Link } from 'react-router-dom';

const topHeader = () => {
  return (
    <div className='topHeader'>
      <div className='container topHeader__container'>
        <div className='topHeader__row'>
            <div className='logo'>
                <h1>vedant</h1>
                <span>frontend Developer</span>
            </div>
            <div className='navbar'>
                <ul className='nav-items'>
                    {/* <li className='nav-links'>
                        <Link>Quick Design</Link>
                    </li> */}
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default topHeader
