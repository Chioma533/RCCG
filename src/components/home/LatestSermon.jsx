import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Radio } from "lucide-react";
import BibleImg from "../../assets/images/Bible.png";
import sermonPlaceholderBg from "../../assets/images/Sermon1.jpg";

const LatestSermon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const sermons = [
    {
      id: 1,
      title: "Dealing with lust as a kingdom youth",
      image: sermonPlaceholderBg,
      link: "https://www.youtube.com/@rccgrehobothtx/streams",
      isLive: true,
    },
    {
      id: 2,
      title: "Experience God’s Word Anytime, Anywhere",
      image: sermonPlaceholderBg,
      link: "https://www.youtube.com/@rccgrehobothtx/streams",
      isLive: false,
    },
    {
      id: 3,
      title: "Growing Stronger in Faith",
      image: sermonPlaceholderBg,
      link: "https://www.youtube.com/@rccgrehobothtx/streams",
      isLive: false,
    },
    {
      id: 4,
      title: "Walking in God’s Purpose",
      image: sermonPlaceholderBg,
      link: "https://www.youtube.com/@rccgrehobothtx/streams",
      isLive: false,
    },
  ];

  const nextSlide = () => {
    setDirection(1);

    setCurrentIndex((prev) => (prev === sermons.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setDirection(-1);

    setCurrentIndex((prev) => (prev === 0 ? sermons.length - 1 : prev - 1));
  };

  // Automatic slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const currentSermon = sermons[currentIndex];

  return (
    <section
      id="sermons"
      className="relative overflow-hidden bg-[#FAF9F6] py-14 sm:py-16"
    >
      {/* Bible Watermark */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-0 h-[280px] w-[330px] translate-x-8 -translate-y-4 bg-contain bg-right-top bg-no-repeat opacity-[0.18]"
        style={{
          backgroundImage: `url('${BibleImg}')`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 mx-auto mb-9 max-w-3xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4"
        >
          Latest Sermon & Livestream
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 text-md sm:text-lg lg:text-xl leading-relaxed"
        >
          Experience God's Word Anytime, Anywhere
        </motion.p>
      </div>

      {/* Slider */}
      <div className="relative z-10 mx-auto w-full max-w-[1000px] px-4">
        <div className="relative h-[400px] overflow-hidden rounded-2xl sm:h-[440px]">
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={currentSermon.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                  duration: 0.35,
                },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) {
                  nextSlide();
                }

                if (info.offset.x > 80) {
                  previousSlide();
                }
              }}
              className="absolute inset-0"
            >
              {/* Image */}
              <img
                src={currentSermon.image}
                alt={currentSermon.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Live Indicator */}
              {currentSermon.isLive && (
                <div className="absolute left-8 top-8">
                  <Radio className="h-10 w-10 text-red-500" strokeWidth={2.5} />
                </div>
              )}

              {/* Previous */}
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous sermon"
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 sm:left-6"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next sermon"
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 sm:right-6"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-6 p-6 sm:p-8">
                <h3 className="max-w-[65%] text-lg font-medium leading-tight text-white sm:text-2xl">
                  {currentSermon.title}
                </h3>

                <a
                  href={currentSermon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full bg-white px-5 py-2.5 text-xs font-medium text-gray-900 transition-all hover:bg-gray-100 sm:text-sm"
                >
                  Watch Sermon
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="mt-5 flex justify-center gap-2">
          {sermons.map((sermon, index) => (
            <button
              key={sermon.id}
              type="button"
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to sermon ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-7 bg-brand-blue"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestSermon;
