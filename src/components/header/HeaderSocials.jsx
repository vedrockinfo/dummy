import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsDribbble } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/vedant-gupta-12b15a191" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/vedrockinfo" target='_blank'><BsGithub /></a>
      <a href="www.dribble.com" target='_blank'><BsDribbble /></a>
    </div>
  )
}

export default HeaderSocials
