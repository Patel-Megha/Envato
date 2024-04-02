import React from 'react'
import bg from '../../assets/section-bg2.jpg'
import { CiPlay1 } from "react-icons/ci";
const HowitWorks = () => {
  return (
    <div className='Howitworkssection' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="imagesection">
      </div>
      <div className="image_text">
        <button><a href="https://vimeo.com/45830194">
						<CiPlay1 className='playbuttonicon' /></a>

        </button>
        <h1>How it Works ?</h1>
        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>
    </div>
  )
}
export default HowitWorks