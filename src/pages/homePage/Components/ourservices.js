import React from 'react'
import service_image from '../../../assets/Images/Cleaning.jpg'
import service1_image from '../../../assets/Images/service_img.png'
import service2_image from '../../../assets/Images/handyman.png'
import service3_image from '../../../assets/Images/Pluming.png'
import service4_image from '../../../assets/Images/Electrication.png'

const Ourservices = () => {
  return (
    <>
      <div className="ourservices page_witdh">
        <h2 className='global_title'>Explore Our <span>Services</span></h2>
        <div className="card_grid">

          <div className="service_card1">
            <img src={service1_image} alt="" />
            <div className="over_lay">
              <div className="content">
              <h2>AC Services</h2>
              </div>
            </div>
          </div>

          <div className="service_card">
            <img src={service_image} alt="" />
            <div className="over_lay">
              <div className="content">
              <h2>Duct Cleaning</h2>
              <button>Book Now</button>
              </div>
            </div>
          </div>

          <div className="service_card1">
            <img src={service2_image} alt="" />
            <div className="over_lay">
              <div className="content">
              <h2>Handyman</h2>
              </div>
            </div>
          </div>

          <div className="service_card1">
            <img src={service3_image} alt="" />
            <div className="over_lay">
              <div className="content">
              <h2>Plumbing</h2>
              </div>
            </div>
          </div>

          <div className="service_card1">
            <img src={service4_image} alt="" />
            <div className="over_lay">
              <div className="content">
              <h2>Electrical</h2>
              </div>
            </div>
          </div>

        </div>
        </div> 
    </>
  )
}

export default Ourservices
