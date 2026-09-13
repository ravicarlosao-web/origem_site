import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/siteData';
import { GreenButtonPixel, DotGrid } from './Icons';

interface ServicesProps {
  onOpenContact?: () => void;
}

export function Services({ onOpenContact }: ServicesProps) {
  return (
    <section id="services" className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-white/50 uppercase mb-3">
            <GreenButtonPixel className="w-2.5 h-2.5" />
            <span>CAPACIDADES CENTRAIS</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl xs:text-3xl sm:text-5xl font-light tracking-tight text-white"
          >
            Nossos serviços.
          </motion.h2>
          <p className="text-white/60 font-light text-sm sm:text-base lg:text-lg mt-3 max-w-xl">
            Soluções completas para a sua presença digital. Do design à infraestrutura técnica, criamos websites que posicionam a sua empresa como líder no mercado angolano.
          </p>
        </div>

        <a
          href="#pricing"
          className="group inline-flex items-center justify-center gap-3 px-5 py-2.5 rounded-full border border-white/20 hover:border-white/50 bg-white/[0.03] hover:bg-white/[0.08] text-white font-mono text-[12px] tracking-wider transition-all cursor-pointer shrink-0 self-stretch sm:self-start md:self-end text-center"
        >
          <span>Ver planos e preços</span>
          <GreenButtonPixel className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />
        </a>
      </div>

      {/* Services List with Stacked Cards */}
      <div className="flex flex-col gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group rounded-[22px] sm:rounded-[32px] bg-[#0c0c0c] border border-white/10 hover:border-white/30 transition-all duration-300 p-5 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-stretch justify-between gap-6 sm:gap-8"
          >
            {/* Left Indicator & Number */}
            <div className="flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4 shrink-0 lg:w-32 border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-3 lg:pb-0 lg:pr-6">
              <span className="text-xl sm:text-2xl font-mono text-[#c7ff97] font-light">
                {service.number}
              </span>
              <DotGrid cols={6} rows={4} className="opacity-25 hidden sm:grid" />
            </div>

            {/* Middle Narrative & Tags */}
            <div className="flex-1 flex flex-col justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 font-light text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 sm:px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[9px] sm:text-[10px] font-mono tracking-wider text-white/60 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Image Preview */}
            <div className="w-full lg:w-80 h-44 sm:h-60 rounded-[16px] sm:rounded-[22px] overflow-hidden bg-neutral-900 shrink-0 border border-white/10 relative">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
