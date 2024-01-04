import React from 'react'
import whoareu_img from '../../../assets/Images/mans.jpg'

const Whoareyou = () => {
  return (
    <>
      <div className="secetion_whoareyou page_witdh">
         <div className="whoarey">
            <div className="whoarey_imag">
              <div className="whoareyou_image">
                <img src={whoareu_img} alt=''></img>
              <div className="whoareyou_layout"></div>
              </div>  
            </div>
            <div className="whoarey_content">
            <h2 className='global_title'>Who we <span>Are?</span></h2>
            <p className='para1'>
            Home Comfort is a leading multiple service provider company catering 
            to your 360 needs with quality guaranteed. The aim and priority of 
            Home Comfort are to add value to our consumers’ lives by providing smart 
            solutions to all their problems. Our pride is providing the most extensive 
            range of services. From home maintenance to personal assistance.
            </p>
            <p className='para2'>
            We make sure that your safety is never compromised. This is why we hire all 
            the staff under the roof of Home Comfort, just for your satisfaction. 
            Our goal is to become the largest and most famous online home services 
            platform and provide our customers with the best of services and experience. 
            Our experts will give you the most satisfying experience and professionalism. 
            On your demand, all of our best home maintenance and renovation 
            services are available at the very right time and place.
            </p>
            </div>
         </div>
      </div>
    </>
  )
}

export default Whoareyou
