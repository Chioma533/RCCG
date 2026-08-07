import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Play } from 'lucide-react'
import heroBg from '../../assets/images/Hero.jpg'

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${heroBg}')` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        {/* Arlington Texas Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-8"
        >
          <MapPin className="h-4.5 w-4.5 text-red-500 fill-red-500" />
          <span className="text-sm font-medium tracking-wide">Arlington, Texas</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl"
        >
          Welcome to RCCG <br />
          <span className="text-white">Rehoboth Parish</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg lg:text-xl text-gray-200/90 font-normal max-w-2xl leading-relaxed mb-10"
        >
          Experience God's presence, grow in faith, and become part of a loving church family.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#join"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-full text-white bg-brand-blue hover:bg-opacity-95 shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            Plan a visit
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#live"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/80 text-base font-semibold rounded-full text-white hover:bg-white hover:text-brand-dark transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm bg-white/5"
          >
            Watch Live
            <Play className="ml-2 h-4 w-4 fill-current" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
