import { motion } from "framer-motion";
import { MapPin, ArrowRight, Play } from "lucide-react";
import { Images } from "../../constants/images";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${Images.homeHero}')` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-18 pb-16 sm:px-6">
        <div className="flex w-full max-w-4xl flex-col items-center text-center text-white">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-md"
          >
            <MapPin className="h-4 w-4 fill-red-500 text-red-500" />

            <span className="text-sm font-normal tracking-wide">
              Arlington, Texas
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-162.5 text-[3.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[4rem]"
          >
            Welcome to RCCG
            <br />
            Rehoboth Parish
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-5 max-w-107.5 text-base font-normal leading-[1.45] text-white/90 sm:text-lg"
          >
            Experience God's presence, grow in faith, and
            <br className="hidden sm:block" />
            become part of a loving church family.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-9 flex items-center justify-center gap-3"
          >
            {/* Plan a Visit */}
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#342477] px-6 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2d1f69]"
            >
              Plan a visit
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            {/* Watch Live */}
            <a
              href="https://www.youtube.com/@rccgrehobothtx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/50 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Watch Live
              <Play className="ml-2 h-3.5 w-3.5 fill-current" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
