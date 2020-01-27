import React, { useState } from 'react';
import { Link } from 'gatsby'
import './Navbar.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle, faHome, faPhone } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [menu, setMenu] = useState(true)
  
  return (
    <header>
      {menu ? 
      <div className='burger' onClick={() => setMenu(!menu)}>
        <div className='dash-1'/>
        <div className='dash-2'/>
        <div className='dash-3'/>
      </div> :
      <div className='sidenav'>
        <span onClick={() => setMenu(!menu)}>×</span>
        <ul>
          <li><FontAwesomeIcon icon={faHome} style={{ color: '#AAA', fontSize: '1.25rem', marginBottom: '2%'}}/> <Link onClick={() => setMenu(!menu)} to='/'>Home</Link></li>
          <br />
          <li><FontAwesomeIcon icon={faInfoCircle} style={{ color: '#AAA', fontSize: '1.25rem', marginBottom: '2%', marginRight: '1%' }}/> <Link onClick={() => setMenu(!menu)} to='/services'>Services</Link></li>
          <br />
          <li><FontAwesomeIcon icon={faPhone} style={{ color: '#AAA', fontSize: '1.25rem', marginBottom: '2%' }}/> <Link onClick={() => setMenu(!menu)} to='/contact'>Contact</Link></li>
        </ul>
      </div>
      }
    </header>
  )
}

export default Navbar