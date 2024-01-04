import React from 'react' 
import './style.css'
import Herosection from './Components/herosection'
import Circleareas from './Components/circleareas'
import Ourservices from './Components/ourservices'
import Whoareyou from './Components/whoareyou'
import Company from './Components/company'
import Ourclients from './Components/ourclients'
import Quickservices from './Components/quickservices'

const HomePage = () => {
  return (
    <>
        <Herosection />
        <Circleareas />
        <Ourservices />
        <Whoareyou />
        <Company />
        <Ourclients />
        <Quickservices />
    </>
  )
}

export default HomePage
