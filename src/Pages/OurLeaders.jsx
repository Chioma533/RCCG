import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Images } from '../constants/images'

const OurLeaders = () => {
  const leaders = [
    {
      name: "Pastor Kola Adeleke",
      role: "Pastor",
      description:
        "Pastor Kola serves as the leading shepherd of RCCG Rehoboth Parish. Devoted to prayer, sound biblical teachings, and local community transformation, he guides the congregation with love, wisdom, and deep faith.",
      img: Images.pastorKola,
    },
    {
      name: "Pastor Caroline Ogbode",
      role: "Pastor in-Charge of Choir Dept, Sunday School Dept, and Young Adults & Youth Affairs",
      description:
        "Pastor in-Charge of Choir Dept, Sunday School Dept, and Young Adults & Youth Affairs",
      img: Images.pastorCaroline,
    },
    {
      name: "Pastor Sunday Ogbode",
      role: "Pastor in-Charge of Ushering dept,School of Discipleship, Counseling dept, & Janitorial dept",
      description:
        "Pastor in-Charge of Ushering dept,School of Discipleship, Counseling dept, & Janitorial dept",
      img: Images.pastorSunday,
    },
    {
      name: "Pastor Isaac Fediora",
      role: "Associate Pastor",
      description:
        "Pastor in-Charge of Prov/RG14, community outreach and elder ministry",
      img: Images.pastorFediora,
    },
    {
      name: "Sis. Toyin Adeleke",
      role: "Associate Pastor",
      description:
        "Sister in charge of children church",
      img: Images.pastorFediora,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${Images.aboutHeroBg}')` }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-8"
          >
            <span className="text-sm font-medium tracking-wide">
              Our Leaders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7.5xl font-serif font-bold text-white mb-4 tracking-tight leading-[1.1] max-w-4xl"
          >
            OUR LEADERS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-200/90 font-normal max-w-2xl leading-relaxed mb-10"
          >
            Devoted shepherds serving God and His people with love, wisdom, and
            humility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-full text-white bg-brand-blue hover:bg-opacity-95 shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              Plan a visit
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/contact#contact-info"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/80 text-base font-semibold rounded-full text-white hover:bg-white hover:text-brand-dark transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm bg-white/5"
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
                  {/* <div className="px-3.5 py-1 bg-[#2B1B67]/5 text-[#2B1B67] rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                    {leader.role}
                  </div> */}
                </div>

                {/* Bio text */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                  {leader.description}
                </p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurLeaders
