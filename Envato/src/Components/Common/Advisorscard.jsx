import React from 'react'
import member1 from '../../assets/member.png'
import member2 from '../../assets/member4.png'
import member3 from '../../assets/member5.png'
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Advisorscard = (props) => {
    let name = [" Santiago Robinson","Tony Young ", " Marsha Lee"];
    let bio = ["GP & LP Investor ", " Business developer", "Community manager "];
    let profile = [
        <img src={member1} alt="" height={300}/>,
        <img src={member2} alt="" height={300}/>,
        <img src={member3} alt="" height={300}/>
    ]
    let socialicon = [
      <IoLogoInstagram />, <FaLinkedin />,<FaFacebook />,<FaTwitter />
    ]
  return (
    <div className='Advisorscard'>
        <p className='advisor_name'>{name[props.idx]}</p>
        <p className='advisor_bio'>{bio[props.idx]}</p>
        <p className='advisor_profile'>{profile[props.idx]}</p>
        {/* <p className='social_icon'> {socialicon[props.idx]}</p> */}
    </div>
  )
}
export default Advisorscard