import React from 'react'
import Cards from '../../Components/Common/Cards'
const Getstart = () => {
  return (
    <div className='Getstartedsec'>
        <h1>How to Get Started</h1>
        <p className='buyoinpara'>BuyCoin template</p>
        <div className="threedivs">
            <Cards idx={0}/>
            <Cards idx={1}/>
            <Cards idx={2}/>
        </div>
    </div>
  )
}
export default Getstart