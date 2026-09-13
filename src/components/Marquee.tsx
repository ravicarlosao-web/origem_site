import React from 'react';
import { CLIENT_LOGOS } from '../data/siteData';
import { GreenButtonPixel } from './Icons';

export function Marquee() {
  // 14 bars total, ~10 active = ~71-76%
  const totalBars = 14;
  const activeBars = 11;

  return (
    <section className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="rounded-[22px] sm:rounded-[28px] bg-[#0c0c0c] border border-white/10 p-5 sm:p-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 sm:gap-8">
        {/* Left column: Subtitle & Heading */}
        <div className="flex flex-col gap-2 max-w-sm shrink-0">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-white/50 uppercase">
            <GreenButtonPixel className="w-2.5 h-2.5" />
            <span>EM NÚMEROS</span>
          </div>
          <h2 className="text-lg sm:text-2xl font-light tracking-tight text-white leading-snug">
            Empresas que confiaram a sua presença digital à origem.
          </h2>
        </div>

        {/* Middle column: 98% Segmented Bar Visualizer */}
        <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-5 border-y lg:border-y-0 lg:border-x border-white/10 py-4 lg:py-0 lg:px-8 shrink-0">
          {/* Segmented level meter */}
          <div className="flex items-end gap-[3px] h-9 shrink-0">
            {Array.from({ length: totalBars }).map((_, i) => {
              const isActive = i < activeBars;
              // Gradual height ramp
              const heightPct = 40 + (i / totalBars) * 60;
              return (
                <div
                  key={i}
                  className={`w-[3px] sm:w-[4px] rounded-full transition-colors ${
                    isActive ? 'bg-[#c7ff97]' : 'bg-white/10'
                  }`}
                  style={{ height: `${heightPct}%` }}
                />
              );
            })}
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-light tracking-tight text-white flex items-baseline gap-0.5">
              <span>98</span>
              <span className="text-lg sm:text-xl text-[#c7ff97]">%</span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-white/50 uppercase">
              SATISFAÇÃO &amp; CONVERSÃO DE CLIENTES
            </span>
          </div>
        </div>

        {/* Right column: Infinite Logo Carousel with gradient fade */}
        <div className="relative flex-1 overflow-hidden min-w-0">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-r from-[#0c0c0c] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-l from-[#0c0c0c] to-transparent z-10" />

          <div className="animate-marquee flex items-center gap-8 sm:gap-12 select-none py-1">
            {/* Repeat list twice for seamless infinite loop */}
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale shrink-0"
                title={client.name}
              >
                <img
                  src={client.svg}
                  alt={client.name}
                  className="h-5 sm:h-7 w-auto object-contain max-w-[110px] sm:max-w-[130px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
