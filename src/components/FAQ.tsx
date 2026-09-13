import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/siteData';
import { GreenButtonPixel, DotGrid } from './Icons';

interface FAQProps {
  onOpenContact?: () => void;
}

export function FAQ({ onOpenContact }: FAQProps) {
  // Index 0 open by default, exactly matching Framer default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-white/50 uppercase mb-3">
            <GreenButtonPixel className="w-2.5 h-2.5" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl xs:text-3xl sm:text-5xl font-light tracking-tight text-white"
          >
            Dúvidas Frequentes.
          </motion.h2>
        </div>

        <p className="text-white/60 font-light text-sm sm:text-base lg:text-lg max-w-md">
          As perguntas que a maioria dos clientes faz antes de assinar o contrato. Se a sua não estiver aqui, pergunte-nos diretamente.
        </p>
      </div>

      {/* Main Grid: Left Accordions, Right "Skip the FAQ" card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
        {/* Left Accordion Column */}
        <div className="lg:col-span-8 flex flex-col gap-2">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="flex items-stretch gap-1.5 transition-all"
              >
                {/* Question & Answer Card */}
                <div
                  onClick={() => toggleItem(idx)}
                  className={`flex-1 rounded-[14px] sm:rounded-[16px] bg-[#0c0c0c] border transition-all duration-300 p-4 sm:p-6 cursor-pointer select-none ${
                    isOpen
                      ? 'border-white/30 bg-[#121212]'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <h3 className="text-sm sm:text-lg font-light text-white tracking-tight flex items-center justify-between">
                    <span>{item.question}</span>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 sm:pt-4 text-xs sm:text-base text-white/65 font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right Toggle Icon Box */}
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-label={isOpen ? 'Recolher resposta' : 'Expandir resposta'}
                  className={`w-11 sm:w-16 rounded-[14px] sm:rounded-[16px] bg-[#0c0c0c] border flex items-center justify-center cursor-pointer transition-all duration-300 shrink-0 ${
                    isOpen
                      ? 'border-white/30 bg-[#121212] text-[#c7ff97]'
                      : 'border-white/10 hover:border-white/20 text-white/60'
                  }`}
                >
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs sm:text-sm font-mono inline-block"
                  >
                    ▼
                  </motion.span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Right Sticky / Aside: Skip the FAQ Card */}
        <div className="lg:col-span-4 rounded-[22px] sm:rounded-[28px] bg-[#0c0c0c] border border-white/10 p-5 sm:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] relative overflow-hidden">
          <div className="absolute top-6 right-6 pointer-events-none hidden sm:block">
            <DotGrid cols={6} rows={6} className="opacity-20" />
          </div>

          <div className="relative z-10 flex flex-col gap-3 sm:gap-4">
            <div className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#c7ff97] uppercase">
              ATENDIMENTO IMEDIATO
            </div>
            <h3 className="text-xl sm:text-3xl font-light tracking-tight text-white">
              Pular o FAQ.
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              Fale directamente com a equipa da origem no WhatsApp. Esclarecemos todas as suas dúvidas sobre prazos, domínio e orçamento em poucos minutos.
            </p>
          </div>

          <div className="relative z-10 pt-5 sm:pt-6 flex flex-col gap-2">
            <a
              href="https://wa.me/244931475544"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group flex items-center justify-between px-5 py-3 rounded-full bg-[#c7ff97] text-[#050505] text-xs font-mono tracking-wider font-semibold hover:bg-[#b5f580] transition-colors cursor-pointer"
            >
              <span>FALAR NO WHATSAPP</span>
              <GreenButtonPixel className="w-3.5 h-3.5 bg-black" />
            </a>
            <div className="text-center text-[10px] font-mono text-white/40 pt-1">
              +244 931 475 544 · LUANDA, ANGOLA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
