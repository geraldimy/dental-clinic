"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  UserCheck,
  ShieldCheck,
  Award,
  Home,
  Star,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "message-square": <MessageSquare size={24} strokeWidth={1.5} />,
  "user-check": <UserCheck size={24} strokeWidth={1.5} />,
  "shield-check": <ShieldCheck size={24} strokeWidth={1.5} />,
  award: <Award size={24} strokeWidth={1.5} />,
  home: <Home size={24} strokeWidth={1.5} />,
  star: <Star size={24} strokeWidth={1.5} />,
};

const COLORS = [
  "#B58AD9",
  "#9B6EC8",
  "#A87DD0",
  "#C49EE0",
  "#B58AD9",
  "#9B6EC8",
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding bg-white"
      aria-label="Why choose us section"
    >
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4EEFB] border border-[#DCC8F2] text-[#B58AD9] text-xs font-semibold tracking-widest uppercase mb-5">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] leading-tight mb-4">
            Mengapa Memilih{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #B58AD9 0%, #7B5EA7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              drg. Gita Dhora?
            </span>
          </h2>
          <p className="text-[#6B7280] leading-relaxed text-lg">
            Komitmen kami bukan sekadar merawat gigi, tapi membangun kepercayaan
            dan hubungan jangka panjang dengan setiap pasien.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex gap-5 p-7 rounded-3xl border border-[#E8D8F8] bg-[#FCFAFF] hover:bg-white hover:border-[#B58AD9]/30 hover:shadow-xl hover:shadow-purple-50/80 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${COLORS[i]}15 0%, ${COLORS[i]}08 100%)`,
                  color: COLORS[i],
                }}
              >
                {iconMap[feature.icon]}
              </div>
              <div>
                <h3 className="font-bold text-[#1F1F1F] mb-2 group-hover:text-[#B58AD9] transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
