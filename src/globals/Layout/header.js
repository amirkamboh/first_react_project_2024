import React from 'react'
import Logo from '../../assets/Images/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header>
        <div className="img">
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className='des'>Home</Link>
            </li>
            <li>Services
          <ul className='dropdown'>
             <li><Link to="/duct-cleaning" className='des'>Duct Cleaning</Link></li>
             <li>AC Services</li>
             <li>Handyman</li>
             <li>Plumbing</li>
             <li>Electrical</li>
             <li>Painting Service</li>
             <li>Water Tank Cleaning</li>
          </ul>
              </li>
            <li><Link to="/about-us" className='des'>About Us</Link></li>
            <li><Link to="/contact-us" className='des'>Contact Us</Link></li>
            <li><Link to="/get-data" className='des'>Get Data</Link></li>
            <li className="header-btn">
              +92 3037998345
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
