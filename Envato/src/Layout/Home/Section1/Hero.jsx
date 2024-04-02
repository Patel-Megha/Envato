import React from 'react'
import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
const Hero = () => {
    return (
        <div className='Heroseection_main'>
            <div className="Hero_first_Buycoin">
                <p className='buycointext'>BuyCoin Blockchain</p>
                <p>Secure & Easy Way To Trade</p>
                <div className="hero_buttons">
                    <button className='getstarted'>GET STARTED</button>
                    <button className='whitepaper'>WHITEPAPER</button>
                </div>
            </div>
            <div className="Hero_twobuycoin_ico">
                <div className="hero_form">
                    <div className="hero_heading">
                        <h1>BuyCoin ICO:</h1>
                        <p>Discount 33% from final price</p>
                    </div>
                    <div className="progressbardiv">
                        <div className="progress_bar">
                        </div>
                        <div className="mb_text">
                            <h6>12M USD</h6>
                        </div>
                    </div>
                    <p>Fixed token edition 3.000.000 BITS</p>
                    <button className='buytokens'>Buy Tokens</button>
                    <div className="icons">
                        <SiVisa className='reacticons' />
                        <FaCcMastercard className='reacticons' />
                        <FaCcPaypal className='reacticons' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero