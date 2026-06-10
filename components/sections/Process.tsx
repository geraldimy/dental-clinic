"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Stethoscope, ClipboardList, Activity, CheckCircle } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  calendar: <Calendar size={22} strokeWidth={1.5} />,
  stethoscope: <Stethoscope size={22} strokeWidth={1.5} />,
  "clipboard-list": <ClipboardList size={22} strokeWidth={1.5} />,
  activity: <Activity size={22} strokeWidth={1.5} />,
  "check-circle": <CheckCircle size={22} strokeWidth={1.5} />,
};

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding bg-[#FCFAFF] relative overflow-hidden"
      aria-label="Treatment process section"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, #F4EEFB 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4EEFB] border border-[#DCC8F2] text-[#B58AD9] text-xs font-semibold tracking-widest uppercase mb-5">
            Proses Perawatan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] leading-tight mb-4">
            Langkah Mudah Menuju{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #B58AD9 0%, #7B5EA7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Senyum Sehat
            </span>
          </h2>
          <p className="text-[#6B7280] leading-relaxed text-lg">
            Proses yang transparan dan menyenangkan — dari awal hingga akhir
            perawatan.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Animated progress line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-[#E8D8F8]" aria-hidden="true">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                className="h-full origin-left rounded-full"
                style={{
                  background: "linear-gradient(90deg, #B58AD9 0%, #DCC8F2 100%)",
                }}
              />
            </div>

            <div className="grid grid-cols-5 gap-6 relative">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.15, type: "spring", bounce: 0.4 }}
                    className="relative w-24 h-24 rounded-full border-4 border-white shadow-lg shadow-purple-100/60 flex items-center justify-center mb-6 z-10"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(135deg, #B58AD9 0%, #9B6EC8 100%)"
                          : "white",
                      borderColor: "#B58AD9",
                    }}
                  >
                    <div
                      className={`flex flex-col items-center ${i === 0 ? "text-white" : "text-[#B58AD9]"}`}
                    >
                      {iconMap[step.icon]}
                      <span className="text-xs font-bold mt-0.5">
                        {String(step.step).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>

                  <h3 className="font-bold text-[#1F1F1F] mb-2 text-sm leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] text-xs leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#E8D8F8]"
              aria-hidden="true"
            >
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                className="w-full h-full origin-top rounded-full"
                style={{
                  background: "linear-gradient(180deg, #B58AD9 0%, #DCC8F2 100%)",
                }}
              />
            </div>

            <div className="flex flex-col gap-8 pl-16 relative">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Circle on timeline */}
                  <div
                    className="absolute -left-10 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(135deg, #B58AD9 0%, #9B6EC8 100%)"
                          : "white",
                      borderColor: "#B58AD9",
                      color: i === 0 ? "white" : "#B58AD9",
                    }}
                  >
                    <span className="text-xs font-bold">{step.step}</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-[#E8D8F8]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-[#B58AD9]">{iconMap[step.icon]}</div>
                      <h3 className="font-bold text-[#1F1F1F]">{step.title}</h3>
                    </div>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
