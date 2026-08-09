import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, CheckCircle, AlertTriangle } from 'lucide-react'
import { Images } from '../constants/images'
import { initializePayment } from '../services/paymentService'

const Donate = () => {
  const [step, setStep] = useState('cover') // 'cover', 'form', 'loading', 'success', 'error'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [purpose, setPurpose] = useState('Tithe')
  const [amount, setAmount] = useState('50') // Default $50
  const [customAmount, setCustomAmount] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [paymentDetails, setPaymentDetails] = useState(null)

  const finalAmount = amount === 'custom' ? customAmount : amount;

  const handleDonateInit = (e) => {
    e.preventDefault()
    if (!email || !name || !finalAmount || parseFloat(finalAmount) <= 0) {
      setErrorMsg('Please fill in all fields with valid information.')
      return
    }
    setErrorMsg('')
    setStep('loading')

    initializePayment({
      email,
      name,
      purpose,
      amount: parseFloat(finalAmount),
      onSuccess: (response) => {
        setPaymentDetails(response)
        setStep('success')
        // Reset form
        setName('')
        setEmail('')
        setCustomAmount('')
        setAmount('50')
      },
      onClose: () => {
        setStep('form')
      },
      onError: (err) => {
        setErrorMsg('Payment failed to initialize. Please check your network and try again.')
        setStep('error')
      }
    })
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-center items-center py-16 px-4">
      <AnimatePresence mode="wait">
        
        {/* Step 1: Cover View (Matches Screenshot Exactly) */}
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

            {/* Donate now Button */}
            <button
              onClick={() => setStep('form')}
              className="w-full max-w-[340px] py-4 rounded-full text-white bg-[#2B1B67] hover:bg-[#1E124B] active:scale-[0.98] shadow-md transition-all duration-200 text-sm font-semibold tracking-wide cursor-pointer"
            >
              Donate now
            </button>
          </motion.div>
        )}

        {/* Step 2: Form View */}
        {step === 'form' && (
          <motion.div
            key="form"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-[500px] bg-white rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col space-y-6"
          >
            {/* Form Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <button
                onClick={() => setStep('cover')}
                className="flex items-center text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back
              </button>
              <h2 className="text-lg font-bold text-gray-900">Enter Details</h2>
              <div className="w-12"></div> {/* Spacer */}
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-50 rounded-xl text-red-600 text-xs flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleDonateInit} className="space-y-5">
              {/* Name Input */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold text-gray-600">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B1B67]/20 focus:border-[#2B1B67] text-sm text-gray-800 transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold text-gray-600">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B1B67]/20 focus:border-[#2B1B67] text-sm text-gray-800 transition-all"
                />
              </div>

              {/* Purpose Select */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold text-gray-600">Donation Type / Purpose</label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B1B67]/20 focus:border-[#2B1B67] text-sm text-gray-800 bg-white transition-all"
                >
                  <option value="Tithe">Tithe</option>
                  <option value="Offering">Offering</option>
                  <option value="Thanksgiving">Thanksgiving</option>
                  <option value="Building Fund">Building Fund</option>
                  <option value="Welfare">Welfare</option>
                  <option value="Missions">Missions / Outreach</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Amount Select Grid */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold text-gray-600">Select Amount (USD / NGN)</label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['10', '20', '50', '100', '250'].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => {
                        setAmount(val)
                        setCustomAmount('')
                      }}
                      className={`py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                        amount === val
                          ? 'border-[#2B1B67] bg-[#2B1B67]/5 text-[#2B1B67]'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      ${val}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setAmount('custom')}
                    className={`py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                      amount === 'custom'
                        ? 'border-[#2B1B67] bg-[#2B1B67]/5 text-[#2B1B67]'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Custom
                  </button>
                </div>
              </div>

              {/* Custom Amount Input */}
              {amount === 'custom' && (
                <div className="flex flex-col space-y-1.5 animate-fadeIn">
                  <label className="text-xs font-semibold text-gray-600">Enter Custom Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input
                      type="number"
                      min="1"
                      required
                      placeholder="0.00"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B1B67]/20 focus:border-[#2B1B67] text-sm text-gray-800 transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 py-4 rounded-full text-white bg-[#2B1B67] hover:bg-[#1E124B] active:scale-[0.98] shadow-md transition-all duration-200 text-sm font-semibold tracking-wide flex justify-center items-center gap-2 cursor-pointer"
              >
                Proceed to pay ${finalAmount || '0'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}

        {/* Step 3: Loading / Simulating state */}
        {step === 'loading' && (
          <motion.div
            key="loading"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-[500px] bg-white rounded-3xl shadow-lg border border-gray-100 p-12 flex flex-col items-center justify-center space-y-6 text-center"
          >
            {/* Spinning loading indicator */}
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
              <div className="absolute inset-0 rounded-full border-4 border-[#2B1B67] border-t-transparent animate-spin"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">Connecting payment gateway...</h3>
              <p className="text-gray-500 text-sm font-light">Please do not refresh this page.</p>
            </div>
          </motion.div>
        )}

        {/* Step 4: Success View */}
        {step === 'success' && (
          <motion.div
            key="success"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-[500px] bg-white rounded-3xl shadow-lg border border-gray-100 p-10 flex flex-col items-center justify-center text-center space-y-6"
          >
            <CheckCircle className="h-16 w-16 text-emerald-500 animate-bounce" />
            
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-gray-900">Thank You for Giving!</h2>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed font-light">
                Your donation of <span className="font-bold text-gray-900">${paymentDetails?.amount}</span> for <span className="font-bold text-gray-900">{paymentDetails?.purpose}</span> was successfully processed. A receipt has been sent to {paymentDetails?.email}.
              </p>
            </div>

            {paymentDetails?.reference && (
              <div className="py-2.5 px-4 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-500 select-all font-mono">
                Ref: {paymentDetails.reference}
              </div>
            )}

            <button
              onClick={() => setStep('cover')}
              className="w-full max-w-[280px] py-3.5 rounded-full text-white bg-[#2B1B67] hover:bg-[#1E124B] shadow-md transition-all duration-200 text-sm font-semibold tracking-wide cursor-pointer"
            >
              Back to Donation Screen
            </button>
          </motion.div>
        )}

        {/* Step 5: Error View */}
        {step === 'error' && (
          <motion.div
            key="error"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-[500px] bg-white rounded-3xl shadow-lg border border-gray-100 p-10 flex flex-col items-center justify-center text-center space-y-6"
          >
            <AlertTriangle className="h-16 w-16 text-red-500" />
            
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-gray-900">Payment Failed</h2>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed font-light">
                {errorMsg || 'We were unable to process your transaction. Please verify your details and try again.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[340px]">
              <button
                onClick={() => setStep('form')}
                className="flex-1 py-3.5 rounded-full text-[#2B1B67] border border-[#2B1B67] hover:bg-[#2B1B67]/5 transition-all duration-200 text-sm font-semibold cursor-pointer"
              >
                Try Again
              </button>
              <button
                onClick={() => setStep('cover')}
                className="flex-1 py-3.5 rounded-full text-white bg-[#2B1B67] hover:bg-[#1E124B] transition-all duration-200 text-sm font-semibold cursor-pointer"
              >
                Go Home
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}

export default Donate
