import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Volume2, Maximize, X } from 'lucide-react'
import waveImg from '../../assets/images/Group 3.png'
import sermonPlaceholderBg from '../../assets/images/Hero.jpg' // using Hero image as a high-quality fallback thumbnail

const LatestSermon = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="sermons" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      
      {/* Visual background lines / overlays */}
      <div className="absolute left-0 top-1/4 w-32 h-64 border-l border-t border-brand-blue/10 rounded-tr-3xl pointer-events-none opacity-30" />
      <div className="absolute right-0 top-10 w-48 h-48 border-r border-b border-brand-blue/10 rounded-bl-3xl pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4"
          >
            Latest Sermon & Livestream
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-sm sm:text-base"
          >
            Experience God's Word Anytime, Anywhere
          </motion.p>
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-black border-4 border-white"
        >
          {/* Video Thumbnail (Pre-play) */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-102"
            style={{ backgroundImage: `url('${sermonPlaceholderBg}')` }}
          />
          {/* Overlay to dim thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 z-0" />

          {/* Red Play Button in Center */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              className="w-16 h-11 sm:w-20 sm:h-14 bg-[#FF0000] hover:bg-[#CC0000] rounded-2xl flex items-center justify-center text-white shadow-xl transition-colors cursor-pointer border border-transparent focus:outline-none"
            >
              <Play className="h-6 w-6 fill-current ml-0.5" />
            </motion.button>
          </div>

          {/* Bottom Topic Overlay */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto z-10">
            <div className="px-6 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-center">
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide block sm:inline">
                Topic: How to upgrade your finance in a christlike way
              </span>
            </div>
          </div>

          {/* Simulated Video Player Controls bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-10" />
        </motion.div>
      </div>

      {/* Repeating Wave Border Ornament at bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full h-8 pointer-events-none select-none"
        style={{
          backgroundImage: `url('${waveImg}')`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom center',
          backgroundSize: 'auto 20px'
        }}
      />

      {/* Video Modal (Simulated Playback) */}
      <AnimatePresence>
        {isPlaying && (
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
              {/* Embed an empty or looping screen with sound controls */}
              <div className="w-full h-full flex flex-col items-center justify-center text-white bg-brand-blue/20">
                <p className="text-lg font-semibold mb-2">Streaming Latest Sermon...</p>
                <p className="text-sm text-gray-400">"How to upgrade your finance in a christlike way"</p>
                
                {/* Audio waves */}
                <div className="flex space-x-1.5 mt-8 items-end h-8">
                  <span className="w-1 bg-white rounded-full animate-[pulse_1s_infinite_100ms] h-4"></span>
                  <span className="w-1 bg-white rounded-full animate-[pulse_1s_infinite_200ms] h-8"></span>
                  <span className="w-1 bg-white rounded-full animate-[pulse_1s_infinite_300ms] h-6"></span>
                  <span className="w-1 bg-white rounded-full animate-[pulse_1s_infinite_400ms] h-2"></span>
                  <span className="w-1 bg-white rounded-full animate-[pulse_1s_infinite_500ms] h-7"></span>
                </div>

                {/* Simulated playback details */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center text-xs text-gray-300">
                  <div className="flex items-center space-x-3">
                    <button className="hover:text-white"><Volume2 className="h-4 w-4" /></button>
                    <span>0:45 / 45:12</span>
                  </div>
                  <button className="hover:text-white"><Maximize className="h-4 w-4" /></button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default LatestSermon
