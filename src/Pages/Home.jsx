import React from 'react'
import Hero from '../components/home/Hero'
import JoinUs from '../components/home/JoinUs'
import Welcome from '../components/home/Welcome'
import AboutUs from '../components/home/AboutUs'
import LatestSermon from '../components/home/LatestSermon'
import Ministries from '../components/home/Ministries'
import Volunteer from '../components/home/Volunteer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <JoinUs />
      <Welcome />
      <AboutUs />
      <LatestSermon />
      <Ministries />
      <Volunteer />
    </div>
  )
}

export default Home
