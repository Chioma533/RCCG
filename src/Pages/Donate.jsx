import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, Copy, CheckCircle } from 'lucide-react'
import { Images } from '../constants/images'

const Donate = () => {
  const [step, setStep] = useState('cover')
  const [copied, setCopied] = useState(false)

  // Replace this email later with the official Zelle email
  const zelleEmail = 'RCCGREHOBOTH3305@GMAIL.COM'


  // Replace this URL later with the actual donation link
  const donationLink = 'https://givelify.com'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(zelleEmail)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Failed to copy email:', error)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-center items-center py-16 px-4">
      <AnimatePresence mode="wait">

        {/* Step 1: Cover View */}
        {step === 'cover' && (
          <motion.div
            key="cover"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-[500px] bg-[#F5F5F5] rounded-3xl shadow-sm border border-gray-200/50 p-8 sm:p-10 flex flex-col items-center text-center space-y-6"
          >
            {/* Title */}
            <h1 className="text-3xl sm:text-4.5xl font-serif font-bold text-gray-900 leading-tight">
              Give With A Joyful Heart
            </h1>

            {/* Subtext */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
              Your generosity helps us share the Gospel, strengthen our community, and support the work God is doing through RCCG Rehoboth Parish.
            </p>

            {/* Vector Illustration */}
            <div className="w-full max-w-[400px] bg-white rounded-3xl p-4 border border-gray-100 flex justify-center items-center shadow-inner overflow-hidden aspect-[4/3]">
              <img
                src={Images.donateIllustration}
                alt="Giving with a Joyful Heart Illustration"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Donate Now Button */}
            <button
              onClick={() => setStep('zelle')}
              className="w-full max-w-[340px] py-4 rounded-full text-white bg-[#2B1B67] hover:bg-[#1E124B] active:scale-[0.98] shadow-md transition-all duration-200 text-sm font-semibold tracking-wide cursor-pointer"
            >
              Donate now
            </button>
          </motion.div>
        )}

        {/* Step 2: Zelle Donation View */}
        {step === 'zelle' && (
          <motion.div
            key="zelle"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-[500px] bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-10 flex flex-col space-y-7"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <button
                onClick={() => setStep('cover')}
                className="flex items-center text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back
              </button>

              <h2 className="text-lg font-bold text-gray-900">
                Donate via Zelle
              </h2>

              <div className="w-12"></div>
            </div>

            {/* Instructions */}
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-serif font-bold text-gray-900">
                Thank You for Giving
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                To make your donation, send your contribution through Zelle
                using the email address below.
              </p>
            </div>

            {/* Zelle Email */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-600">
                Zelle Email Address
              </label>

              <div className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 bg-gray-50">
                <span className="flex-1 min-w-0 text-sm font-medium text-gray-800 break-all">
                  {zelleEmail}
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="shrink-0 p-2.5 rounded-lg bg-white border border-gray-200 text-[#2B1B67] hover:bg-[#2B1B67]/5 transition-all duration-200"
                  aria-label="Copy Zelle email"
                >
                  {copied ? (
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-400">
                {copied ? 'Email copied!' : 'Tap the copy button to copy the email address.'}
              </p>
            </div>

            {/* Donation Instructions */}
            <div className="rounded-2xl bg-[#2B1B67]/5 border border-[#2B1B67]/10 p-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Open your Zelle-enabled banking app, choose Zelle, and send
                your donation to the email address above.
              </p>
            </div>

            {/* Donate Here Button */}
            <a
              href={donationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full text-white bg-[#2B1B67] hover:bg-[#1E124B] active:scale-[0.98] shadow-md transition-all duration-200 text-sm font-semibold tracking-wide flex justify-center items-center gap-2"
            >
              Donate Here
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* Small note */}
            <p className="text-center text-xs text-gray-400">
              Your generosity makes a difference. Thank you for supporting
              RCCG Rehoboth Parish.
            </p>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}

export default Donate