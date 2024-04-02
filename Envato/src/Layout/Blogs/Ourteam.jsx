import React, { useState } from 'react'
import member6 from '../assets/member6.png'
import member3 from '../assets/member3.png'
import member7 from '../assets/member7.png'
import member2 from '../assets/member2.png'
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Ourteam = () => {
    const [showmedia, setShowmedia] = useState(false)
    return (
        <div className='ourteam_section'>
            <h1>Our Team</h1>
            <p className='ourteam_para'>We are proud of our great team. He is one of the most motivated and is always ready and willing to help out where needed.</p>
            <div className="hide">
                <ul>
                    <li className='instagram'><IoLogoInstagram /></li>
                    <li className='linkedin'><FaLinkedin /></li>
                    <li className='facebook'><FaFacebook /></li>
                    <li className='twitter'><FaTwitter /></li>
                </ul>
            </div>
            <div className="team_cards">
                <div className="member1_card">
                    <p>Roland Samuel</p>
                    <p>CEO</p>
                    <img src={member6} alt="" height={200} />
                </div>
                <div className="member1_card">
                    <p>David Drake</p>
                    <p>Head of marketing</p>
                    <img src={member3} alt="" height={200} />
                </div>
                <div className="member1_card">
                    <p>Sandra Pen</p>
                    <p>App developer</p>
                    <img src={member7} alt="" height={200} />
                </div>
                <div className="member1_card">
                    <p>John Smith</p>
                    <p>Manager</p>
                    <img src={member2} alt="" height={200} />
                </div>
            </div>
        </div>
    )
}
export default Ourteam