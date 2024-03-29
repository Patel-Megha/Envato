import React from 'react'
import { CiMicrochip } from "react-icons/ci";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { LiaServerSolid } from "react-icons/lia";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { HiBanknotes } from "react-icons/hi2";
import money from "../assets/money.svg"
const Buycoincard = (props) => {
    let description = [
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.",
        "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
        "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    ];
    let heading = ["Modern design", "Easy customize", "Clean code", "Fully responsive", "Color scheme", "Excellent purchase"];
    let images = [<CiMicrochip />, <AiOutlineFundProjectionScreen />, <MdOutlineSignalCellularAlt />, <LiaServerSolid />, <AiOutlinePieChart />, <HiBanknotes />
    ]
    return (
        <div className='cardsmainsec'>
            <p className='images'>{images[props.idx]}</p>
            <p className='heading'>{heading[props.idx]}</p>
            <p className='description'>{description[props.idx]}</p>
        </div>
    )
}
export default Buycoincard