import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GreenButtonPixel, BarcodePattern, DotGrid, TbdLogo } from './Icons';

interface HeroProps {
  onOpenContact?: () => void;
  onOpenDemo?: () => void;
}

export function Hero({ onOpenContact, onOpenDemo }: HeroProps) {
  const [timeString, setTimeString] = useState('');

  // Live updating clock in the status rail
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const month = now.toLocaleString('pt-BR', { month: 'short' }).replace('.', '').toUpperCase();
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTimeString(`${day} DE ${month}, ${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 pt-3 pb-8">
      {/* Outer Hero Container with rounded card border */}
      <div className="relative rounded-[22px] sm:rounded-[32px] bg-[#0c0c0c] border border-white/10 overflow-hidden flex min-h-0 sm:min-h-[580px] lg:min-h-[640px]">
        {/* Subtle background texture image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="https://framerusercontent.com/images/yGLWVBntVR1i0aLjuoVDs3ECRb4.jpg"
            alt="Textura de fundo do Hero"
            className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity filter contrast-125"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
        </div>

        {/* Left Status Rail */}
        <div className="hidden md:flex flex-col justify-between items-center py-6 px-3 border-r border-white/10 w-14 shrink-0 z-10 select-none bg-[#090909]/40 backdrop-blur-sm">
          {/* Top Barcode */}
          <div className="rotate-90 origin-center my-4">
            <BarcodePattern className="h-2.5 text-white/50" />
          </div>

          {/* Status Label (vertical text) */}
          <div className="writing-vertical text-[10px] font-mono tracking-widest text-white/40 uppercase rotate-180 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff97] animate-pulse" />
            <span>STATUS: ONLINE</span>
          </div>

          {/* Bottom Live Timestamp */}
          <div className="writing-vertical text-[10px] font-mono tracking-wider text-white/50 rotate-180">
            {timeString || '13 DE SET, 04:09'}
          </div>
        </div>

        {/* Main Hero Content Area */}
        <div className="relative z-10 flex-1 flex flex-col justify-between p-5 sm:p-10 lg:p-14">
          {/* Top Row: Meta tag & Dots */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-white/50 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff97] shrink-0" />
              <span>PROJECTOS DISPONÍVEIS · LUANDA, ANGOLA</span>
            </div>

            {/* Pagination / Status Dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-[#c7ff97]" />
            </div>
          </div>

          {/* Center: Hero Heading & Subheading */}
          <div className="my-auto py-6 sm:py-8 lg:py-12 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[26px] xs:text-3xl sm:text-5xl lg:text-[58px] font-light tracking-[-0.03em] leading-[1.12] text-white"
            >
              Websites modernos e{' '}
              <span className="inline-flex items-center px-2.5 sm:px-3 py-0.5 rounded-full bg-[#c7ff97] text-[#050505] font-medium text-[0.85em] align-middle shadow-[0_0_20px_rgba(199,255,151,0.2)]">
                sistemas web
              </span>{' '}
              que convertem visitantes em clientes reais para sua empresa.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/60 font-light max-w-xl leading-relaxed"
            >
              Desenvolvemos websites de alta performance, identidades visuais marcantes e infraestrutura de e-mail corporativo em Angola. Planos a partir de 150.000 Kz com integração total com WhatsApp.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <a
                href="#pricing"
                className="group flex items-center justify-between sm:justify-center gap-3 px-5 py-3 rounded-full bg-white text-[#050505] font-mono text-[12px] sm:text-[13px] tracking-wider font-semibold hover:bg-[#c7ff97] transition-all cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(199,255,151,0.3)] w-full sm:w-auto"
              >
                <span>VER PLANOS & PREÇOS</span>
                <GreenButtonPixel className="w-4 h-4 bg-[#050505] text-white" />
              </a>

              <a
                href="https://wa.me/244931475544"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between sm:justify-center gap-2.5 px-5 py-3 rounded-full border border-white/15 hover:border-white/35 bg-white/[0.03] hover:bg-white/[0.08] text-white font-mono text-[11px] sm:text-[12px] tracking-wider transition-all cursor-pointer w-full sm:w-auto"
              >
                <span>WHATSAPP: +244 931 475 544</span>
                <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#c7ff97] transition-colors shrink-0">
                  <span className="w-1 h-1 rounded-full bg-[#c7ff97]" />
                </div>
              </a>
            </motion.div>
          </div>

          {/* Bottom Area: Dot grid & Stacy Palmer card */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4 border-t border-white/[0.07]">
            {/* Dot grid decoration */}
            <div className="hidden sm:block">
              <DotGrid cols={10} rows={5} className="opacity-20" />
            </div>

            {/* Origin quote & info pill card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-stretch bg-[#141414]/90 border border-white/10 rounded-[18px] overflow-hidden max-w-md shadow-2xl backdrop-blur-md w-full sm:w-auto"
            >
              <div className="p-3.5 sm:p-5 flex flex-col justify-between gap-2 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] font-semibold text-white">origem</span>
                    <span className="text-[9px] font-mono text-white/40 tracking-wider">// LUANDA</span>
                  </div>
                  <span className="text-[9px] font-mono text-[#c7ff97] uppercase">ESTÚDIO DIGITAL</span>
                </div>

                <p className="text-[10px] sm:text-[11px] font-mono text-white/70 leading-relaxed uppercase tracking-wide">
                  CRIAMOS WEBSITES RÁPIDOS, ELEGANTES E RESPONSIVOS QUE CONVERTEM VISITANTES EM VENDAS REAIS.
                </p>

                <div className="text-[9px] sm:text-[10px] font-mono tracking-wider text-white/40">
                  ATENDIMENTO DIRECTO · +244 931 475 544
                </div>
              </div>

              {/* Portrait image */}
              <div className="w-20 sm:w-28 shrink-0 bg-neutral-800 relative">
                <img
                  src="https://framerusercontent.com/images/mQ7AB7mg0sRTeYWwQzk9umBlt64.jpg"
                  alt="Equipa origem em Luanda"
                  className="w-full h-full object-cover filter grayscale contrast-110"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
