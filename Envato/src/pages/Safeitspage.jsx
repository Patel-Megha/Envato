import React from 'react'
import Safecard from '../Components/Safecard'

const Safeitspage = () => {
  return (
    <div className='safeitspagemain' id={"safety"}>
        <h1>It is Safe</h1>
        <div className="safecards">
          <Safecard idx={0}/>
          <Safecard idx={1}/>
          <Safecard idx={2}/>
        </div>
    </div>
  )
}
export default Safeitspage