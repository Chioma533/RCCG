import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Volume2, Maximize, X, ArrowRight } from 'lucide-react'
import { Images } from '../constants/images'

const Sermons = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeSermon, setActiveSermon] = useState(null)

  const exploreSermons = [
    {
      title: 'Dealing with lust as a youth',
      preacher: 'Pastor Cynthia',
      date: 'Sunday, Jun 30 2026',
      img: Images.volunteerImg
    },
    {
      title: 'Dealing with lust as a youth',
      preacher: 'Pastor Cynthia',
      date: 'Sunday, Jun 30 2026',
      img: Images.volunteerImg
    },
    {
      title: 'Dealing with lust as a youth',
      preacher: 'Pastor Cynthia',
      date: 'Sunday, Jun 30 2026',
      img: Images.volunteerImg
    }
  ]

  const handlePlaySermon = (sermon) => {
    setActiveSermon(sermon)
    setIsPlaying(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${Images.aboutHeroBg}')` }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 px-5 py-1.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase"
          >
            Sermons & Messages
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7.5xl font-serif font-bold text-white mb-6 tracking-tight leading-tight max-w-4xl"
          >
            Grow Through God's Word
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-sm sm:text-base lg:text-lg mb-8 font-light max-w-2xl leading-relaxed"
          >
            Watch and listen to messages from RCCG Rehoboth Parish and stay connected with God's Word wherever you are.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#2B1B67] hover:bg-[#1E124B] shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Plan a visit
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <button
              onClick={() => handlePlaySermon({
                title: 'How to upgrade your finance in a christlike way',
                preacher: 'Pastor Kola Adeleke'
              })}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-white/60 bg-transparent hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              Watch Live
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Latest Sermon Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Latest Sermon
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light">
              Catch up with the latest sermon and be blessed through the teachings
            </p>
          </div>

          {/* Large Video Player Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-black border-4 border-white pb-8"
          >
            {/* Thumbnail Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-102"
              style={{ backgroundImage: `url('${Images.aboutHeroBg}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 z-0" />

            {/* Red Play Button in Center */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePlaySermon({
                  title: 'How to upgrade your finance in a christlike way',
                  preacher: 'Pastor Kola Adeleke'
                })}
                className="w-16 h-12 sm:w-20 sm:h-14 bg-red-600 hover:bg-red-700 rounded-2xl flex items-center justify-center text-white shadow-xl transition-colors cursor-pointer"
              >
                <Play className="h-6 w-6 fill-current ml-0.5" />
              </motion.button>
            </div>

            {/* Bottom Title & Preacher Overlays */}
            <div className="absolute bottom-10 left-0 w-full px-6 z-10 flex flex-col items-center gap-3">
              <div className="px-6 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-center max-w-lg">
                <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                  Topic: How to upgrade your finance in a christlike way
                </span>
              </div>
              <div className="text-white/80 text-xs tracking-wider">
                Preacher: Pastor Kola Adeleke
              </div>
            </div>

            {/* Repeating Wave Border Ornament at bottom */}
            <div 
              className="absolute bottom-0 left-0 w-full h-8 pointer-events-none select-none z-20"
              style={{
                backgroundImage: `url('${Images.wavePattern}')`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'bottom center',
                backgroundSize: 'auto 20px',
                filter: 'brightness(0) invert(1)'
              }}
            />
          </motion.div>

        </div>
      </section>

      {/* 3. Explore Our Messages Section */}
      <section className="py-20 bg-[#F9FAFB] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Explore Our Messages
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light">
              We'd love to worship with you. Join us in person or online throughout the week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exploreSermons.map((sermon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100/60 p-4 space-y-4"
              >
                {/* Thumbnail Preview with Play Icon Overlay */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-gray-100 group cursor-pointer"
                  onClick={() => handlePlaySermon(sermon)}
                >
                  <img 
                    src={sermon.img} 
                    alt={sermon.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1 pb-2">
                  <h4 className="text-base font-serif font-bold text-gray-900 line-clamp-2">
                    {sermon.title}
                  </h4>
                  <div className="text-xs text-gray-500 font-medium">
                    {sermon.preacher}
                  </div>
                  <div className="text-[11px] text-gray-400">
                    {sermon.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Never Miss a Message (YouTube Callout) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-red-500 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-lg"
          >
            {/* Background vector circle accent */}
            <div className="absolute -right-10 -bottom-10 w-96 h-96 rounded-full bg-red-600/35 pointer-events-none" />

            {/* Left Content */}
            <div className="w-full lg:w-3/5 space-y-6 relative z-10 flex flex-col items-start">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Never Miss a Message
              </h2>
              <p className="text-white/95 text-sm sm:text-base leading-relaxed font-light">
                Catch our latest livestreams, sermons, and worship experiences on our YouTube channel.
              </p>
              <div>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-red-600 hover:bg-gray-50 rounded-2xl text-sm font-bold shadow-md active:scale-98 transition-all"
                >
                  Go To Youtube
                  {/* YouTube Custom Icon */}
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.522 3.5 12 3.5 12 3.5s-7.522 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.478 20.5 12 20.5 12 20.5s7.522 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.971 24 12 24 12s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Photo Sliced Container */}
            <div className="w-full lg:w-2/5 flex justify-center relative z-10">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white/20 overflow-hidden bg-red-600 shadow-inner flex items-center justify-center">
                <img 
                  src={Images.pastorImg} 
                  alt="Pastor preaching" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal (Simulated Playback) */}
      <AnimatePresence>
        {isPlaying && activeSermon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 p-2 focus:outline-none"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-[16/9] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-white bg-[#2B1B67]/20 p-6 text-center">
                <p className="text-lg font-semibold mb-2">Playing Sermon Video...</p>
                <p className="text-sm text-gray-400 font-light mb-8">"{activeSermon.title}"</p>
                
                {/* Audio pulsing waves */}
                <div className="flex space-x-1.5 items-end h-8">
                  <span className="w-1 bg-red-500 rounded-full animate-[pulse_1s_infinite_100ms] h-4"></span>
                  <span className="w-1 bg-red-500 rounded-full animate-[pulse_1s_infinite_200ms] h-8"></span>
                  <span className="w-1 bg-red-500 rounded-full animate-[pulse_1s_infinite_300ms] h-6"></span>
                  <span className="w-1 bg-red-500 rounded-full animate-[pulse_1s_infinite_400ms] h-2"></span>
                  <span className="w-1 bg-red-500 rounded-full animate-[pulse_1s_infinite_500ms] h-7"></span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center text-xs text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Volume2 className="h-4 w-4" />
                    <span>0:05 / 55:20</span>
                  </div>
                  <Maximize className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Sermons
