import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Video, ArrowRight } from "lucide-react";
import logoImg from "../../assets/images/Logo.png";
import worshipImg from "../../assets/images/Ellipse1.png";
import bibleImg from "../../assets/images/Ellipse2.png";
import prayerImg from "../../assets/images/Ellipse3.png";
import {Images} from "../../constants/images"

const JoinUs = () => {
  const cards = [
    {
      title: "Sunday Worship",
      image: Images.polygon1,
      buttonText: "Plan your visit",
      link: "/contact",
      schedule: [
        { label: "Sunday School", value: "10:00 AM - 10:45 AM" },
        { label: "Celebration Service", value: "10:45 AM - 12:30 PM" },
      ],
    },
    {
      title: "Bible Study",
      image: Images.polygon3,
      buttonText: "Join Bible study",
      link: "/ministries",
      schedule: [
        {
          label: "Tuesday",
          value: "7:00 PM - 8:00 PM",
        },
        {
          label: "Location",
          value: "Online via Zoom",
          isLink: true,
          link: "https://us06web.zoom.us/j/87883161672?pwd=d1VSb1JFdloyWDNLUTZ3Y3F0dGILUT09",
        },
      ],
    },
    {
      title: "Prayer Service",
      image: Images.polygon2,
      buttonText: "Plan your visit",
      link: "/contact",
      schedule: [
        { label: "Thursday", value: "7:00 PM - 8:00 PM" },
        { label: "Location", value: "Church Auditorium" },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="join" className="relative py-24 bg-[#FAF9F6] overflow-hidden">
      {/* RCCG Watermark Logo on Top Right */}
      <div
        className="absolute top-0  right-0 w-[450px] h-[450px] bg-no-repeat bg-contain opacity-[0.03] pointer-events-none translate-x-50 -translate-y-20 select-none z-10"
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
            className="text-gray-600 text-md sm:text-lg lg:text-xl leading-relaxed"
          >
            We'd love to worship with you. Join us in person or <br />
            online throughout the week.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.25,
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative  overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 "
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-grow flex-col p-6 sm:p-8">
                {/* Title & CTA */}
                <div className="mb-6 flex items-center justify-between gap-3">
                  <h3 className="font-serif text-xl font-bold text-gray-900">
                    {card.title}
                  </h3>

                  <button className="shrink-0 rounded-full bg-brand-blue/5 px-3 py-1.5 text-[11px] font-semibold text-brand-blue transition-colors hover:bg-brand-blue/10 sm:text-xs">
                    {card.buttonText}
                  </button>
                </div>

                {/* Schedule */}
                <div className="flex flex-grow flex-col space-y-4">
                  {card.schedule.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`flex items-center justify-between gap-4 py-2.5 ${
                        itemIdx < card.schedule.length - 1
                          ? "border-b border-gray-100"
                          : ""
                      }`}
                    >
                      <span className="text-sm font-medium text-gray-500">
                        {item.label}
                      </span>

                      {item.isLink ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-right text-sm font-semibold text-brand-blue hover:underline"
                        >
                          <Video className="mr-1.5 h-4 w-4" />
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-right text-sm font-semibold text-gray-800">
                          {item.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
