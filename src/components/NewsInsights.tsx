import React from 'react';
import { motion } from 'motion/react';
import { ARTICLES } from '../data/siteData';
import { GreenButtonPixel } from './Icons';

export function NewsInsights() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-white/50 uppercase mb-3">
            <GreenButtonPixel className="w-2.5 h-2.5" />
            <span>NOTÍCIAS &amp; INSIGHTS</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl xs:text-3xl sm:text-5xl font-light tracking-tight text-white"
          >
            Artigos.
          </motion.h2>
        </div>

        <p className="text-white/60 font-light text-sm sm:text-base lg:text-lg max-w-md">
          Anotações práticas da construção de automações no mundo real. Aprendizados, escolhas de arquitetura e o que evitar.
        </p>
      </div>

      {/* 3 Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
        {ARTICLES.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-[22px] sm:rounded-[28px] bg-[#0c0c0c] border border-white/10 hover:border-white/30 p-5 sm:p-8 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] transition-all cursor-pointer"
          >
            {/* Top row: Category badge & Date */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 sm:pb-4">
              <span className="px-2.5 py-0.5 rounded-full border border-white/15 bg-white/[0.03] text-[9px] font-mono tracking-widest text-white/80 uppercase">
                {article.category}
              </span>
              <span className="text-[10px] font-mono text-white/40 tracking-wider">
                {article.date}
              </span>
            </div>

            {/* Middle: Title & Excerpt */}
            <div className="my-5 sm:my-6 flex flex-col gap-2.5 sm:gap-3">
              <h3 className="text-lg sm:text-xl font-light tracking-tight text-white group-hover:text-[#c7ff97] transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Bottom: Read Time & Arrow */}
            <div className="flex items-center justify-between pt-3.5 sm:pt-4 border-t border-white/[0.08] text-[10px] sm:text-[11px] font-mono text-white/40 group-hover:text-white transition-colors">
              <span>{article.readTime}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
