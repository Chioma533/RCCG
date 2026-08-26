import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import choirImg from "../../assets/images/choir.jpg";
import mediaImg from "../../assets/images/media.png";
import childrenImg from "../../assets/images/children.png";

const Ministries = () => {
  const ministriesList = [
    {
      badge: "The choir",
      image: choirImg,
      description:
        "Our choir leads worship through music, creating an atmosphere for encountering God's presence.",
    },
    {
      badge: "The Media",
      image: mediaImg,
      description:
        "The Media Team uses creativity and technology to share God's word's through visuals, sound, and  photography",
    },
    {
      badge: "Children's Church",
      image: childrenImg,
      description:
        "Children's Church provides a fun, safe, and engaging space where children can learn about God and grow in faith.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="ministries"
      className="relative py-24 bg-[#F7F6F4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4"
          >
            Find Your Place. Grow Your Faith. Serve With Purpose.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-md sm:text-lg lg:text-xl leading-relaxed"
          >
            Our ministries help members connect, grow in faith, and serve God
            with their gifts.
          </motion.p>
        </div>

        {/* Ministries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {ministriesList.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] group"
            >
              {/* Background image */}
              <img
                src={item.image}
                alt={item.badge}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
              />

              {/* Dark gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

              {/* Badge */}
              <div className="absolute top-5 left-5">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-white bg-white/15 backdrop-blur-sm border border-white/20">
                  {item.badge}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                <p className="text-white text-sm leading-relaxed font-light">
                  {item.description}
                </p>
                <a
                  href="/ministries"
                  className="inline-flex items-center px-5 py-2.5 border border-amber-500 rounded-full text-xs font-semibold tracking-wide text-amber-400 hover:bg-amber-500 hover:text-white transition-all duration-200"
                >
                  Join now
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
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
              className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-200 text-sm font-semibold rounded-full text-gray-900 bg-white hover:bg-gray-50 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              See All Ministries
              <ArrowRight className="ml-2 h-4 w-4 text-gray-900" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ministries;
