import React from 'react'

const Cards = (props) => {
    let descriptions = [
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.",
    ];
    let num = ["01", "02", "03"];
    let headings = ["Sign up for BuyCoin","Connect your bank account","Buy and sell coins"];
    return (
        <div className='cardsmain'>
            <p className='num'>{num[props.idx]}</p>
            <p className='headings'>{headings[props.idx]}</p>
            <p className='descriptions'>{descriptions[props.idx]}</p>
        </div>
    )
}
export default Cards



