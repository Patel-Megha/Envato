import React from 'react'

const Roadmap = () => {
  return (
    <div className='roadmap_section'>
      <h1>Roadmap</h1>
      <p className='thornytext'>Thorny path</p>
      <div className="roadmap_timeline">
        <ol>
          <li><p>Project start-up. Product conception. System architecture development.</p></li>
          <li><p>Connection to stock exchanges. Development of trading platform and the system’s core elements</p></li>
          <li><p>Test environment launch for algorithm creators. Development of the first algorithms.</p></li>
          <li><p>Tradingene public product launch for algorithm creators. Broadening of financial instruments for algorithm creation.</p></li>
          <li><p>Development of user interface prototype for investors.</p></li>
        </ol>
      </div>
      <div className="purchase_button">
      <button>Purchase Now</button>
      </div>
    </div>
  )
}
export default Roadmap