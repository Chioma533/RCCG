import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Images } from "../constants/images";
import JoinUs from "../components/home/JoinUs";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="relative  min-h-[90vh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${Images.contactHero}')` }}
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
                Plan Your Visit
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-162.5 text-[3.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[4rem]"
            >
              We Can't Wait to
              <br />
              Welcome You
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-170 text-base font-normal leading-[1.45] text-white/90 sm:text-lg"
            >
              Whether you're visiting for the first time or looking for a church
              home, we'd love to worship with you. Come as you are and
              experience a welcoming community centered on Christ.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-9 flex items-center justify-center gap-3"
            >
              <a
                href="https://maps.app.goo.gl/23aB4UJddEPmGQ8n8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#342477] px-6 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2d1f69]"
              >
                Get Directions
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:space-y-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-[#2B1B67] text-white rounded-3xl overflow-hidden shadow-xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/5 pb-16 lg:pb-24"
          >
            <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/90 text-xs font-semibold tracking-wider uppercase"
              >
                Welcome Home
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight"
              >
                What to expect on your first visit
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/80 text-sm sm:text-base leading-relaxed font-light"
              >
                We're so glad you're here. When you arrive, you'll be greeted by
                friendly ushers who can help you find a seat and answer any
                questions. Our services include lively praise and worship,
                heartfelt prayer, and a Word-centered message meant to encourage
                and equip you for daily life. If you have kids, we have a
                dedicated children's ministry to make sure they're cared for and
                engaged too. After the service, feel free to stick around; our
                members love meeting new faces, and someone will be happy to
                answer any questions or help you get connected. We can't wait to
                have you worship with us!
              </motion.p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center relative z-10">
              <motion.div className="relative p-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-120 w-full">
                <div className="rounded-2xl overflow-hidden aspect-4/3 bg-white/5">
                  <img
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    src={Images.ourHistoryImg}
                    alt="RCCG Rehoboth Parish Sanctuary"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>

            <div
              className="absolute bottom-0 left-0 w-full h-8 pointer-events-none select-none z-20"
              style={{
                backgroundImage: `url('${Images.wavePattern}')`,
                backgroundRepeat: "repeat-x",
                backgroundPosition: "bottom center",
                backgroundSize: "auto 30px",
                filter: "brightness(0) invert(1)",
              }}
            />
          </motion.div>
        </div>
      </section>

      <JoinUs />
    </div>
  );
};

export default Contact;
