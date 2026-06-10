"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, CLINIC_INFO } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=Halo%20drg.%20Gita%20Dhora%2C%20saya%20ingin%20membuat%20reservasi.`;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-purple-100/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" id="nav-logo">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-md shadow-purple-300/40 group-hover:scale-105 transition-transform duration-200">
              <ToothIcon />
            </div>
            <div>
              <p className="text-[10px] font-medium text-[#B58AD9] tracking-widest uppercase leading-none">
                Dokter Gigi Umum
              </p>
              <p className="font-bold text-[#1F1F1F] text-sm leading-tight">
                drg. Gita Dhora
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#F4EEFB] hover:text-[#B58AD9] ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#B58AD9] bg-[#F4EEFB]"
                    : "text-[#6B7280]"
                }`}
                onClick={() => setActiveSection(link.href.replace("#", ""))}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B58AD9] text-white text-sm font-semibold shadow-md shadow-purple-300/40 hover:bg-[#9B6EC8] hover:shadow-lg hover:shadow-purple-300/50 hover:scale-[1.02] transition-all duration-200"
            >
              <MessageCircle size={16} />
              Reservasi Sekarang
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-[#6B7280] hover:bg-[#F4EEFB] hover:text-[#B58AD9] transition-all duration-200"
            aria-label="Toggle mobile menu"
            id="nav-mobile-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#E8D8F8]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                    <ToothIcon />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-[#B58AD9] tracking-widest uppercase leading-none">
                      Dokter Gigi
                    </p>
                    <p className="font-bold text-[#1F1F1F] text-sm">
                      drg. Gita Dhora
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl text-[#6B7280] hover:bg-[#F4EEFB]"
                  aria-label="Close mobile menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col p-6 gap-1 flex-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl text-base font-medium text-[#6B7280] hover:bg-[#F4EEFB] hover:text-[#B58AD9] transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-[#E8D8F8]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full bg-[#B58AD9] text-white font-semibold shadow-md shadow-purple-300/40 hover:bg-[#9B6EC8] transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  <MessageCircle size={18} />
                  Reservasi Sekarang
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function ToothIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 3.5C0.5 5 1 8 2.5 10C3.5 11.5 4 13.5 4.5 15.5C5 18 5.5 22 7 22C8 22 8.5 20 9 18C9.5 16 10 14.5 12 14.5C14 14.5 14.5 16 15 18C15.5 20 16 22 17 22C18.5 22 19 18 19.5 15.5C20 13.5 20.5 11.5 21.5 10C23 8 23.5 5 22 3.5C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z"
        fill="white"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="0.5"
      />
    </svg>
  );
}
