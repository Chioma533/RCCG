import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Volume2, Maximize, X } from 'lucide-react'
import BibleImg from "../../assets/images/Bible.png";
import waveImg from '../../assets/images/Group 3.png'
import sermonPlaceholderBg from '../../assets/images/Sermon1.jpg'

const LatestSermon = () => {
  const youTubeChannelUrl = "https://www.youtube.com/@rccgrehobothtx/streams"; 

  return (
    <section
      id="sermons"
      className="py-24 bg-[#FAF9F6] relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] bg-no-repeat bg-contain opacity-[0.5] pointer-events-none translate-x-20 -translate-y-10 select-none z-0"
        style={{ backgroundImage: `url('${BibleImg}')` }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-black border-4 border-white"
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
            <motion.a
              href={youTubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Watch live sermons on YouTube"
              className="w-16 h-11 sm:w-20 sm:h-14 bg-[#FF0000] hover:bg-[#CC0000] rounded-2xl flex items-center justify-center text-white shadow-xl transition-colors cursor-pointer border border-transparent focus:outline-none"
            >
              <Play className="h-6 w-6 fill-current ml-0.5" />
            </motion.a>
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
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom center",
          backgroundSize: "auto 30px",
        }}
      />
    </section>
  );
}

export default LatestSermon
