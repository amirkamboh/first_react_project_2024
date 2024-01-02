import React from 'react' 
import './style.css'
import Herosection from './Components/herosection'
import Circleareas from './Components/circleareas'
import Ourservices from './Components/ourservices'

const HomePage = () => {
  return (
    <>
        <Herosection />
        <Circleareas />
        <Ourservices />
    </>
  )
}

export default HomePage
