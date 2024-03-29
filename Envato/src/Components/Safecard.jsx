import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";
import { TbLicense } from "react-icons/tb";
import { CiCoins1 } from "react-icons/ci";
const Safecard = (props) => {
    let h1 = ["Security", "License" , "Result"];
    let desc = ["It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
];
let icons = [<MdOutlineSecurity /> ,<TbLicense />, <CiCoins1 /> ]
  return (
    <div className='safecard_section'>
        <p className='icons'>{icons[props.idx]}</p>
        <p className='h1'>{h1[props.idx]}</p>
        <p className='desc'>{desc[props.idx]}</p>
    </div>
  )
}
export default Safecard