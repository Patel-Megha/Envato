import React, { NavLink } from 'react'
import UsdCard from '../Components/Common/UsdCard'

const Section4 = () => {
  return (
    <div className='section4main'>
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