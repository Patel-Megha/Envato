import React from 'react'

const UsdCard = (props) => {
    let BTC = [
        "Get 0.0082 BTC",
        "Get 0.0165 BTC",
        "Get 0.0412 BTC",
        "Get 0.0825 BTC",
    ];
    let doller = ["$100", "$200", "$500" , "$1000"];
    return (
        <div className='usdcardmain'>
            <p className='BTC'>{BTC[props.idx]}</p>
            <p>For</p>
            <p className='doller'>{doller[props.idx]}</p>
            <button>BUY</button>
        </div>
    )
}
export default UsdCard