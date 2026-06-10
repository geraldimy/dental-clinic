"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import { CLINIC_INFO, NAV_LINKS } from "@/lib/data";

const QUICK_LINKS = NAV_LINKS;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=Halo%20drg.%20Gita%20Dhora%2C%20saya%20ingin%20membuat%20reservasi.`;

  return (
    <footer id="kontak" className="bg-[#1F1F1F] text-white">
      <div className="container-custom pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                <ToothIcon />
              </div>
              <div>
                <p className="text-[10px] font-medium text-[#B58AD9] tracking-widest uppercase leading-none">
                  Dokter Gigi Umum
                </p>
                <p className="font-bold text-white text-sm leading-tight">
                  drg. Gita Dhora
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Memberikan perawatan gigi yang nyaman, profesional, dan
              berorientasi pada kebutuhan pasien dengan pendekatan yang hangat
              dan edukatif.
            </p>
            <div className="flex gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B58AD9] flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={`https://instagram.com/${CLINIC_INFO.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B58AD9] flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                id="footer-email"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B58AD9] flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#B58AD9] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B58AD9] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Informasi Kontak
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#B58AD9]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#B58AD9]" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">{CLINIC_INFO.address}</p>
                  <p className="text-gray-400 text-sm">{CLINIC_INFO.city}</p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-[#B58AD9]/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-[#B58AD9]" />
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-[#B58AD9] transition-colors"
                >
                  {CLINIC_INFO.whatsappDisplay}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-[#B58AD9]/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-[#B58AD9]" />
                </div>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="text-gray-300 text-sm hover:text-[#B58AD9] transition-colors"
                >
                  {CLINIC_INFO.email}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-[#B58AD9]/20 flex items-center justify-center flex-shrink-0">
                  <InstagramIcon className="text-[#B58AD9]" size={14} />
                </div>
                <a
                  href={`https://instagram.com/${CLINIC_INFO.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-[#B58AD9] transition-colors"
                >
                  {CLINIC_INFO.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Hours Column */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Jam Praktik
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <Clock size={14} className="text-[#B58AD9]" />
              <p className="text-gray-400 text-xs">Waktu operasional</p>
            </div>
            <ul className="space-y-3">
              {CLINIC_INFO.hours.map((schedule) => (
                <li
                  key={schedule.day}
                  className="flex justify-between items-center py-2.5 border-b border-white/10 last:border-0"
                >
                  <span className="text-gray-400 text-sm">{schedule.day}</span>
                  <span
                    className={`text-sm font-medium ${
                      schedule.time === "Tutup"
                        ? "text-gray-500"
                        : "text-[#DCC8F2]"
                    }`}
                  >
                    {schedule.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-3.5 rounded-2xl bg-[#B58AD9]/15 border border-[#B58AD9]/20">
              <p className="text-gray-300 text-xs leading-relaxed">
                📍 Untuk kunjungan di luar jam praktik, silakan hubungi kami
                terlebih dahulu via WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} drg. Gita Dhora. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            Dibuat dengan{" "}
            <Heart size={13} className="text-[#B58AD9]" fill="#B58AD9" />
            untuk senyum sehat Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}

function ToothIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 3.5C0.5 5 1 8 2.5 10C3.5 11.5 4 13.5 4.5 15.5C5 18 5.5 22 7 22C8 22 8.5 20 9 18C9.5 16 10 14.5 12 14.5C14 14.5 14.5 16 15 18C15.5 20 16 22 17 22C18.5 22 19 18 19.5 15.5C20 13.5 20.5 11.5 21.5 10C23 8 23.5 5 22 3.5C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z"
        fill="white"
      />
    </svg>
  );
}

function InstagramIcon({ className, size = 18 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
