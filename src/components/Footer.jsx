import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import logoImg from '../assets/images/Logo.png'
import waveImg from '../assets/images/Group 3.png'

const Footer = () => {
  return (
    <footer className="relative bg-brand-dark text-white pt-16 pb-8 overflow-hidden">
      {/* Footer Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm inline-block">
              <img src={logoImg} alt="RCCG Logo" className="h-16 w-auto brightness-110" />
            </div>
            <div className="flex space-x-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-500 transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-sky-400 transition-all duration-200"
              >
                {/* Standard X logo placeholder using Twitter icon */}
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-pink-500 transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-lg font-bold text-white/90">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="hover:text-white transition-colors">
                  Ministries
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="hover:text-white transition-colors">
                  Sermons
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Times */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-lg font-bold text-white/90">Service Times</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>Sunday School</li>
              <li>Celebration Service</li>
              <li>Bible Study</li>
              <li>Prayer Service</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-lg font-bold text-white/90">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="leading-relaxed">
                <span className="font-semibold block text-white/80">Address:</span>
                3305 Pleasant Valley Ln, Suite B, Arlington, TX 76015
              </li>
              <li>
                <span className="font-semibold block text-white/80">Phone:</span>
                (682) 270-0462
              </li>
              <li className="break-all">
                <span className="font-semibold block text-white/80">Email:</span>
                rccgrehobothparisharlingtontx@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Large Centered REHOBOTH watermark */}
        <div className="mt-16 mb-4 text-center select-none pointer-events-none">
          <span className="font-serif font-bold text-[8vw] leading-none tracking-[0.3em] text-white/[0.03] uppercase inline-block">
            Rehoboth
          </span>
        </div>

        {/* Faint Copyright */}
        <div className="border-t border-white/5 pt-6 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} RCCG Rehoboth Parish. All rights reserved.</p>
        </div>
      </div>

      {/* Repeating Wave Pattern at bottom edge */}
      <div 
        className="absolute bottom-0 left-0 w-full h-8 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('${waveImg}')`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom center',
          backgroundSize: 'auto 24px'
        }}
      />
    </footer>
  )
}

export default Footer
