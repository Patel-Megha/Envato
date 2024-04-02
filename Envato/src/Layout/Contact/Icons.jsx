import React from 'react'
import iconeone from '../assets/activeden-light-background.png'
import iconetwo from '../assets/audiojungle-light-background.png'
import iconthree from '../assets/codecanyon-light-background.png'
import iconfour from '../assets/graphicriver-light-background.png'
import iconfive from '../assets/photodune-light-background.png'
const Icons = () => {
  return (
    <div className='icons_div'>
        <div className="videos_images">
            <img src={iconeone} alt="" />
            <img src={iconetwo} alt="" />
            <img src={iconthree} alt="" />
            <img src={iconfour} alt="" />
            <img src={iconfive} alt="" />
        </div>
    </div>
  )
}

export default Icons