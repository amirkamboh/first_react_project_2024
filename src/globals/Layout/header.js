import React from 'react'
import Logo from '../../assets/Images/logo.svg'

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
              Home
            </li>
            <li>
              Service
            </li>
            <li>
              Contact Us 
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
