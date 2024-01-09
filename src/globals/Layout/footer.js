import React from 'react'
import Flogo from '../../assets/Images/logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer>
        <div className="coloumn1">
          <img src={Flogo} alt='footer_logo'/>
          <p>
            We make sure that your safety is never compromised. 
            This is why we hire all the staff under the roof of Home Comfort, 
            just for your satisfaction.
          </p>
        </div>
        <div className="coloumn2">
          <div className="coloumn2-a">
            <ul>
            <li><span><Link to="/">Home</Link></span></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </div>
          <div className="coloumn2-b">
            <ul>
              <li><a href='https://facebook.com/' rel='noreferrer' target='_blank'>Facebook</a></li>
              <li><a href='https://twitter.com/' rel='noreferrer' target='_blank'>Twitter</a></li>
              <li><a href='https://linkedin.com/' rel='noreferrer' target='_blank'>Linkedin</a></li>
              <li><a href='https://www.instagram.com/'>Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="coloumn3">
          <ul>
            <li>
              +92588499039875
            </li>
            <li>
              info@homecomfort.com
            </li>
          </ul>
          <div>
            <div className="news_letter">
              <input type="text" placeholder="Enter Your Email" />
              <button>Send</button>
            </div>
          </div>
        </div>
      </footer>
      <section className="After_footer">
        <div className="line">
          <hr />
        </div>
        <div className="copyright">
          <p>
            @Copyrights reserved by HomeComfort
          </p>
        </div>   
      </section>
    </div>
  )
}

export default Footer
