import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";
import logoImg from "../assets/images/Logo2.png";
import waveImg from "../assets/images/Group 3.png";

const Footer = () => {
  return (
    <footer className="relative bg-brand-dark text-white pt-12 sm:pt-16 pb-6 sm:pb-8 overflow-hidden">
      {/* Footer Main Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-8 lg:gap-12">
          {/* Column 1: Logo & Socials */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center space-y-5 md:space-y-6">
            <div className="flex items-center rounded-full backdrop-blur-sm">
              <img
                src={logoImg}
                alt="RCCG Logo"
                className="h-14 sm:h-15 w-auto brightness-110"
              />
            </div>

            <div className="flex space-x-4 sm:space-x-5">
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
          <div className="text-left md:text-left space-y-3 md:space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white/90">
              Quick Links
            </h3>

            <ul className="space-y-2 sm:space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  to="/ministries"
                  className="hover:text-white transition-colors"
                >
                  Ministries
                </Link>
              </li>

              <li>
                <Link
                  to="/sermons"
                  className="hover:text-white transition-colors"
                >
                  Sermons
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Times */}
          <div className="text-left md:text-left space-y-3 md:space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white/90">
              Service Times
            </h3>

            <ul className="space-y-2 sm:space-y-2.5 text-sm text-gray-300">
              <li>Sunday School</li>
              <li>Celebration Service</li>
              <li>Bible Study</li>
              <li>Prayer Service</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-2 md:col-span-1 text-left md:text-left space-y-3 md:space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white/90">
              Contact
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="leading-relaxed">
                <span className="font-semibold block text-white/80">
                  Address: {" "}
                  <span className="font-medium">
                    3305 Pleasant Valley Ln, Arlington, TX 76015
                  </span>
                </span>
              </li>

              <li>
                <span className="font-semibold block text-white/80">
                  Phone: <span className="font-medium">(682) 270-0462</span>
                </span>
              </li>

              <li className="wrap-break-word sm:break-all">
                <span className="font-semibold block text-white/80">
                  Email:{" "}
                  <span className="font-medium">
                    {" "}
                    rccgrehoboth3305@gmail.com
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Large Centered REHOBOTH watermark */}
        <div className="mt-12 sm:mt-16 mb-4 text-center select-none pointer-events-none overflow-hidden">
          <span className="font-serif font-bold text-[16vw] sm:text-[11vw] md:text-[8vw] leading-none tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/[0.03] uppercase inline-block whitespace-nowrap">
            Rehoboth
          </span>
        </div>

        {/* Faint Copyright */}
        <div className="border-t border-white/5 pt-5 sm:pt-6 text-center text-xs text-gray-400 px-2">
          <p>
            &copy; {new Date().getFullYear()} RCCG Rehoboth Parish. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Repeating Wave Pattern at bottom edge */}
      <div
        className="absolute bottom-0 left-0 w-full h-8 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('${waveImg}')`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom center",
          backgroundSize: "auto 24px",
        }}
      />
    </footer>
  );
};

export default Footer;
