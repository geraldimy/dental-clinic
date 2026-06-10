"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_ARTICLES } from "@/lib/data";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="edukasi"
      className="section-padding bg-white"
      aria-label="Educational blog articles section"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4EEFB] border border-[#DCC8F2] text-[#B58AD9] text-xs font-semibold tracking-widest uppercase mb-5">
              Edukasi Kesehatan Gigi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] leading-tight mb-3">
              Artikel &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #B58AD9 0%, #7B5EA7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Tips
              </span>
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              Temukan informasi terpercaya seputar kesehatan gigi dan mulut
              untuk menjaga senyum sehat Anda setiap hari.
            </p>
          </div>
          <a
            href="#edukasi"
            id="blog-view-all"
            className="inline-flex items-center gap-2 text-[#B58AD9] font-semibold hover:gap-3 transition-all duration-200 whitespace-nowrap"
          >
            Lihat Semua Artikel
            <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_ARTICLES.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              id={`blog-article-${article.id}`}
              className="group rounded-3xl bg-white border border-[#E8D8F8] overflow-hidden hover:shadow-xl hover:shadow-purple-100/60 hover:border-[#B58AD9]/30 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, #B58AD9 100%)",
                  }}
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#B58AD9] text-[10px] font-semibold">
                    <Tag size={10} />
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-[#6B7280] text-xs">
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {article.readTime}
                  </span>
                  <span>·</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="font-bold text-[#1F1F1F] text-sm leading-snug group-hover:text-[#B58AD9] transition-colors duration-200 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <button
                  className="inline-flex items-center gap-1.5 text-[#B58AD9] text-xs font-semibold hover:gap-2.5 transition-all duration-200 mt-1"
                  aria-label={`Baca artikel ${article.title}`}
                >
                  Baca Selengkapnya
                  <ArrowRight size={13} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
