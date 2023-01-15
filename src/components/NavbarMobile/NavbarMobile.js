import React, { useState } from 'react'
import './NavbarMobile.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage} from 'react-icons/ai'
import {MdWorkOutline, MdOutlineMiscellaneousServices, MdOutlineColorLens} from 'react-icons/md'

const NavbarMobile = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav1>
      <a href='/' onClick={() => setActiveNav('#')} 
      className={activeNav==='#'? 'active': ''}> <AiOutlineHome /></a>
      <a href='/about' onClick={() => setActiveNav('#about')} 
      className={activeNav==='#about'? 'active': ''}> <AiOutlineUser /></a>
      <a href='/project' onClick={() => setActiveNav('#experience')} 
      className={activeNav==='#experience'? 'active': ''}> <MdWorkOutline /></a>
      <a href='/resume' onClick={() => setActiveNav('#services')} 
      className={activeNav==='#services'? 'active': ''}> <MdOutlineMiscellaneousServices /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} 
      className={activeNav==='#contact'? 'active': ''}> <AiOutlineMessage /></a>
      <a onClick={() => setActiveNav('theme')}
      className={activeNav==='theme'? 'active': ''}> <MdOutlineColorLens /> </a> 
    </nav1>
  )
}

export default NavbarMobile