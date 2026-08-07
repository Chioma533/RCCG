import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import choirImg from '../../assets/images/choir.jpg'
import mediaImg from '../../assets/images/media.png'
import childrenImg from '../../assets/images/children.png'

const Ministries = () => {
  const ministriesList = [
    {
      title: 'The Choir',
      image: choirImg,
      description: 'Our choir leads worship through music, creating an atmosphere for encountering God\'s presence.',
      bgColor: 'bg-[#FEF5EA]', // Peach
      btnColor: 'border-[#F59E0B] text-[#D97706] hover:bg-[#F59E0B]/5'
    },
    {
      title: 'Media & Technology',
      image: mediaImg,
      description: 'Managing sound, visuals, livestream, photography, and digital content to help spread the Gospel in person and online',
      bgColor: 'bg-[#F2F0F8]', // Lavender
      btnColor: 'border-[#6366F1] text-[#4F46E5] hover:bg-[#6366F1]/5'
    },
    {
      title: 'Children\'s Church',
      image: childrenImg,
      // Replicating mockup exactly: "Our choir leads worship..."
      description: 'Our choir leads worship through music, creating an atmosphere for encountering God\'s presence.',
      bgColor: 'bg-[#FEF5EA]', // Peach
      btnColor: 'border-[#F59E0B] text-[#D97706] hover:bg-[#F59E0B]/5'
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
    <section 
      id="ministries" 
      className="relative py-24 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('${choirImg}')` }}
    >
      {/* Dark Purple/Indigo Overlay */}
      <div className="absolute inset-0 bg-[#2A245C]/90 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight"
          >
            Find Your Place. Grow Your Faith. <br />
            Serve With Purpose.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-200 text-sm sm:text-base font-light max-w-xl mx-auto"
          >
            Our ministries help members connect, grow in faith, and serve God with their gifts.
          </motion.p>
        </div>

        {/* Ministries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {ministriesList.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`rounded-3xl overflow-hidden shadow-lg p-6 sm:p-8 flex flex-col justify-between h-full text-gray-900 ${item.bgColor}`}
            >
              <div className="space-y-5">
                {/* Rounded card image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Learn More Button */}
              <div className="mt-8">
                <a
                  href="/ministries"
                  className={`inline-flex items-center px-5 py-2.5 border-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${item.btnColor}`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See All Ministries Button */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="/ministries"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-semibold rounded-full text-brand-dark bg-white hover:bg-gray-100 shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              See All Ministries
              <ArrowRight className="ml-2 h-4 w-4 text-brand-dark" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Ministries
