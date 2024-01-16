import React from 'react'

const Ductforms = () => {
  return (
    <>
      <div className="duct_forms page_witdh">
        <div className="form_duct_areas">
            <div className="form_duct_offer">
                <p>Get 50% Off</p>
                </div>
                <input type='text' placeholder='Enter First Name' className='first_input_form' value='' />
                <input type='text' placeholder='Enter Last Name' className='last_input_form' value='' />
                <input type='text' placeholder='Enter Email' className='email_input_form' value='' />
                <input type='text' placeholder='Enter Phone' className='phone_input_form' value='' />
                <input type='text' placeholder='Enter Message' className='message_input_form' value='' />
                <button className='form_btn'>Send</button>
        </div>
      </div>
    </>
  )
}

export default Ductforms
