import React from 'react'
import Buycoincard from '../../Components/Common/Buycoincard'
const Section5 = () => {
  return (
    <div className='section5main' id={"template"}>
        <h1>BuyCoin template</h1>
        <p className='section5text'>Excellent for your business</p>
        <div className="buycointemplate">
            <Buycoincard idx={0}/>
            <Buycoincard idx={1}/>
            <Buycoincard idx={2}/>
            <Buycoincard idx={3}/>
            <Buycoincard idx={4}/>
            <Buycoincard idx={5}/>
        </div>
    </div>
  )
}
export default Section5