import React from 'react'
import PublisherCard from '../../Components/Common/PublisherCard'
const Publishers = () => {
  return (
    <div className='publication_section'>
        <h1>Blog</h1>
        <p className='publication_para'>Our publications</p>
        <div className="publication_cards">
            <PublisherCard idx={0}/>
            <PublisherCard idx={1}/>
            <PublisherCard idx={2}/>
        </div>
    </div>
  )
}
export default Publishers