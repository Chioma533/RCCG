import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Ministries from './Pages/Ministries'
import Sermons from './Pages/Sermons'
import OurLeaders from './Pages/OurLeaders'
import Contact from './Pages/Contact'
import Donate from './Pages/Donate'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/our-leaders" element={<OurLeaders />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App