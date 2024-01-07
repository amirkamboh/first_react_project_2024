import React from 'react'
import Logo from '../../assets/Images/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header>
        <div className="img">
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
                </Link>
            </li>
            <li>Services</li>
            <li>
              <Link to="/about-us">
                About Us
                </Link>
            </li>
            <li>
              <Link to="/contact-us"> Contact Us </Link>
            </li>
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
