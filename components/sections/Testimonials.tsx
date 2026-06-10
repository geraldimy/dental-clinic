"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const itemsPerView = 3;
  const totalSlides = Math.ceil(TESTIMONIALS.length / itemsPerView);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const visibleTestimonials = TESTIMONIALS.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.4 } }),
  };

  return (
    <section
      id="testimoni"
      ref={ref}
      className="section-padding bg-[#FCFAFF] relative overflow-hidden"
      aria-label="Patient testimonials section"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, #F4EEFB 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4EEFB] border border-[#DCC8F2] text-[#B58AD9] text-xs font-semibold tracking-widest uppercase mb-5">
            Testimoni Pasien
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] leading-tight mb-4">
            Apa Kata{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #B58AD9 0%, #7B5EA7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pasien Kami
            </span>
          </h2>
          <p className="text-[#6B7280] leading-relaxed text-lg">
            Kepuasan pasien adalah prioritas utama. Simak cerita nyata dari
            mereka yang telah merasakan manfaat perawatan bersama drg. Gita.
          </p>
        </motion.div>

        {/* Carousel — Desktop (3 cards) */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid md:grid-cols-3 gap-6"
              >
                {visibleTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel — Mobile (1 card) */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <TestimonialCard
                  testimonial={TESTIMONIALS[currentIndex % TESTIMONIALS.length]}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            id="testimonial-prev"
            className="w-10 h-10 rounded-full border-2 border-[#DCC8F2] text-[#B58AD9] hover:bg-[#B58AD9] hover:text-white hover:border-[#B58AD9] transition-all duration-200 flex items-center justify-center"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 h-2 bg-[#B58AD9]"
                    : "w-2 h-2 bg-[#DCC8F2]"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            id="testimonial-next"
            className="w-10 h-10 rounded-full border-2 border-[#DCC8F2] text-[#B58AD9] hover:bg-[#B58AD9] hover:text-white hover:border-[#B58AD9] transition-all duration-200 flex items-center justify-center"
            aria-label="Next testimonials"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <div className="glass-card rounded-3xl p-7 border border-[#E8D8F8] flex flex-col gap-5 h-full">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="#B58AD9"
            className="text-[#B58AD9]"
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-[#1F1F1F] text-sm leading-relaxed flex-1 italic">
        &ldquo;{testimonial.review}&rdquo;
      </p>

      {/* Tag */}
      <span className="inline-flex w-fit px-3 py-1 rounded-full bg-[#F4EEFB] text-[#B58AD9] text-xs font-medium">
        {testimonial.treatment}
      </span>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-[#E8D8F8]">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${testimonial.avatarColor} 0%, #9B6EC8 100%)` }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-[#1F1F1F] text-sm">
            {testimonial.name}
          </p>
          <p className="text-[#6B7280] text-xs">{testimonial.age} tahun</p>
        </div>
      </div>
    </div>
  );
}
