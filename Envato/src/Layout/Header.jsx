import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import logo2 from '../assets/logo--dark.svg'
import { IoMdMenu } from "react-icons/io";
const Header = () => {
    const [colorchange, setColorchange] = useState(false)
    const changeBg = () => {
        if (window.scrollY >= 50) {
            setColorchange(true)
        }
        else {
            setColorchange(false)
        }
    }
    window.addEventListener("scroll", changeBg)
    return (
        <div className={colorchange ? "Navbar_main colorchange" : "Navbar_main"}>
            <div className="menu_btn">
                <IoMdMenu />
            </div>
            <div className="navbar_logo">{colorchange ? <img src={logo2} alt="" /> : <img src={logo} alt="" />}
            </div>
            <div className="navbar_content">
                <p>BuyCoin</p>
                <p>Landing Page</p>
            </div>
            <div className="navbar_features">
                <a href="#home" className='links'>Home</a>
                <a href="#template" className='links' >Features</a>
                <a href="#safety" className='links'>Safety</a>
                <a href="" className='links'>Blog</a>
                <a href="" className='links'>Contact</a>
            </div>
            <div className="nav_signupbutton">
                <button>Sign In</button>
            </div>

        </div>
    )
}
export default Header