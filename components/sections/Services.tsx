"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Sparkles,
  Shield,
  Zap,
  MessageCircle,
  Heart,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  search: <Search size={26} strokeWidth={1.5} />,
  sparkles: <Sparkles size={26} strokeWidth={1.5} />,
  shield: <Shield size={26} strokeWidth={1.5} />,
  zap: <Zap size={26} strokeWidth={1.5} />,
  "message-circle": <MessageCircle size={26} strokeWidth={1.5} />,
  heart: <Heart size={26} strokeWidth={1.5} />,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="layanan"
      className="section-padding bg-[#FCFAFF]"
      aria-label="Dental services section"
    >
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
          ref={ref}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4EEFB] border border-[#DCC8F2] text-[#B58AD9] text-xs font-semibold tracking-widest uppercase mb-5">
            Layanan Unggulan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] leading-tight mb-4">
            Perawatan Gigi untuk{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #B58AD9 0%, #7B5EA7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Semua Usia
            </span>
          </h2>
          <p className="text-[#6B7280] leading-relaxed text-lg">
            Layanan komprehensif dengan pendekatan yang personal dan nyaman
            untuk menjaga kesehatan gigi seluruh keluarga.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              id={`service-${service.id}`}
              className="group relative rounded-3xl bg-white border border-[#E8D8F8] p-8 cursor-default overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-100/60 hover:border-[#B58AD9]/40"
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(181,138,217,0.04) 0%, rgba(220,200,242,0.06) 100%)",
                }}
                aria-hidden="true"
              />
              {/* Gradient border line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"
                style={{
                  background: "linear-gradient(90deg, #B58AD9 0%, #DCC8F2 100%)",
                }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}10 100%)`,
                  color: service.color,
                }}
              >
                {iconMap[service.icon]}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#1F1F1F] mb-3 group-hover:text-[#B58AD9] transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
