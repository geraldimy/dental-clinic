"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, MessageCircle, Calendar } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data";

const FEATURES = [
  "Pemeriksaan Gigi Menyeluruh",
  "Scaling & Pembersihan Karang Gigi",
  "Tambal Gigi Estetik",
  "Konsultasi Kesehatan Gigi & Mulut",
  "Edukasi Perawatan Preventif",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.2 },
  },
};

export default function Hero() {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=Halo%20drg.%20Gita%20Dhora%2C%20saya%20ingin%20konsultasi.`;
  const reservasiUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=Halo%20drg.%20Gita%20Dhora%2C%20saya%20ingin%20membuat%20reservasi.`;

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FCFAFF] pt-24 pb-16"
      aria-label="Hero section"
    >
      {/* Floating background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-30 blob-animation"
          style={{
            background: "radial-gradient(circle, #DCC8F2 0%, #F4EEFB 60%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-1/3 -left-32 w-80 h-80 rounded-full opacity-20 blob-animation"
          style={{
            background: "radial-gradient(circle, #B58AD9 0%, #DCC8F2 60%, transparent 100%)",
            animationDelay: "-3s",
          }}
        />
        <div
          className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full opacity-15 blob-animation"
          style={{
            background: "radial-gradient(circle, #DCC8F2 0%, transparent 70%)",
            animationDelay: "-5s",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #B58AD9 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column — Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7"
          >
            {/* Badge */}
            <motion.div variants={fadeUpVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4EEFB] border border-[#DCC8F2] text-[#B58AD9] text-xs font-semibold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#B58AD9] animate-pulse" />
                Dokter Gigi Umum
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUpVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-bold text-[#1F1F1F] leading-[1.15] tracking-tight">
                Senyum Sehat Dimulai dari{" "}
                <span
                  className="relative inline-block"
                  style={{
                    background: "linear-gradient(135deg, #B58AD9 0%, #7B5EA7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Perawatan yang Tepat
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              className="text-[#6B7280] text-lg leading-relaxed max-w-xl"
            >
              Perawatan gigi yang nyaman, profesional, dan berorientasi pada
              kebutuhan setiap pasien. Bersama drg. Gita Dhora, senyum sehat
              bukan lagi impian.
            </motion.p>

            {/* Feature list */}
            <motion.ul variants={fadeUpVariants} className="space-y-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={12} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-[#1F1F1F] text-sm font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href={reservasiUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-reservasi-btn"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full gradient-primary text-white font-semibold shadow-lg shadow-purple-300/40 hover:shadow-xl hover:shadow-purple-300/50 hover:scale-[1.02] transition-all duration-200"
              >
                <Calendar size={18} />
                Reservasi Sekarang
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-[#B58AD9] text-[#B58AD9] font-semibold hover:bg-[#F4EEFB] hover:scale-[1.02] transition-all duration-200"
              >
                <MessageCircle size={18} />
                Konsultasi WhatsApp
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUpVariants}
              className="flex gap-8 pt-4 border-t border-[#E8D8F8]"
            >
              {[
                { value: "1000+", label: "Pasien Dilayani" },
                { value: "95%", label: "Kepuasan Pasien" },
                { value: "5+", label: "Tahun Pengalaman" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-[#B58AD9]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#6B7280] font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            {/* Image container */}
            <div className="relative w-full max-w-md lg:max-w-full">
              {/* Glow background */}
              <div
                className="absolute inset-4 rounded-3xl blur-3xl opacity-50"
                style={{
                  background: "linear-gradient(135deg, #DCC8F2 0%, #B58AD9 100%)",
                }}
                aria-hidden="true"
              />

              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/60 border-4 border-white">
                <Image
                  src="/images/hero-dentist.png"
                  alt="drg. Gita Dhora — Dokter Gigi Umum Jakarta"
                  width={520}
                  height={600}
                  priority
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "520/600" }}
                />
              </div>

              {/* Floating card — top right */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-4 -right-4 md:-right-6 glass rounded-2xl p-4 shadow-lg shadow-purple-100/50 float-animation"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1F1F1F]">Dokter Gigi</p>
                    <p className="text-[10px] text-[#6B7280]">Berpraktik di Jakarta Barat</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 md:-left-6 glass rounded-2xl p-4 shadow-lg shadow-purple-100/50"
                style={{ animation: "float 7s ease-in-out infinite", animationDelay: "-2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4EEFB] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B58AD9" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1F1F1F]">Pelayanan Ramah</p>
                    <p className="text-[10px] text-[#6B7280]">& Personal</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
