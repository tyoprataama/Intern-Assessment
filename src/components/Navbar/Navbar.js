import React from 'react'
import { logo } from '../../assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <img className='logo' src={logo} alt='logo' />
    </div>
  )
}

export default Navbar
