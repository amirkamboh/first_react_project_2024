import React from 'react'
import Logo from '../../assets/Images/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header>
        <div className="img">
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <link to="/">Home</link>
            </li>
            <li>
              <link t0="/about-us">
                About Us
                </link>
            </li>
            <li>
              <link to="/contact-us"> Contact Us </link>
            </li>
            <li className="header-btn">
              +92 3037998345
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
