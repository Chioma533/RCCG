import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import volunteerImg from '../../assets/images/volunteer.png'
import {Images} from "../../constants/images"
import waveImg from '../../assets/images/Group 3.png'

const Volunteer = () => {
  return (
    <section className="py-16 bg-[#F3F4F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="relative bg-[#EEF1F6] text-gray-900 rounded-3xl overflow-hidden shadow-sm p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-gray-100">
          {/* Left Column Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 relative z-10">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight text-gray-900"
            >
              Use Your Gifts to Make a Difference
            </motion.h2>

            {/* Paragraph Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-gray-600 text-sm sm:text-base leading-relaxed font-light"
            >
              There's a place for everyone to serve at RCCG Rehoboth Parish.
              Whether you're passionate about worship, media, children's
              ministry, or community outreach, we'd love to have you on the
              team.
            </motion.p>

            {/* Volunteer now button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="https://forms.gle/bukV9DvjLgeJvUA76"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-semibold rounded-full text-white bg-brand-blue hover:bg-opacity-95 shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                Volunteer now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-3 rounded-3xl border border-gray-200 bg-white/20 shadow-sm max-w-[400px] w-full"
            >
              <div className="rounded-2xl overflow-hidden relative z-10 aspect-[4/3] bg-gray-100">
                <img
                  src={Images.outreachImg}
                  alt="Volunteer carrying cross"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Wave Border Ornament in Dark Blue */}
          <div
            className="absolute bottom-0 left-0 w-full h-8 pointer-events-none select-none"
            style={{
              backgroundImage: `url('${waveImg}')`,
              backgroundRepeat: "repeat-x",
              backgroundPosition: "bottom center",
              backgroundSize: "auto 20px",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Volunteer
