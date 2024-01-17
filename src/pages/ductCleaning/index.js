import React from 'react'
import './style.css'
import Ductherosection from './duct_Components/ductherosection'
import Ductforms from './duct_Components/ductforms'
import Ductsolutions from './duct_Components/ductsolutions'
import Company from '../homePage/Components/company'
import Ductbenefits from './duct_Components/ductbenefits'

const DuctCleaning = () => {
  return (
    <>
       <Ductherosection />
       <Ductforms />
       <Ductsolutions />
       <Company />
       <Ductbenefits />
    </>
  )
}

export default DuctCleaning
