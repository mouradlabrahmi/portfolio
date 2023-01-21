import React, { useState } from 'react'
import './NavbarMobile.css'
import {AiOutlineHome, AiOutlineUser, AiOutlinePhone, AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {CgFileDocument} from 'react-icons/cg'
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const NavbarMobile = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='nav1'>
      <Nav.Link as={Link} to="/" onClick={() => setActiveNav('#')} 
      className={activeNav==='#'? 'active': 'inactive'}> <AiOutlineHome /></Nav.Link>

      <Nav.Link as={Link} to='/about' onClick={() => setActiveNav('#about')} 
      className={activeNav==='#about'? 'active': 'inactive'}> <AiOutlineUser /></Nav.Link>

      <Nav.Link as={Link} to='/experience' onClick={() => setActiveNav('#experience')} 
      className={activeNav==='#experience'? 'active': 'inactive'}> <MdWorkOutline /></Nav.Link>

      <Nav.Link as={Link} to='/project' onClick={() => setActiveNav('#project')} 
      className={activeNav==='#project'? 'active': 'inactive'}> <AiOutlineFundProjectionScreen /></Nav.Link>

      <Nav.Link as={Link} to='/resume' onClick={() => setActiveNav('#resume')} 
      className={activeNav==='#resume'? 'active': 'inactive'}> <CgFileDocument /></Nav.Link>

      <Nav.Link as={Link} to='/contact' onClick={() => setActiveNav('#contact')} 
      className={activeNav==='#contact'? 'active': 'inactive'}> <AiOutlinePhone /></Nav.Link>

      {/* <Nav.Link onClick={() => setActiveNav('theme')}
      className={activeNav==='theme'? 'active': 'inactive'}> <MdOutlineColorLens /> </Nav.Link>  */}
    </nav>
  )
}

export default NavbarMobile