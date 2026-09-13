import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/siteData';
import { GreenButtonPixel, DotGrid } from './Icons';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-white/50 uppercase mb-3">
          <GreenButtonPixel className="w-2.5 h-2.5" />
          <span>RESULTADOS REAIS</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl xs:text-3xl sm:text-5xl font-light tracking-tight text-white"
        >
          Líderes que deixaram de fazer tudo manualmente.
        </motion.h2>
      </div>

      {/* Main Grid: Left Stats, Right Carousel Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
        {/* Left Column: Metric Cards */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">
          {/* Card 1: 220+ Hours */}
          <div className="rounded-[22px] sm:rounded-[28px] bg-[#0c0c0c] border border-white/10 p-5 sm:p-8 flex flex-col justify-between min-h-[170px] sm:min-h-[190px]">
            <div className="text-3xl sm:text-5xl font-light text-white tracking-tight flex items-baseline gap-1">
              <span>220</span>
              <span className="text-2xl text-[#c7ff97] font-normal">+</span>
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono tracking-wider text-white/50 uppercase pt-4 border-t border-white/[0.08]">
              HORAS DEVOLVIDAS À EQUIPE TODOS OS MESES.
            </div>
          </div>

          {/* Card 2: 70% Manual Steps */}
          <div className="rounded-[22px] sm:rounded-[28px] bg-[#0c0c0c] border border-white/10 p-5 sm:p-8 flex flex-col justify-between min-h-[170px] sm:min-h-[190px]">
            <div className="text-3xl sm:text-5xl font-light text-white tracking-tight flex items-baseline gap-1">
              <span>70</span>
              <span className="text-2xl text-[#c7ff97] font-normal">%</span>
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono tracking-wider text-white/50 uppercase pt-4 border-t border-white/[0.08]">
              ETAPAS MANUAIS ELIMINADAS EM TODOS OS FLUXOS.
            </div>
          </div>
        </div>

        {/* Right Column: Active Testimonial Card */}
        <div className="lg:col-span-8 rounded-[22px] sm:rounded-[32px] bg-[#0c0c0c] border border-white/10 p-5 sm:p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-6 right-6 pointer-events-none hidden sm:block">
            <DotGrid cols={6} rows={6} className="opacity-20" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between h-full gap-6 sm:gap-8"
            >
              {/* Top Meta: Company & Date */}
              <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-5 sm:pb-6">
                <div className="flex items-center gap-3">
                  <img
                    src={current.companyLogo}
                    alt={current.company}
                    className="h-5 sm:h-6 w-auto object-contain filter brightness-200 opacity-80"
                  />
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono tracking-wider text-white/40">
                  {current.date}
                </div>
              </div>

              {/* Quote Body */}
              <blockquote className="text-lg sm:text-2xl lg:text-3xl font-light text-white tracking-tight leading-relaxed">
                “{current.quote}”
              </blockquote>

              {/* Bottom Author Row & Carousel Arrows */}
              <div className="flex items-center justify-between gap-4 pt-5 sm:pt-6 border-t border-white/[0.08] flex-wrap">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-white/20 filter grayscale shrink-0"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-light text-white tracking-tight">
                      {current.author}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider text-white/50 uppercase">
                      {current.role}
                    </span>
                  </div>
                </div>

                {/* Pagination arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Depoimento anterior"
                    className="w-10 h-10 rounded-full border border-white/15 hover:border-white/40 bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Próximo depoimento"
                    className="w-10 h-10 rounded-full border border-white/15 hover:border-white/40 bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
