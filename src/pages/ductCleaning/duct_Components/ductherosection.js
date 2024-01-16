import React from 'react'
import ductheroimg from '../../../assets/Images/AC Duct Cleaning.png'

const Ductherosection = () => {
  return (
    <>
      <div className="duct_hero_section page_witdh">
        <div className="duct_sections">
          <div className="duct_hero_content">
            <span>Our Services</span>
            <h2 className='ac_duct_title'>AC Duct</h2>
            <h2 className='clean_service_title'>Cleaning Services</h2>
            <div className="duct_button">
             <button className='duct_btn1'>Book Now</button>
             <button className='duct_btn2'>Contact Us</button>
            </div>
          </div>
          <div className="duct_hero_image">
            <img src={ductheroimg} alt=''></img>
          </div>
        </div>
        </div> 
    </>
  )
}

export default Ductherosection
