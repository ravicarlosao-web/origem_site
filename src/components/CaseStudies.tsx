import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CASE_STUDIES } from '../data/siteData';
import { GreenButtonPixel } from './Icons';

export function CaseStudies() {
  const [activeCard, setActiveCard] = useState<string | null>('carmigui');

  return (
    <section id="case-studies" className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-white/50 uppercase mb-3">
            <GreenButtonPixel className="w-2.5 h-2.5" />
            <span>PORTFÓLIO DE ENTREGAS · WEBSITES NO AR</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-light tracking-tight text-white"
          >
            Sites que já fizemos.
          </motion.h2>
        </div>

        <p className="text-white/60 font-light text-base sm:text-lg max-w-md">
          Websites reais, entregues e operando em produção para os nossos clientes. Clique em qualquer projeto para abrir e navegar no site ao vivo.
        </p>
      </div>

      {/* Bento Grid: 1 Featured Wide Card + 4 Balanced Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {CASE_STUDIES.map((project, index) => {
          const isSelected = activeCard === project.id;
          const isFeatured = index === 0;

          return (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => setActiveCard(project.id)}
              className={`group relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0c0c0c] border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isFeatured
                  ? 'md:col-span-2 min-h-[460px] sm:min-h-[520px]'
                  : 'col-span-1 min-h-[460px] sm:min-h-[500px]'
              } ${
                isSelected
                  ? 'border-[#c7ff97]/80 shadow-[0_0_35px_rgba(199,255,151,0.14)]'
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              {/* Background Image with smooth zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-105 group-hover:scale-105 group-hover:brightness-95 transition-all duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/40" />
              </div>

              {/* Top Row: Year, Duration, Live badge + URL Pill */}
              <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                  <span>{project.year}</span>
                  <span className="text-white/30">·</span>
                  <span>{project.timeline}</span>
                  <span className="text-white/30">·</span>
                  <span className="text-[#c7ff97] flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff97] animate-pulse" />
                    {project.status}
                  </span>
                </div>

                {/* Direct domain badge */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white/90 group-hover:border-[#c7ff97] group-hover:text-[#c7ff97] transition-all">
                  <span className="text-[11px] font-mono tracking-wider">
                    {project.displayUrl || project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </span>
                  <span className="text-xs font-mono group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </div>
              </div>

              {/* Bottom Content: Client, Title, Subtitle, Description and Tags */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono tracking-widest text-[#c7ff97] uppercase">
                      {project.client || 'CLIENTE ORIGEM'}
                    </span>
                    {isFeatured && (
                      <span className="px-2 py-0.5 rounded-full bg-[#c7ff97]/15 border border-[#c7ff97]/40 text-[#c7ff97] text-[9px] font-mono uppercase tracking-wider">
                        DESTAQUE
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white group-hover:text-[#c7ff97] transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <div className="text-sm sm:text-base font-light text-white/80">
                      {project.subtitle}
                    </div>
                  )}
                  {project.description && (
                    <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-2xl mt-1">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Footer of Card: Tags & Direct CTA Button */}
                <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full border border-white/15 bg-black/50 backdrop-blur-md text-[10px] font-mono tracking-wider text-white/70 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c7ff97] font-semibold group-hover:underline">
                    <span>VISITAR WEBSITE AO VIVO</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

