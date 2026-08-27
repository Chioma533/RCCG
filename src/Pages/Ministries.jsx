import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Images } from "../constants/images";

const Ministries = () => {
  const ministryList = [
    {
      badge: "The Choir",
      description:
        "Our choir leads worship through music, creating an atmosphere for encountering God's presence.",
      img: Images.choirImg,
    },
    {
      badge: "Media & Technology",
      description:
        "Managing sound, visuals, livestream, photography, and digital content to help spread the Gospel in person and online.",
      img: Images.mediaImg,
    },
    {
      badge: "Children's Church",
      description:
        "We nurture children through Bible-based teaching, engaging activities, and a loving environment where they can grow in faith.",
      img: Images.ministryHero,
    },
      {
      badge: "Men Of Impact",
      description:
        "A brotherhood focused on discipleship, accountability, and helping men grow in faith and purpose.",
      img: Images.homeHero,
    },
     {
      badge: "Women of Virtue",
      description:
        "A fellowship where women grow spiritually, build relationships, and encourage one another through every stage of life.",
      img: Images.contactHero,
    },
    {
      badge: "YAYA",
      description:
        "A community where young adults connect, build friendships, discover purpose, and strengthen their walk with Christ.",
      img: Images.youthMinistry,
    },
    {
      badge: "Community Outreach",
      description:
        "We extend God's love through service, outreach, and community engagement, making a meaningful impact beyond the church.",
      img: Images.outreachImg,
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
    <div className="flex flex-col min-h-screen bg-[#F3F4F6]">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        {/* Background Image (using choirImg/congregation as backdrop) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${Images.ministryHero}')` }}
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-18 pb-16 sm:px-6">
          <div className="flex w-full max-w-4xl flex-col items-center text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-md"
            >
              <span className="text-sm font-normal tracking-wide">
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
              className="mt-5 max-w-150 text-base font-normal leading-[1.45] text-white/90 sm:text-lg"
            >
              Our ministries create spaces for people of every age and stage of
              life to connect, grow spiritually, discover their gifts, and serve
              others.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-9 flex items-center justify-center gap-3"
            >
              <a
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#342477] px-6 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2d1f69]"
              >
                Plan a visit
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@rccgrehobothtx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/50 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Watch Live
                <Play className="ml-2 h-4 w-4 fill-current" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Grid Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Ministry Cards */}
            {ministryList.map((min, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="relative rounded-2xl overflow-hidden shadow-lg aspect-4/3 group"
              >
                {/* Card Image */}
                <img
                  src={min.img}
                  alt={min.badge}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                />

                {/* Dark gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

                <div className="absolute top-5 left-5">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-white bg-white/15 backdrop-blur-sm border border-white/20">
                    {min.badge}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                  <p className="text-white text-sm leading-relaxed font-light">
                    {min.description}
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-5 py-2.5 border border-amber-500 rounded-full text-xs font-semibold tracking-wide text-amber-400 hover:bg-amber-500 hover:text-white transition-all duration-200"
                  >
                    Join now
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}

            <motion.div
              variant={cardVariants}
              whileHover={{ y: -8 }}
              className="lg:col-span-2 relative rounded-3xl shadow-lg overflow-hidden aspect-4/3 md:aspect-8/3"
            >
              <img
                src={Images.ministrycard}
                alt="Carrying cross"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
              />
              {/* Dark gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/10" />

              {/* Right side description */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                <p className="text-white text-sm leading-relaxed font-light">
                  Whether you're passionate about worship, technology, children,
                  community service, or simply want to grow alongside others,
                  there's an opportunity for you to get involved.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-5 py-2.5 border border-amber-500 rounded-full text-xs font-semibold tracking-wide text-amber-400 hover:bg-amber-500 hover:text-white transition-all duration-200"
                >
                  Get involved now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;
