import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'
import { Images } from '../constants/images'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [formStatus, setFormStatus] = useState('idle') // 'idle', 'loading', 'success'

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('loading')
    
    // Simulate sending email
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${Images.aboutHeroBg}')` }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 px-5 py-1.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase"
          >
            Plan Your Visit
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7.5xl font-serif font-bold text-white mb-6 tracking-tight leading-tight max-w-4xl"
          >
            We Can't Wait to<br />Welcome You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-sm sm:text-base lg:text-lg mb-8 font-light max-w-2xl leading-relaxed"
          >
            Whether you're visiting for the first time or looking for a church home, we'd love to worship with you. Come as you are and experience a welcoming community centered on Christ.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#2B1B67] hover:bg-[#1E124B] shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Directions
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Expectations Card Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-[#2B1B67] text-white rounded-3xl overflow-hidden shadow-xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/5 pb-16 lg:pb-24"
          >
            {/* Left Column (Text Content) */}
            <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 relative z-10">
              {/* Tag */}
              <div className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/90 text-xs font-semibold tracking-wider uppercase">
                Welcome Home
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                What to expect on your first visit
              </h2>

              {/* Description */}
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
                We're so glad you're here. When you arrive, you'll be greeted by friendly ushers who can help you find a seat and answer any questions. Our services include lively praise and worship, heartfelt prayer, and a Word-centered message meant to encourage and equip you for daily life. If you have kids, we have a dedicated children's ministry to make sure they're cared for and engaged too. After the service, feel free to stick around; our members love meeting new faces, and someone will be happy to answer any questions or help you get connected. We can't wait to have you worship with us!
              </p>
            </div>

            {/* Right Column (Sanctuary Image) */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative z-10">
              <div className="relative p-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-[480px] w-full">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white/5">
                  <img 
                    src={Images.ourHistoryImg} 
                    alt="RCCG Rehoboth Parish Sanctuary" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom White Wave Divider */}
            <div 
              className="absolute bottom-0 left-0 w-full h-8 pointer-events-none select-none z-20"
              style={{
                backgroundImage: `url('${Images.wavePattern}')`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'bottom center',
                backgroundSize: 'auto 20px',
                filter: 'brightness(0) invert(1)'
              }}
            />
          </motion.div>

        </div>
      </section>

      {/* 3. Detailed Contact Section (Form & Info Grid) */}
      <section id="contact-info" className="py-20 bg-[#F9FAFB] border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left side info block (5 cols) */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#2B1B67] uppercase tracking-widest block">Get in Touch</span>
                <h3 className="text-3xl font-serif font-bold text-gray-900">We'd Love to Hear From You</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                  Have questions about our services, ministries, or events? Get in touch with us using the contact details or the form.
                </p>
              </div>

              {/* Service Schedule Info Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#2B1B67] border-b border-gray-100 pb-3">
                  <Clock className="h-5 w-5" />
                  <h4 className="text-base font-bold">Weekly Service Times</h4>
                </div>
                <div className="space-y-3.5 text-sm text-gray-600 font-light">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Sunday Celebration Service</span>
                    <span>10:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Tuesday Digging Deep (Bible Study)</span>
                    <span>6:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Thursday Hour of Grace (Prayer)</span>
                    <span>7:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Contact Details List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#2B1B67]/5 rounded-xl text-[#2B1B67]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-800 mb-1">Church Location</h5>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      RCCG Rehoboth Parish<br />
                      [Official Location Address to be updated]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#2B1B67]/5 rounded-xl text-[#2B1B67]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-800 mb-1">Call Us</h5>
                    <p className="text-gray-600 text-sm font-light">
                      +1 (123) 456-7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#2B1B67]/5 rounded-xl text-[#2B1B67]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-800 mb-1">Email Info</h5>
                    <p className="text-gray-600 text-sm font-light">
                      info@rccgrehobothparish.org
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form block (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-gray-100 shadow-sm rounded-3xl p-8 sm:p-10 relative">
              <AnimatePresence mode="wait">
                
                {formStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12 space-y-6"
                  >
                    <CheckCircle className="h-16 w-16 text-emerald-500 animate-bounce" />
                    <div className="space-y-2">
                      <h4 className="text-2xl font-serif font-bold text-gray-900">Message Sent!</h4>
                      <p className="text-gray-500 text-sm font-light max-w-sm">
                        Thank you for reaching out to us. We will review your message and reply as soon as possible.
                      </p>
                    </div>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="px-6 py-2.5 rounded-full text-white bg-[#2B1B67] hover:bg-[#1E124B] transition-colors text-xs font-semibold cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="text-lg font-bold text-gray-900">Send us a Message</h4>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-xs font-semibold text-gray-600">Your Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B1B67]/20 focus:border-[#2B1B67] text-sm text-gray-800 transition-all"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-xs font-semibold text-gray-600">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B1B67]/20 focus:border-[#2B1B67] text-sm text-gray-800 transition-all"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <label className="text-xs font-semibold text-gray-600">Subject</label>
                        <input
                          type="text"
                          required
                          placeholder="How can we help you?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B1B67]/20 focus:border-[#2B1B67] text-sm text-gray-800 transition-all"
                        />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <label className="text-xs font-semibold text-gray-600">Message</label>
                        <textarea
                          required
                          rows="4"
                          placeholder="Write your message here..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B1B67]/20 focus:border-[#2B1B67] text-sm text-gray-800 resize-none transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus === 'loading'}
                        className="w-full py-4 rounded-full text-white bg-[#2B1B67] hover:bg-[#1E124B] disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md active:scale-98 transition-all text-sm font-semibold tracking-wide flex justify-center items-center gap-2 cursor-pointer"
                      >
                        {formStatus === 'loading' ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Contact
