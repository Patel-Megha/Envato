import React from 'react'
import Home from './pages/Dashboardpages/Home'
import Features from './pages/Dashboardpages/Features'
import Safety from './pages/Dashboardpages/Safety'
import Blog from './pages/Dashboardpages/Blog'
import Contact from './pages/Dashboardpages/Contact'
const App = () => {
  return (
    <div>
      <Home />
      <Features />
      <Safety />
      <Blog/>
      <Contact/>
    </div>
  )
}
export default App