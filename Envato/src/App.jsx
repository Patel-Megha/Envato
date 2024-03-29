import React from 'react'
import Header from './Layout/Header'
import Section1 from './pages/Section1'
import Section2 from './pages/Section2'
import Getstart from './pages/Getstart'
import Section4 from './pages/Section4'
import Section5 from './pages/Section5'
import Roadmap from './pages/Roadmap'
import HowitWorks from './pages/HowitWorks'
import Safeitspage from './pages/Safeitspage'
import TempFeature from './pages/TempFeature'
import Countpage from './pages/Countpage'
import Advisor from './pages/Advisor'
import Ourteam from './pages/Ourteam'
import Tabchange from './pages/Tabchange'
import Faqsec from './pages/Faqsec'

const App = () => {
  return (
    <div>
      <Section1/>
      <Section2/>
      <Getstart/>
      <Tabchange/>
      {/* <Section4/> */}
      <Section5/>
      <Roadmap/>
      <HowitWorks/>
      <Safeitspage/>
      <TempFeature/>
      <Countpage/>
      <Advisor/>
      <Ourteam/>
     <Faqsec/>
    </div>
  )
}
export default App