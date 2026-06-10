"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FAQ_ITEMS } from "@/lib/data";
import { HelpCircle, ChevronDown } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openId, setOpenId] = useState<string | null>(null);

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=Halo%20drg.%20Gita%2C%20saya%20ingin%20bertanya.`;

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="section-padding bg-[#FCFAFF]"
      aria-label="Frequently asked questions section"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4EEFB] border border-[#DCC8F2] text-[#B58AD9] text-xs font-semibold tracking-widest uppercase mb-6">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] leading-tight mb-5">
              Pertanyaan yang{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #B58AD9 0%, #7B5EA7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sering Diajukan
              </span>
            </h2>
            <p className="text-[#6B7280] leading-relaxed text-lg mb-8">
              Punya pertanyaan lain? Jangan ragu untuk menghubungi kami melalui
              WhatsApp atau form kontak.
            </p>

            {/* Decorative card */}
            <div className="rounded-3xl bg-white border border-[#E8D8F8] p-6 flex gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
                <HelpCircle size={22} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-[#1F1F1F] mb-1">
                  Masih ada pertanyaan?
                </p>
                <p className="text-[#6B7280] text-sm mb-3">
                  Tim kami siap membantu menjawab pertanyaan Anda.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="faq-whatsapp-btn"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-primary text-white text-sm font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
                >
                  Hubungi WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Custom Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {FAQ_ITEMS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              >
                <div
                  className={`border rounded-2xl bg-white overflow-hidden transition-all duration-200 ${
                    openId === item.id
                      ? "border-[#B58AD9]/50 shadow-md shadow-purple-50"
                      : "border-[#E8D8F8]"
                  }`}
                >
                  {/* Question trigger */}
                  <button
                    id={`faq-trigger-${item.id}`}
                    onClick={() => toggle(item.id)}
                    aria-expanded={openId === item.id}
                    aria-controls={`faq-content-${item.id}`}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                  >
                    <span
                      className={`font-semibold text-sm leading-snug transition-colors duration-200 ${
                        openId === item.id ? "text-[#B58AD9]" : "text-[#1F1F1F]"
                      }`}
                    >
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        openId === item.id
                          ? "rotate-180 text-[#B58AD9]"
                          : "text-[#6B7280]"
                      }`}
                    />
                  </button>

                  {/* Answer content */}
                  <div
                    id={`faq-content-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${item.id}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-[#6B7280] leading-relaxed text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
