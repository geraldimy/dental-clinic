"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=Halo%20drg.%20Gita%20Dhora%2C%20saya%20ingin%20konsultasi.`;
  const reservasiUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=Halo%20drg.%20Gita%20Dhora%2C%20saya%20ingin%20membuat%20reservasi.`;

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      aria-label="Call to action section"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #B58AD9 0%, #9B6EC8 40%, #7B5EA7 100%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 float-slow"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
          animation: "float-slow 10s ease-in-out infinite reverse",
        }}
        aria-hidden="true"
      />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left — Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Konsultasi Gratis
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Jadwalkan Konsultasi
              <br />
              <span className="opacity-90">Anda Hari Ini</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Jangan tunda lagi perawatan gigi Anda. Hubungi drg. Gita Dhora
              sekarang dan mulai perjalanan menuju senyum sehat yang Anda
              impikan.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href={reservasiUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-reservasi-btn"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#B58AD9] font-bold shadow-xl shadow-purple-900/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 pulse-glow"
              >
                <Calendar size={18} />
                Reservasi Sekarang
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp-btn"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-white/60 text-white font-bold hover:bg-white/15 hover:border-white hover:scale-[1.02] transition-all duration-200 backdrop-blur-sm"
              >
                <MessageCircle size={18} />
                Hubungi via WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
              {[
                { value: "1000+", label: "Pasien Puas" },
                { value: "5+", label: "Tahun Pengalaman" },
                { value: "100%", label: "Profesional" },
              ].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold text-white">{badge.value}</span>
                  <span className="text-white/70 text-xs font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Tooth illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 float-animation"
          >
            <Image
              src="/images/cta-tooth-transparent.png"
              alt="Ilustrasi gigi sehat"
              width={320}
              height={320}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
