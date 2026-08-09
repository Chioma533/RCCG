import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Images } from '../constants/images'

const OurLeaders = () => {
  const leaders = [
    {
      name: 'Pastor Kola Adeleke',
      role: 'Pastor-in-Charge',
      description: 'Pastor Kola serves as the leading shepherd of RCCG Rehoboth Parish. Devoted to prayer, sound biblical teachings, and local community transformation, he guides the congregation with love, wisdom, and deep faith.',
      img: Images.pastorImg
    },
    {
      name: 'Pastor Cynthia',
      role: 'Associate Pastor',
      description: 'Pastor Cynthia coordinates youth ministries and outreach initiatives. She is passionate about helping young adults discover their purpose, build authentic relationships, and grow in their walk with Christ.',
      img: Images.volunteerImg
    }
  ]

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
            Our Leaders
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7.5xl font-serif font-bold text-white mb-6 tracking-tight leading-tight max-w-4xl"
          >
            OUR LEADERS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-sm sm:text-base lg:text-lg mb-8 font-light max-w-2xl leading-relaxed"
          >
            Devoted shepherds serving God and His people with love, wisdom, and humility.
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
            <a
              href="/contact#contact-info"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-white/60 bg-transparent hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Leaders Grid Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 justify-items-center">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-gray-100 shadow-sm rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center space-y-6 max-w-[440px] w-full"
              >
                {/* Profile Photo */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-gray-100 shadow-md overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img 
                    src={leader.img} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-gray-900">
                    {leader.name}
                  </h3>
                  <div className="px-3.5 py-1 bg-[#2B1B67]/5 text-[#2B1B67] rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                    {leader.role}
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                  {leader.description}
                </p>

                {/* Quick actions info */}
                <div className="flex gap-4 pt-4 border-t border-gray-100 w-full justify-center">
                  <a 
                    href="/contact" 
                    className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors"
                    title="Send Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a 
                    href="/contact" 
                    className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors"
                    title="Call Church Office"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}

export default OurLeaders
