import React from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footer_sec'>
        <h1>Subscribe for Our Newsletter</h1>
        <div className="input">
        <input type="text" placeholder='Enter Your E-mail address' />
        
        {/* <AiOutlineSend className='send_icon'/> */}
        </div>
        <div className="insta_icons">
        <IoLogoInstagram style={{color:'purple'}}/>
        <FaLinkedin style={{color:'#318CE7'}}/>
        <FaFacebook style={{color:'#0066b2'}}/>
        <FaTwitter style={{color:'#3457D5'}}/>
        </div>
        <p>© BuyCoin, 2018—2021. Create by Dmitry Volkov.</p>
    </div>
  )
}
export default Footer