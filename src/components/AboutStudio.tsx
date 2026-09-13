import React from 'react';
import { motion } from 'motion/react';
import { GreenButtonPixel, BarcodePattern } from './Icons';

interface AboutStudioProps {
  onOpenContact?: () => void;
}

export function AboutStudio({ onOpenContact }: AboutStudioProps) {
  return (
    <section id="about" className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="rounded-[22px] sm:rounded-[32px] bg-[#0c0c0c] border border-white/10 p-6 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-white/50 uppercase mb-4">
                <GreenButtonPixel className="w-2.5 h-2.5" />
                <span>ESTÚDIO EM ANGOLA</span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.12]"
              >
                Um estúdio{' '}
                <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-[#c7ff97] text-[#050505] font-normal align-middle">
                  focado em
                </span>{' '}
                websites que geram vendas.
              </motion.h2>
            </div>

            <div className="hidden lg:flex items-center gap-4 mt-16 pt-8 border-t border-white/[0.08]">
              <BarcodePattern className="h-3 text-white/40" />
              <span className="text-[10px] font-mono text-white/40 tracking-wider">
                LUANDA, ANGOLA · DESDE 2023
              </span>
            </div>
          </div>

          {/* Right Column: Stats & Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-8 sm:gap-10">
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-b border-white/[0.08]">
              <div className="flex flex-col">
                <div className="text-3xl sm:text-5xl font-light text-white tracking-tight flex items-baseline gap-1">
                  <span>100</span>
                  <span className="text-2xl text-[#c7ff97]">+</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-white/50 uppercase mt-2">
                  WEBSITES LANÇADOS COM SUCESSO.
                </span>
              </div>

              <div className="flex flex-col sm:border-l border-white/[0.08] sm:pl-6 pt-4 sm:pt-0 border-t sm:border-t-0">
                <div className="text-3xl sm:text-5xl font-light text-white tracking-tight flex items-baseline gap-1">
                  <span>5</span>
                  <span className="text-2xl text-white/60 font-mono">d</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-white/50 uppercase mt-2">
                  PRAZO MÉDIO DE ENTREGA.
                </span>
              </div>
            </div>

            {/* Narrative text */}
            <p className="text-sm sm:text-base lg:text-lg text-white/70 font-light leading-relaxed">
              A origem é uma empresa angolana focada em transformar a presença digital de negócios em Luanda e em todas as províncias. Desenvolvemos websites modernos, rápidos e adaptados aos hábitos do mercado local, garantindo que a sua marca transmita autoridade e feche negócios todos os dias.
            </p>

            {/* Action button */}
            <div className="pt-2">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full border border-white/20 hover:border-white/50 bg-white/[0.03] hover:bg-white/[0.08] text-white font-mono text-[12px] tracking-wider transition-all cursor-pointer w-full sm:w-auto"
              >
                <span>CONHECER OS PLANOS</span>
                <GreenButtonPixel className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
