import React from 'react'
import Header from '../../../Components/Header/Header'
import Hero from './Hero'
import slide from '../assets/slide.jpg'
const Section1 = () => {
  return (
    <div className='sectiononemain' style={{ backgroundImage: `url(${slide})` }} id={"home"}>
      <div className="sectiononegradient"></div>
      <div className="main_home">
        <Header />
        <Hero />
      </div>
    </div>
  )
}
export default Section1