import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import pastorImg from '../../assets/images/WelcomeImg.jpg'
import waveImg from '../../assets/images/Group 3.png'

const Welcome = () => {
  return (
    <section className="py-16 bg-[#F3F4F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Container */}
        <div className="relative bg-brand-blue text-white rounded-3xl overflow-hidden shadow-xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 relative z-10">
            {/* Welcome Home Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs font-semibold tracking-wider text-white/95"
            >
              Welcome Home
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight"
            >
              Welcome to RCCG Rehoboth Parish
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base leading-relaxed font-light"
            >
              At RCCG Rehoboth Parish, we are a Christ-centered family committed to knowing God, growing in faith, and sharing His love with our community and the world. Through worship, prayer, fellowship, and the teaching of God's Word, we seek to raise a generation that reflects Christ and lives with purpose.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-full text-brand-dark bg-white hover:bg-gray-100 shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 text-brand-dark" />
              </a>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-4 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm max-w-[380px] w-full"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 relative z-10 aspect-[4/5] bg-[#3B357A]">
                <img 
                  src={pastorImg} 
                  alt="No Image" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>

          <div 
            className="absolute bottom-0 left-0 w-full h-6 pointer-events-none select-none"
            style={{
              backgroundImage: `url('${waveImg}')`,
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'bottom center',
              backgroundSize: 'auto 30px'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Welcome
