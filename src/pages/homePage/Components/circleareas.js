import React from 'react'
import servic_image from '../../../assets/Images/service_star.svg'
import rate_imgage from '../../../assets/Images/rates.svg'
import team_image from '../../../assets/Images/team.svg'

const Circleareas = () => {
  return (
    <>
       <section className="banner_secetion_upper">
        <div className="page_witdh_upper">
          <div className="banner_inner_section_upper">
            <div className="image_fix">
              <img src={servic_image} alt='' />
            </div>
            <div className="image_fix">
              <img src={rate_imgage} alt='' />
            </div>
            <div className="image_fix">
              <img src={team_image} alt='' />
            </div>
            <div className="content_fix">24/7 Services</div>
            <div className="content_fix">Reasonable Rates</div>
            <div className="content_fix">Experience Team</div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Circleareas
