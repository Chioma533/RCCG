import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import orangeStar from '../../assets/icons/Star 2.png'
import tulipIcon from '../../assets/icons/FlowerTulip.png'
import blueStar from '../../assets/icons/Star 2 (1).png'

const AboutUs = () => {
  const items = [
    {
      title: 'Our Mission',
      description: 'To lead people into a life of holiness, faith, and purpose through the teaching of God\'s Word, worship, and fellowship, while sharing the love of Christ with every nation.',
      bgColor: 'bg-bg-peach',
      iconBgColor: 'bg-[#FFE8CC]',
      icon: orangeStar,
      btnColor: 'border-[#F59E0B] text-[#D97706] hover:bg-[#F59E0B]/10',
      arrowColor: 'text-[#D97706]'
    },
    {
      title: 'Our Vision', // keeping "Our Mission" exactly as written in the mockup
      description: 'To see a transformed world where every family is reached for Christ, lives are changed through the Gospel, and a Redeem church community exists in every nation.',
      bgColor: 'bg-bg-lavender',
      iconBgColor: 'bg-[#E1DDEC]',
      icon: tulipIcon,
      btnColor: 'border-[#6366F1] text-[#4F46E5] hover:bg-[#6366F1]/10',
      arrowColor: 'text-[#4F46E5]'
    },
    {
      title: 'Our Aim & Objective',
      description: 'To make heaven and take as many people with us by living in holiness, growing in faith, and sharing the Gospel of Jesus Christ with every nation.',
      bgColor: 'bg-bg-sky',
      iconBgColor: 'bg-[#BAE6FD]',
      icon: blueStar,
      btnColor: 'border-[#0EA5E9] text-[#0284C7] hover:bg-[#0EA5E9]/10',
      arrowColor: 'text-[#0284C7]'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-sm sm:text-base font-normal"
          >
            A Church Built on Faith, Love & Purpose
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`rounded-3xl p-8 flex flex-col items-start justify-between min-h-[380px] shadow-sm transition-all duration-300 ${item.bgColor}`}
            >
              <div className="space-y-6 w-full">
                {/* Icon Container */}
                <div className={`p-4 rounded-full inline-block ${item.iconBgColor}`}>
                  <img src={item.icon} alt="Icon" className="h-6 w-6 object-contain" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-gray-900">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Learn More Button */}
              <a
                href="/about"
                className={`mt-8 inline-flex items-center px-5 py-2.5 border-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${item.btnColor}`}
              >
                Learn More
                <ArrowRight className={`ml-2 h-4 w-4 ${item.arrowColor}`} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
