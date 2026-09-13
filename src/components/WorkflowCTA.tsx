import React from 'react';
import { motion } from 'motion/react';
import { GreenButtonPixel, DotGrid, BarcodePattern } from './Icons';

interface WorkflowCTAProps {
  onOpenContact?: () => void;
}

export function WorkflowCTA({ onOpenContact }: WorkflowCTAProps) {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="rounded-[22px] sm:rounded-[36px] bg-[#0c0c0c] border border-white/10 p-5 sm:p-12 lg:p-16 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#c7ff97]/5 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          {/* Left Column: Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-white/50 uppercase">
              <GreenButtonPixel className="w-2.5 h-2.5" />
              <span>CONSULTORIA DIGITAL EM ANGOLA</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15]"
            >
              Leve a sua empresa para o{' '}
              <span className="inline-flex items-center px-2.5 sm:px-3.5 py-0.5 rounded-full bg-[#c7ff97] text-[#050505] font-normal align-middle text-xl xs:text-2xl sm:text-4xl lg:text-5xl">
                topo do mercado
              </span>
              .
            </motion.h2>

            <p className="text-sm sm:text-base lg:text-lg text-white/60 font-light max-w-xl leading-relaxed">
              Não perca mais clientes para concorrentes com presença na internet. Desenvolvemos o seu website profissional com botão de WhatsApp e e-mail corporativo em tempo recorde.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href="https://wa.me/244931475544"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#c7ff97] text-[#050505] font-mono text-[12px] sm:text-[13px] tracking-wider font-semibold hover:bg-[#b5f580] transition-all cursor-pointer shadow-lg w-full sm:w-auto text-center"
              >
                <span>FALAR NO WHATSAPP</span>
                <GreenButtonPixel className="w-4 h-4 bg-[#050505] text-[#c7ff97]" />
              </a>

              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff97]" />
                <span>+244 931 475 544 · ATENDIMENTO RÁPIDO</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Visual Pair Card */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-md bg-[#121212] border border-white/10 rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 flex flex-col gap-5 sm:gap-6 relative">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 sm:pb-4">
                <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-white/40 uppercase">
                  PARCERIA DIRECTA
                </span>
                <BarcodePattern className="h-2.5 text-white/30 hidden xs:block" />
              </div>

              {/* Two Avatar Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 items-center relative">
                {/* Specialist */}
                <div className="flex flex-col items-center text-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <img
                    src="https://framerusercontent.com/images/mQ7AB7mg0sRTeYWwQzk9umBlt64.jpg"
                    alt="Especialista da origem"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover filter grayscale border border-white/20"
                  />
                  <div>
                    <div className="text-[11px] sm:text-xs font-light text-white">Equipa Técnica</div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-[#c7ff97] uppercase tracking-wider mt-0.5">
                      ESPECIALISTA ORIGEM
                    </div>
                  </div>
                </div>

                {/* Center Connector Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#c7ff97] text-[#050505] font-mono text-xs flex items-center justify-center shadow-lg">
                  ⇄
                </div>

                {/* Your Team */}
                <div className="flex flex-col items-center text-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 text-lg sm:text-xl font-light">
                    VOCÊ
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-light text-white">Sua Empresa</div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-white/40 uppercase tracking-wider mt-0.5">
                      CLIENTE EM ANGOLA
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[9px] sm:text-[10px] font-mono text-white/40 text-center tracking-wide uppercase pt-1 sm:pt-2">
                COMUNICAÇÃO DIRECTA VIA WHATSAPP E CHAMADA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
