import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Video, ArrowRight } from 'lucide-react'
import logoImg from '../../assets/images/Logo.png'
import worshipImg from '../../assets/images/Ellipse 1.png'
import bibleImg from '../../assets/images/Ellipse 1 (1).png'
import prayerImg from '../../assets/images/volunteer.png' // using volunteer image as a beautiful placeholder/alternative for prayer card if not separate

const JoinUs = () => {
  const cards = [
    {
      title: 'Sunday Worship',
      image: worshipImg,
      buttonText: 'Plan your visit',
      link: '/contact',
      schedule: [
        { label: 'Sunday School', value: '10:00 AM - 10:45 AM' },
        { label: 'Celebration Service', value: '10:45 AM - 12:00 PM' }
      ]
    },
    {
      title: 'Bible Study',
      image: bibleImg,
      buttonText: 'Join Bible study',
      link: '/ministries',
      schedule: [
        { label: 'Tuesday', value: '7:00 PM - 8:00 PM' },
        { label: 'Location', value: 'Online via Zoom', isLink: true }
      ]
    },
    {
      title: 'Prayer Service',
      image: prayerImg,
      buttonText: 'Plan your visit',
      link: '/contact',
      schedule: [
        { label: 'Thursday', value: '7:00 PM - 8:00 PM' },
        { label: 'Location', value: 'Church Auditorium' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="join" className="relative py-24 bg-[#FAF9F6] overflow-hidden">
      {/* RCCG Watermark Logo on Top Right */}
      <div 
        className="absolute top-0 right-0 w-[450px] h-[450px] bg-no-repeat bg-contain opacity-[0.03] pointer-events-none translate-x-20 -translate-y-20 select-none z-0"
        style={{ backgroundImage: `url('${logoImg}')` }}
      />

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
            Join Us This Week
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-sm sm:text-base"
          >
            We'd love to worship with you. Join us in person or online throughout the week.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Image with curved bottom mask */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
                    idx === 2 ? 'rounded-b-[20%]' : '' // apply bottom curve manually for prayerImg since it is not an ellipse crop
                  }`}
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Title & Small CTA Button */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900">{card.title}</h3>
                  <button className="text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-blue/5 text-brand-blue hover:bg-brand-blue/10 transition-colors">
                    {card.buttonText}
                  </button>
                </div>

                {/* Schedule details */}
                <div className="space-y-4 flex-grow">
                  {card.schedule.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className={`flex justify-between items-center py-2.5 ${
                        itemIdx < card.schedule.length - 1 ? 'border-b border-gray-100' : ''
                      }`}
                    >
                      <span className="text-sm font-medium text-gray-500">{item.label}</span>
                      <span className={`text-sm font-semibold text-gray-800 text-right ${
                        item.isLink ? 'text-brand-blue flex items-center hover:underline cursor-pointer' : ''
                      }`}>
                        {item.isLink && <Video className="h-4 w-4 mr-1.5 inline" />}
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default JoinUs
