import React, { NavLink } from 'react'
import UsdCard from '../Components/UsdCard'

const Section4 = () => {
  return (
    <div className='section4main'>
      {/* <div className="container">
        <a href="" className='containerlinks'>USD</a>
        <a href="" className='containerlinks'>EUR</a>
        <a href="" className='containerlinks'>GBP</a>
        <a href="" className='containerlinks'>RUB</a>
      </div> */}
      <div className="BTCsection">
        <UsdCard idx={0} />
        <UsdCard idx={1} />
        <UsdCard idx={2} />
        <UsdCard idx={3} />
      </div>
    </div>
  )
}
export default Section4