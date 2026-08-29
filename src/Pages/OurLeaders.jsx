import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Images } from "../constants/images";

const OurLeaders = () => {
  const leaders = [
    {
      name: "Pastor Isaac Fediora",
      description:
        "Pastor in-Charge of Prov/RG14, community outreach and elder ministry",
      img: Images.pastorFediora,
    },
    {
      name: "Pastor Kola Adeleke",
      description:
        "Pastor Kola serves as the leading shepherd of RCCG Rehoboth Parish. ",
      img: Images.pastorKola,
    },

    {
      name: "Pastor Dokpe Adeleke",
      description: "Pastor in charge of women of virtue and children church",
      img: Images.pastorDokpe,
    },
    {
      name: "Pastor Sunday Ogbode",
      description:
        "Pastor in-Charge of Ushering dept, School of Discipleship, Counseling dept, & Janitorial dept",
      img: Images.pastorSunday,
    },
    {
      name: "Pastor Caroline Ogbode",
      description:
        "Pastor in-Charge of Choir Dept, Sunday School Dept, and Young Adults & Youth Affairs",
      img: Images.pastorCaroline,
    },
    {
      name: "Sis. Toyin Adeleke",
      description: "Sister in charge of children church",
      img: Images.pastorToyin,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative  min-h-[90vh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${Images.aboutHeroBg}')` }}
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-18 pb-16 sm:px-6">
          <div className="flex w-full max-w-4xl flex-col items-center text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-md"
            >
              <span className="text-sm font-normal tracking-wide">
                Our Leaders
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-150 text-[3.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[4rem]"
            >
              OUR LEADERS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-150 text-base font-normal leading-[1.45] text-white/90 sm:text-lg"
            >
              Devoted shepherds serving God and His people with love, wisdom,
              and humility.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
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
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/50 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Leaders Grid Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Profile Photo */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <h3 className="text-lg font-serif font-bold text-gray-900">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light max-w-[260px] mx-auto">
                    {leader.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurLeaders;
