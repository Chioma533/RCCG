import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/images/Logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Ministries", path: "/ministries" },
    { name: "Sermons", path: "/sermons" },
    { name: "Contact", path: "/contact" },
    { name: "Our Leaders", path: "/our-leaders" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 1)"
          : "rgba(255, 255, 255, 0)",
        boxShadow: isScrolled
          ? "0 4px 20px rgba(0, 0, 0, 0.08)"
          : "0 0 0 rgba(0, 0, 0, 0)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={`
  fixed left-0 right-0 top-0 z-50 
  transition-all duration-300
  ${isScrolled ? "border-b border-gray-100" : ""}
`}
    >
      <div
        className={`
          mx-auto w-full
          transition-all duration-300
          ${
            isScrolled
              ? "max-w-none px-4 sm:px-6 lg:px-10"
              : "px-4 pt-5 sm:px-6 sm:pt-7"
          }
        `}
      >
        {/* Desktop Navbar */}
        <div
          className={`
            hidden md:flex items-center
            transition-all duration-300
            ${
              isScrolled
                ? "h-[70px] w-full rounded-none border-0 bg-transparent px-2 shadow-none backdrop-blur-none"
                : "mx-auto h-[58px] max-w-[720px] rounded-full border border-white/30 bg-white/15 px-5 shadow-lg backdrop-blur-lg"
            }
          `}
        >
          {/* Logo */}
          <Link
            to="/"
            className="pointer-events-auto flex shrink-0 items-center"
          >
            <img
              src={logoImg}
              alt="RCCG Rehoboth Parish"
              className={`
                w-auto object-contain transition-all duration-300 
                ${isScrolled ? "h-10" : "h-9.5"}
              `}
            />
          </Link>

          {/* Navigation Links */}
          <div
            className={`
              pointer-events-auto flex flex-1 items-center
              transition-all duration-300
              ${
                isScrolled
                  ? "ml-10 justify-center gap-9"
                  : "ml-8 justify-between"
              }
            `}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  whitespace-nowrap text-[15px] font-normal
                  transition-colors duration-300
                  ${
                    isScrolled
                      ? isActive(link.path)
                        ? "font-medium text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                      : isActive(link.path)
                        ? "text-white"
                        : "text-white/90 hover:text-white"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Donate Button */}
          <Link
            to="/donate"
            className={`
              pointer-events-auto inline-flex shrink-0 items-center
              rounded-full bg-[#342477]
              font-medium text-white shadow-md
              transition-all duration-200
              hover:-translate-y-0.5 hover:bg-[#2d1f69]
              ${
                isScrolled
                  ? "ml-8 px-5 py-2.5 text-[12px]"
                  : "ml-7 px-5 py-2.5 text-[12px]"
              }
            `}
          >
            Donate now
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <div
            className={`
              flex h-14 items-center justify-between
              transition-all duration-300
              ${
                isScrolled
                  ? "rounded-none border-0 bg-transparent px-0 shadow-none backdrop-blur-none"
                  : "rounded-full border border-white/30 bg-white/15 px-4 shadow-lg backdrop-blur-lg"
              }
            `}
          >
            {/* Logo */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="pointer-events-auto flex items-center"
            >
              <img
                src={logoImg}
                alt="RCCG Rehoboth Parish"
                className="h-9 w-9 object-contain"
              />
            </Link>

            {/* Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`
                pointer-events-auto flex h-9 w-9
                items-center justify-center rounded-full
                transition-colors
                ${
                  isScrolled
                    ? "text-gray-800 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }
              `}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`
                  mt-2 overflow-hidden rounded-2xl
                  border p-3 shadow-xl
                  backdrop-blur-xl
                  ${
                    isScrolled
                      ? "border-gray-100 bg-white"
                      : "border-white/20 bg-black/50"
                  }
                `}
              >
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                        block rounded-xl px-4 py-3 text-sm
                        transition-colors
                        ${
                          isScrolled
                            ? isActive(link.path)
                              ? "bg-gray-100 font-medium text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            : isActive(link.path)
                              ? "bg-white/10 text-white"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div
                    className={`
                      pt-2
                      ${isScrolled ? "border-t border-gray-100" : ""}
                    `}
                  >
                    <Link
                      to="/donate"
                      onClick={() => setIsOpen(false)}
                      className="block rounded-full bg-[#342477] px-6 py-3 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-[#2d1f69]"
                    >
                      Donate now
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
