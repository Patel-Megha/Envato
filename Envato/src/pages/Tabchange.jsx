import React, { useState } from 'react'
import Section4 from './Section4'
import Content1 from '../Layout/Content1'
import Section2 from './Section2'
import Content2 from '../Layout/Content2'

const Tabchange = () => {
    const [activetabs, setActivetabs] = useState(0)
    const tabs = [
        { title: 'USD', content: <Content1 /> },
        { title: 'EUR', content: <Content2 /> },
        { title: 'GBP', content: <Content1 /> },
        { title: 'RUB', content: <Content2 /> },
    ]
    const handleclick = (index) => {
        setActivetabs(index);
    }
    const renderTabs = () => {
        return tabs.map((tab, index) => (
            <button
                key={index}
                onClick={() => handleclick(index)}
                className={activetabs === index ? 'active' : ''}
            >
                {tab.title}
            </button>
        ));
    };
    return (
        <div className='tabchange_sec'>
            <div className="tabchange_headings">
                {renderTabs()}
            </div>
            <div className="tab_content_div">
            <div className="tab-content">{tabs[activetabs]?.content}</div>
            </div>
        </div>
    )
}
export default Tabchange