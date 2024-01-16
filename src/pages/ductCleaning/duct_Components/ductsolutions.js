import React from 'react'
import providesolutionimg2 from '../../../assets/Images/provide_solution.png'
import providesolutionimg3 from '../../../assets/Images/AC_Services.png'

const Ductsolutions = () => {
  return (
    <>
      <div className="duct_solutions_section page_witdh">
        <div className="duct_solutions_parts">
         <div className="solutions_part1">
          <h2>Provided <span>Solutions</span></h2>
          <p className='duct_solutions_para1'>Dubai has a lovely environment that attracts people to visit or stay in Dubai. 
            But this lovely environment becomes scorching hot with an AC breakdown. 
            To keep your AC from breaking down, the best way is regular AC maintenance. 
            To keep your cool and fresh all year round, it is best to employ proper 
            AC Services in dubai.</p>
            <p className='duct_solutions_para2'>Our Home Comfort team are master technicians who have experience in providing 
              a multitude of AC services, including AC installation, AC repair, 
              AC maintenance, and many other AC services dubai. They can not only easily 
              find the faults but also repair them without affecting the quality of 
              AC services. Don’t Forget to CONTACT US when your AC requires servicing, 
              you can also call on us for regular AC maintenance. We guarantee the quality 
              of our service.</p>
         </div>
         <div className="solutions_part2">
          <img src={providesolutionimg2} alt=''></img>
          <div className="solutions_part2_layout"></div>
         </div>
         <div className="solutions_part3">
          <img src={providesolutionimg3} alt=''></img>
          <div className="solutions_part3_layout"></div>
         </div>
         <div className="solutions_part4">
         <p className='duct_solutions_para3'>Our Home Comfort team are master technicians 
         who have experience in providing a multitude of AC services, including AC 
         installation, AC repair, AC maintenance, and many other AC services dubai. 
         They can not only easily find the faults but also repair them without affecting 
         the quality of AC services. Don’t Forget to CONTACT US when your AC requires 
         servicing, you can also call on us for regular AC maintenance. We guarantee the 
         quality of our service.</p>
         <p className='duct_solutions_para4'>Our Home Comfort team are master technicians 
         who have experience in providing a multitude of AC services, including AC 
         installation, AC repair, AC maintenance, and many other AC services dubai. 
         They can not only easily find the faults but also repair them without affecting 
         the quality of AC services. Don’t Forget to CONTACT US when your AC requires 
         servicing, you can also call on us for regular AC maintenance. We guarantee the 
         quality of our service.</p>
         </div>
        </div>
      </div>
    </>
  )
}

export default Ductsolutions
