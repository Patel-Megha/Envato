import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import logo2 from '../../assets/logo--dark.svg'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
const Header = () => {
    const [showmenu, setShowmenu] = useState(false)
    const [colorchange, setColorchange] = useState(false)
    const changeBg = () => {
        if (window.scrollY >= 30) {
            setColorchange(true)
        }
        else {
            setColorchange(false)
        }
    }
    window.addEventListener("scroll", changeBg)
    return (
        <div className={colorchange ? "Navbar_main colorchange" : "Navbar_main"}>

            <div className="navbar_logo">{colorchange ? <img src={logo2} alt="" /> : <img src={logo} alt="" />}
            </div>
            <div className="navbar_content">
                <p>BuyCoin</p>
                <p>Landing Page</p>
            </div>
            <div className={showmenu ? "navbar_features showmenu" : "navbar_features"}>
                {/* "navbar_features" */}

                <a href="#home" className='links'>Home</a>
                <a href="#template" className='links' >Features</a>
                <a href="#safety" className='links'>Safety</a>
                <a href="" className='links'>Blog</a>
                <a href="#getintouch" className='links'>Contact</a>
            </div>
            <div className="nav_signupbutton">
                <button>Sign In</button>
            </div>
            {showmenu ?
                <div className="menu_btn" onClick={() => setShowmenu(!showmenu)}>
                    <IoClose />
                </div> :
                <div className="menu_btn" onClick={() => setShowmenu(!showmenu)}>
                    <IoMdMenu />
                </div>
            }

        </div>
    )
}
export default Header