import React from 'react'
import { TiLocationOutline } from "react-icons/ti";
import { FaRegClock } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { CiMobile2 } from "react-icons/ci";
const Getintouch = () => {
    return (
        <div className='getintouch_sec' id='getintouch'>
            <h1>Get in Touch</h1>
            <p className='getin_firstpara'>We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below.</p>
            <div className="Get_main">
                <div className="getintouch_first">
                    <div className="first">
                        <div className="icon">
                            <TiLocationOutline />
                        </div>
                        <div className="icon_para">
                            <p>The BuyCoin Company, LLC</p>
                            <p>32 Barnard St. #145, GA 80634</p>
                        </div>
                    </div>
                    <div className="first">
                        <div className="icon">
                            <FaRegClock />
                        </div>
                        <div className="icon_para">
                            <p>The BuyCoin Company, LLC</p>
                            <p>32 Barnard St. #145, GA 80634</p>
                        </div>
                    </div>
                    <div className="first">
                        <div className="icon">
                            <CgMail />
                        </div>
                        <div className="icon_para">
                            <p>support@BuyCoin.template kjh</p>
                        </div>
                    </div>
                    <div className="first">
                        <div className="icon">
                            <CiMobile2 />
                        </div>
                        <div className="icon_para">
                            <p>32 Barnard St. #145, GA 80634</p>
                        </div>
                    </div>
                </div>

                <div className="getintouch_second">
                    <input type="text" name="" id="" placeholder='Name'/>
                    <input type="text" name="" id="" placeholder='Email'/>
                    <textarea 
                    rows={10} placeholder='Message'></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Getintouch