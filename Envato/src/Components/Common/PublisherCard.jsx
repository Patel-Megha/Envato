import React from 'react'
import one from '../../assets/1.jpg'
import two from '../../assets/2.jpg'
import three from '../../assets/3.jpg'

const PublisherCard = (props) => {
    let img = [
        <img src={one} alt="" height={200}/>,
        <img src={two} alt="" height={200}/>,
        <img src={three} alt="" height={200}/>
    ];
    let pub_heading = ["Blockchain","Buy Coin listing","Business"];
    let pub_desc = ["There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form..",
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing...",
    "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.."
];
  return (
    <div className='Publishercard_section'>
        <p className='img_card'>{img[props.idx]}</p>
        {/* <img src={img[props.idx]} alt="" /> */}
        <p className='heading_card'>{pub_heading[props.idx]}</p>
        <p className='desc_card'>{pub_desc[props.idx]}</p>
        <div className="last_sec">
        <p>by Admin</p>
        <p>26.08.2020</p>
        </div>
    </div>
  )
}
export default PublisherCard