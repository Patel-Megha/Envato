import React from 'react'
import background from '../assets/section-bg3.jpg'
import CountUp from 'react-countup';
const Countpage = () => {
  return (
    <div className='count_section' style={{ background: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className="gradient_image">
      </div>
      <div className="text_section">
        <div className="one">
          <h1> 
            <CountUp
            end={100}
            duration={15}
          />
          </h1>
          <p>MLN TRANSACTIONS</p>
        </div>
        <div className="one">
          <h1>
          <CountUp
            end={20.5}
            duration={10}
          />
          </h1>
          <p>ONLINE CONSULTANTS</p>
        </div>
        <div className="one">
          <h1>
          <CountUp
            end={150}
            duration={15}
          />
          </h1>
          <p>COUNTRIES SERVED</p>
        </div>
        <div className="one">
          <h1>
          <CountUp
            end={50}
            duration={15}
          />
          </h1>
          <p>MLN BITCOIN WALLETS</p>
        </div>
      </div>
    </div>
  )
}
export default Countpage