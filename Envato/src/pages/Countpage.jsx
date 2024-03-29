import React from 'react'
import background from '../assets/section-bg3.jpg'
const Countpage = () => {
  return (
    <div className='count_section' style={{background: `url(${background})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
        <div className="gradient_image">

        </div>
        <div className="text_section">
            <div className="one">
              <h1>5.7</h1>
              <p>MLN TRANSACTIONS</p>
            </div>
            <div className="one">
              <h1>70</h1>
              <p>ONLINE CONSULTANTS</p>
            </div>
            <div className="one">
              <h1>23</h1>
              <p>COUNTRIES SERVED</p>
            </div>
            <div className="one">
              <h1>2.5</h1>
              <p>MLN BITCOIN WALLETS</p>
            </div>
        </div>
    </div>
  )
}

export default Countpage