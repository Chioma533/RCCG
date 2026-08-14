import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Images } from '../constants/images'

const Ministries = () => {
  const ministryList = [
    {
      title: "The Choir",
      description:
        "Our choir leads worship through music, creating an atmosphere for encountering God's presence.",
      img: Images.choirImg,
      bgColor: "bg-[#FAF0D7]", // Peach
      btnColor: "border-[#E0A96D] text-[#8C5D30] hover:bg-[#E0A96D]/10",
    },
    {
      title: "Media & Technology",
      description:
        "Managing sound, visuals, livestream, photography, and digital content to help spread the Gospel in person and online.",
      img: Images.mediaImg,
      bgColor: "bg-[#EEF1F6]", // Lavender-blue
      btnColor: "border-[#A3B3CC] text-[#4A5D78] hover:bg-[#A3B3CC]/10",
    },
    {
      title: "Children's Church",
      description:
        "We nurture children through Bible-based teaching, engaging activities, and a loving environment where they can grow in faith.",
      img: Images.childrenImg,
      bgColor: "bg-[#FAF0D7]", // Peach
      btnColor: "border-[#E0A96D] text-[#8C5D30] hover:bg-[#E0A96D]/10",
    },
    {
      title: "YAYA",
      description:
        "A community where young adults connect, build friendships, discover purpose, and strengthen their walk with Christ.",
      img: Images.youthMinistry,
      bgColor: "bg-[#FAF0D7]", // Peach
      btnColor: "border-[#E0A96D] text-[#8C5D30] hover:bg-[#E0A96D]/10",
    },
    {
      title: "Women of Virtue",
      description:
        "A fellowship where women grow spiritually, build relationships, and encourage one another through every stage of life.",
      img: Images.virtueousWomen,
      bgColor: "bg-[#EEF1F6]", // Lavender-blue
      btnColor: "border-[#A3B3CC] text-[#4A5D78] hover:bg-[#A3B3CC]/10",
    },
    {
      title: "Men Of Impact",
      description:
        "A brotherhood focused on discipleship, accountability, and helping men grow in faith and purpose.",
      img: Images.menImpact,
      bgColor: "bg-[#FAF0D7]", // Peach
      btnColor: "border-[#E0A96D] text-[#8C5D30] hover:bg-[#E0A96D]/10",
    },
    {
      title: "Community Outreach",
      description:
        "We extend God's love through service, outreach, and community engagement, making a meaningful impact beyond the church.",
      img: Images.outreachImg,
      bgColor: "bg-[#FAF0D7]", // Peach
      btnColor: "border-[#E0A96D] text-[#8C5D30] hover:bg-[#E0A96D]/10",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F4F6]">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-black justify-center overflow-hidden">
        {/* Background Image (using choirImg/congregation as backdrop) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${Images.ministryHero}')` }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-8"
          >
            <span className="text-sm font-medium tracking-wide">
              Our Ministries
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4 tracking-tight leading-[1.1] mb-6 max-w-4xl"
          >
            Find Your Place. Grow
            <br />
            Your Faith. Serve With Purpose.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-gray-200/90 font-normal max-w-2xl leading-relaxed mb-10"
          >
            Our ministries create spaces for people of every age and stage of
            life to connect, grow spiritually, discover their gifts, and serve
            others.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto"
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

      {/* 2. Grid Cards Section */}
     {/* 2. Grid Cards Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Ministry Cards */}
      {ministryList.map((min, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
          className={`rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow ${min.bgColor}`}
        >
          <div className="space-y-5">

            {/* Card Image */}
            <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-black/5 bg-black/5">
              <img
                src={min.img}
                alt={min.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-serif font-bold text-gray-900">
              {min.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light">
              {min.description}
            </p>

          </div>

          {/* Join button */}
          <div className="pt-6">
            <a
              href="/contact"
              className={`inline-flex items-center px-5 py-2 border rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${min.btnColor}`}
            >
              Join now
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:col-span-2 bg-white/70 rounded-3xl p-4 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6"
      >
        {/* Left side image */}
        <div className="w-full sm:w-1/2 rounded-2xl overflow-hidden aspect-[4/3] border border-gray-100 bg-gray-50 flex items-center justify-center">
          <img
            src={Images.volunteerImg}
            alt="Carrying cross"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side description */}
        <div className="w-full sm:w-1/2 space-y-4">
          <h2 className="text-2xl font-serif font-bold text-gray-900">
            There's a Place for You Here
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Whether you're passionate about worship, technology, children,
            community service, or simply want to grow alongside others,
            there's an opportunity for you to get involved.
          </p>

          <div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#2B1B67] hover:bg-[#1E124B] shadow-md transition-all duration-200"
            >
              Get involved now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>
    </div>
  );
}

export default Ministries
