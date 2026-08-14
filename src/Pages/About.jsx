import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Images } from '../constants/images'

const About = () => {
  const cards = [
    {
      id: 'history',
      tag: 'Our History',
      title: 'Birthed by a remarkable vision',
      text: 'The Redeemed Christian Church of God, Rehoboth Parish, was birthed from a remarkable vision carried by devoted students of the RCCG School of Disciples. With hearts shaped by discipline, obedience, and a deep hunger for God, these students united their resources and faith to establish a parish dedicated to genuine spiritual growth. Their commitment laid a foundation unlike any other—Rehoboth Parish stands today as a testimony to what God can build through willing vessels who choose sacrifice over comfort and purpose over convenience.',
      img: Images.ourHistoryImg,
      imgAlt: 'RCCG Rehoboth Parish Congregation and Stage'
    },
    {
      id: 'identity',
      tag: 'Our Identity',
      title: 'More Than a Church. A Family.',
      text: 'From its earliest days, Rehoboth Parish embraced a unique identity rooted in discipleship. The values instilled in its founders—holiness, steadfastness, evangelism, and spiritual maturity—became the heartbeat of the church. Every service, ministry expression, and outreach initiative reflects this DNA. Rehoboth Parish is intentionally designed as a nurturing ground where believers are taught, strengthened, and equipped to live out their faith with conviction. It is a home where worship is sincere, teaching is sound, and every member is encouraged to grow into the fullness of Christ.',
      img: Images.ourIdentityImg,
      imgAlt: 'Pastor preaching and member laughing'
    },
    {
      id: 'mission',
      tag: 'Our Mission',
      title: 'Our Selfless Mission',
      text: 'Our mission is anchored in the divine mandate of Ephesians 5:27: to raise a glorious church, without spot or wrinkle, holy and without blemish. This scripture shapes our vision, our culture, and our expectations of ourselves as believers. At Rehoboth Parish, we are committed to preparing men and women who reflect Christ\'s character in purity, love, and power. Through discipleship, prayer, community, and service, we strive to build believers who are ready for His coming and who shine as His representatives in the world. The dedication of our founders continues to inspire us as we pursue this call with passion and purpose.',
      img: Images.ourMissionImg,
      imgAlt: 'Woman praying with Christmas tree in background'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative  min-h-[90vh]  flex items-center justify-center bg-black overflow-hidden">
        {/* Background Image with Blur & Dark Overlay */}

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${Images.aboutHeroBg}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content Container */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center text-white">
          {/* About Us Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-8"
          >
            <span className="text-sm font-medium tracking-wide">About Us</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-4 tracking-tight leading-[1.1] mb-6 max-w-4xl"
          >
            ABOUT RCCG
            <br />
            REHOBOTH PARISH
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-gray-200/90 font-normal max-w-2xl leading-relaxed mb-10"
          >
            A Church Built on Faith, Holiness & Purpose
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
              href="https://www.youtube.com/@rccgrehobothtx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/80 text-base font-semibold rounded-full text-white hover:bg-white hover:text-brand-dark transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm bg-white/5"
            >
              Watch Live
              <Play className="ml-2 h-4 w-4 fill-current" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Content Sections (Our History, Our Identity, Our Mission) */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative bg-[#2B1B67] text-white rounded-3xl overflow-hidden shadow-xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/5 pb-16 lg:pb-24"
            >
              {/* Left Column (Text Content) */}
              <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 relative z-10 order-2 lg:order-1">
                {/* Section Tag */}
                <div className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/90 text-xs font-semibold tracking-wider uppercase">
                  {card.tag}
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                  {card.title}
                </h2>

                {/* Body Paragraph */}
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
                  {card.text}
                </p>
              </div>

              {/* Right Column (Image Container) */}
              <div className="w-full lg:w-1/2 flex justify-center items-center relative order-1 lg:order-2 z-10">
                <div className="relative p-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-[480px] w-full">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white/5">
                    <img
                      src={card.img}
                      alt={card.imgAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom White Wave Mask Overlay */}
              <div
                className="absolute bottom-0 left-0 w-full h-8 pointer-events-none select-none z-20"
                style={{
                  backgroundImage: `url('${Images.wavePattern}')`,
                  backgroundRepeat: "repeat-x",
                  backgroundPosition: "bottom center",
                  backgroundSize: "auto 30px",
                  filter: "brightness(0) invert(1)", // Converts dark blue waves to white waves
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About
