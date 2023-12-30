import React from 'react'
import Flogo from '../../assets/Images/logo.svg'

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
              <li><span>Home</span></li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="coloumn2-b">
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Instagram</li>
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
