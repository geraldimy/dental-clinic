"use client";

import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";

const STATS = [
  { value: 1000, suffix: "+", label: "Pasien Dilayani" },
  { value: 95, suffix: "%", label: "Kepuasan Pasien" },
  { value: 100, suffix: "+", label: "Edukasi Kesehatan" },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function About() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="section-padding bg-white"
      aria-label="About doctor section"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative shape behind image */}
              <div
                className="absolute -bottom-6 -left-6 w-3/4 h-3/4 rounded-3xl opacity-30"
                style={{ background: "linear-gradient(135deg, #DCC8F2 0%, #B58AD9 100%)" }}
                aria-hidden="true"
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-100/60">
                <Image
                  src="/images/about-consultation.png"
                  alt="drg. Gita Dhora sedang berkonsultasi dengan pasien"
                  width={560}
                  height={620}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-5 -right-5 md:-right-8 glass rounded-2xl p-5 shadow-xl shadow-purple-100/60"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#B58AD9]">5+</p>
                  <p className="text-xs text-[#6B7280] font-medium mt-0.5">Tahun</p>
                  <p className="text-xs text-[#6B7280] font-medium">Pengalaman</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-7"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4EEFB] border border-[#DCC8F2] text-[#B58AD9] text-xs font-semibold tracking-widest uppercase mb-4">
                Tentang Dokter
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] leading-tight">
                Mengenal{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #B58AD9 0%, #7B5EA7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  drg. Gita Dhora
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <p className="text-[#6B7280] leading-relaxed">
                drg. Gita Dhora adalah dokter gigi umum yang berkomitmen
                memberikan pelayanan kesehatan gigi dan mulut yang nyaman, aman,
                dan berbasis edukasi pasien.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Dengan pendekatan yang ramah dan penuh empati, setiap pasien
                mendapatkan pemahaman yang jelas mengenai kondisi giginya serta
                pilihan perawatan yang sesuai — karena keputusan terbaik dimulai
                dari informasi yang tepat.
              </p>
            </motion.div>

            {/* Quote card */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl bg-[#F4EEFB] border border-[#DCC8F2] p-6"
            >
              <Quote
                size={32}
                className="text-[#DCC8F2] mb-3"
                style={{ transform: "scaleX(-1)" }}
              />
              <p className="text-[#1F1F1F] font-medium italic leading-relaxed">
                "Setiap senyum yang sehat dimulai dari perawatan yang tepat dan
                hubungan yang baik antara dokter dan pasien."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-0.5 bg-[#B58AD9] rounded-full" />
                <p className="text-[#B58AD9] text-sm font-semibold">
                  drg. Gita Dhora
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              ref={statsRef}
              className="grid grid-cols-3 gap-4 pt-2"
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#F4EEFB] border border-[#E8D8F8]"
                >
                  <span className="text-2xl md:text-3xl font-bold text-[#B58AD9]">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      inView={statsInView}
                    />
                  </span>
                  <span className="text-xs text-[#6B7280] font-medium mt-1 leading-snug text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
