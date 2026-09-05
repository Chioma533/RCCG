import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Volume2, Maximize, X, ArrowRight } from "lucide-react";
import { Images } from "../constants/images";
import LatestSermon from "../components/home/LatestSermon";

const Sermons = () => {
  const youTubeChannelUrl = "https://www.youtube.com/@rccgrehobothtx/streams";

  const exploreSermons = [
    {
      title: "Dealing with lust as a youth",
      preacher: "Pastor Cynthia",
      date: "Sunday, Aug 23 2026",
      img: Images.sermonPlaceholderBg,
      url: "https://www.youtube.com/live/0-DwzjZ0NjI?si=Ehf9e065od3mi2y9",
    },
    {
      title: "Dealing with lust as a youth",
      preacher: "Pastor Cynthia",
      date: "Sunday, Aug 16 2026",
      img: Images.sermonPlaceholderBg2,
      url: "https://www.youtube.com/live/VW5DpF0BCog?si=MNXrNk9o6L1f078H",
    },
    {
      title: "Dealing with lust as a youth",
      preacher: "Pastor Cynthia",
      date: "Sunday, Aug 9 2026",
      img: Images.sermonPlaceholderBg3,
      url: "https://www.youtube.com/live/Z8TRgGtQ7wo?si=oWDhw88ZZE8Jyrd-",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${Images.sermonPlaceholderBg}')` }}
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-18 pb-16 sm:px-6">
          <div className="flex w-full max-w-4xl flex-col items-center text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-md"
            >
              <span className="text-sm font-normal tracking-wide">
                Sermons & Messages
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7.5xl font-serif font-bold text-white mb-6 tracking-tight leading-[1.2] max-w-4xl"
            >
              Grow Through God's Word
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-150 text-base font-normal leading-[1.45] text-white/90 sm:text-lg"
            >
              Watch and listen to messages from RCCG Rehoboth Parish and stay
              connected with God's Word wherever you are.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, delay: 0.6 }}
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
                href={youTubeChannelUrl}
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-red-500 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-lg"
          >
            <div className="absolute -right-10 -bottom-10 w-96 h-96 rounded-full bg-red-600/35 pointer-events-none" />

            <div className="w-full lg:w-3/5 space-y-6 relative z-10 flex flex-col items-start">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Never Miss a Message
              </h2>
              <p className="text-white/95 text-sm sm:text-base leading-relaxed font-light">
                Catch our latest livestreams, sermons, and worship experiences
                on our YouTube channel.
              </p>
              <div>
                <a
                  href={youTubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-red-600 hover:bg-gray-50 rounded-2xl text-sm font-bold shadow-md active:scale-98 transition-all"
                >
                  Go To Youtube
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.522 3.5 12 3.5 12 3.5s-7.522 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.478 20.5 12 20.5 12 20.5s7.522 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.971 24 12 24 12s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full lg:w-2/5 flex justify-center relative z-10">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white/20 overflow-hidden bg-red-600 shadow-inner flex items-center justify-center">
                <img
                  src={Images.ourIdentityImg}
                  alt="Pastor preaching"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <LatestSermon /> */}

      {/* <section className="py-20 bg-[#F9FAFB] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Explore Our Messages
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light">
              We'd love to worship with you. Join us in person or online
              throughout the week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exploreSermons.map((sermon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100/60 p-4 space-y-4"
              >
                <div className="relative rounded-xl overflow-hidden aspect-16/10 bg-gray-100 group cursor-pointer">
                  <img
                    src={sermon.img}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <motion.a
                      href={sermon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch ${sermon.title}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"
                    >
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                    </motion.a>
                  </div>
                </div>
                <div className="space-y-1 pb-2">
                  <h4 className="text-base font-serif font-bold text-gray-900 line-clamp-2">
                    {sermon.title}
                  </h4>
                  <div className="text-xs text-gray-500 font-medium">
                    {sermon.preacher}
                  </div>
                  <div className="text-[11px] text-gray-400">{sermon.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Sermons;
