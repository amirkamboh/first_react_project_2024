import React from 'react'
import heroimg from '../../../assets/Images/hero_img.svg'

const Herosection = () => {
  return (
    <>
      <section className="baaner_secetion">
        <div className="page_witdh">
          <div className="banner_inner_section">
            <div className="content_banner">
              <small>Best in Dubai</small>
              <p className="intr">Welcome To</p>
              <h2>Home <span>Comfort</span></h2>
              <p className="des">
                Home Comfort provides home repair services in Dubai with reasonable rates. 
                We fix it right with home comfort professional experts.
              </p>
              <div className="banner_button">
                <button className="btn1">Contact us</button>
                <button className="btn2">Learn More</button>
              </div>
            </div>
            <div className="img_banner">
              <img src={heroimg} alt='heroimg' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Herosection
