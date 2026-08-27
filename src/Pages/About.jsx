import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Images } from "../constants/images";

const About = () => {
  const cards = [
    {
      id: "identity",
      tag: "Our Identity",
      title: "More Than a Church. A Family.",
      text: "From its earliest days, Rehoboth Parish embraced a unique identity rooted in discipleship. The values instilled in its founders—holiness, steadfastness, evangelism, and spiritual maturity—became the heartbeat of the church. Every service, ministry expression, and outreach initiative reflects this DNA. Rehoboth Parish is intentionally designed as a nurturing ground where believers are taught, strengthened, and equipped to live out their faith with conviction. It is a home where worship is sincere, teaching is sound, and every member is encouraged to grow into the fullness of Christ.",
      img: Images.ourIdentityImg,
      imgAlt: "Pastor preaching and member laughing",
    },
    {
      id: "history",
      tag: "Our History",
      title: "Birthed by a remarkable vision",
      text: "The Redeemed Christian Church of God, Rehoboth Parish, was birthed from a remarkable vision carried by devoted students of the RCCG School of Disciples. With hearts shaped by discipline, obedience, and a deep hunger for God, these students united their resources and faith to establish a parish dedicated to genuine spiritual growth. Their commitment laid a foundation unlike any other—Rehoboth Parish stands today as a testimony to what God can build through willing vessels who choose sacrifice over comfort and purpose over convenience.",
      img: Images.ourHistoryImg,
      imgAlt: "RCCG Rehoboth Parish Congregation and Stage",
    },

    {
      id: "mission",
      tag: "Our Mission",
      title: "Our Selfless Mission",
      text: "Our mission is anchored in the divine mandate of Ephesians 5:27: to raise a glorious church, without spot or wrinkle, holy and without blemish. This scripture shapes our vision, our culture, and our expectations of ourselves as believers. At Rehoboth Parish, we are committed to preparing men and women who reflect Christ's character in purity, love, and power. Through discipleship, prayer, community, and service, we strive to build believers who are ready for His coming and who shine as His representatives in the world. The dedication of our founders continues to inspire us as we pursue this call with passion and purpose.",
      img: Images.ourMissionImg,
      imgAlt: "Woman praying with Christmas tree in background",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative  min-h-[90vh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${Images.aboutHeroBg}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-18 pb-16 sm:px-6">
          <div className="flex w-full max-w-4xl flex-col items-center text-center text-white">
            {/* About Us Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-md"
            >
              <span className="text-sm font-normal tracking-wide">
                About Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-162.5 text-[3.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[4rem]"
            >
              ABOUT RCCG
              <br />
              REHOBOTH PARISH
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-5 max-w-107.5 text-base font-normal leading-[1.45] text-white/90 sm:text-lg"
            >
              A Church Built on Faith, Holiness & Purpose
            </motion.p>

            {/* Call to Action Buttons */}
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

      {/* 2. Content Sections (Our History, Our Identity, Our Mission) */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:space-y-24 lg:px-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: false,
                margin: "-100px",
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative overflow-hidden rounded-3xl p-8 text-white shadow-xl sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-16 ${
                index === 1 ? "bg-[#2B1B67]" : "bg-[#2B1B67]"
              }`}
            >
              {/* Left Column - Text */}
              <div className="relative z-10 order-2 flex w-full flex-col items-start space-y-6 lg:order-1 lg:w-1/2">
                {/* Section Tag */}
                <div className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90">
                  {card.tag}
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl font-serif font-bold leading-tight sm:text-3xl lg:text-4xl">
                  {card.title}
                </h2>

                {/* Body Paragraph */}
                <p className="text-sm font-light leading-relaxed text-white/80 sm:text-base">
                  {card.text}
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="relative z-10 order-1 flex w-full items-center justify-center lg:order-2 lg:w-1/2">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative w-full max-w-[480px] rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
                    <img
                      src={card.img}
                      alt={card.imgAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Bottom White Wave */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 z-20 h-8 w-full select-none"
                style={{
                  backgroundImage: `url('${Images.wavePattern}')`,
                  backgroundRepeat: "repeat-x",
                  backgroundPosition: "bottom center",
                  backgroundSize: "auto 30px",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
