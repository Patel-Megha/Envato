import React from 'react'
import Advisorscard from '../Components/Advisorscard'

const Advisor = () => {
  return (
    <div className='advisor_section'>
        <h1>Advisors</h1>
        <p className='advisor_text'>We are proud of our great team. He is one of the most motivated and is always ready and willing to help out where needed.</p>
        <div className="profilecards">
            <Advisorscard idx={0}/>
            <Advisorscard idx={1}/>
            <Advisorscard idx={2}/>
        </div>
    </div>
  )
}
export default Advisor