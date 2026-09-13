import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OrigemLogo, GreenButtonPixel } from './Icons';

interface HeaderProps {
  onOpenContact?: () => void;
}

export function Header({ onOpenContact }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.06] transition-colors">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo link */}
          <a
            href="#top"
            className="group flex items-center gap-2 transition-opacity hover:opacity-80"
            aria-label="origem Início"
          >
            <OrigemLogo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-[12px] font-mono tracking-wider text-white/70">
            <a
              href="#top"
              className="hover:text-white transition-colors flex items-center gap-1.5 text-white"
            >
              <span className="w-1 h-1 rounded-full bg-[#c7ff97]" />
              INÍCIO
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              SOBRE
            </a>
            <a href="#case-studies" className="hover:text-white transition-colors">
              SITES QUE FIZEMOS
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              SERVIÇOS
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              PLANOS
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenContact}
              className="group hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 hover:border-white/40 bg-white/[0.02] hover:bg-white/[0.06] text-[12px] font-mono tracking-wider text-white transition-all cursor-pointer"
            >
              <span>FALE CONOSCO</span>
              <GreenButtonPixel className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />
            </button>

            {/* Menu toggle button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 hover:border-white/40 bg-white/[0.04] text-[12px] font-mono tracking-wider text-white transition-colors cursor-pointer"
              aria-label="Alternar menu de navegação"
            >
              <span>{menuOpen ? 'FECHAR' : 'MENU'}</span>
              <div className="flex flex-col gap-[3px] w-3 items-end">
                <span className={`w-3 h-[1.5px] bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
                <span className={`w-2 h-[1.5px] bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-3 h-[1.5px] bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 z-30 bg-[#0b0b0b]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl p-5 sm:p-8 lg:p-10 max-h-[calc(100dvh-4rem)] overflow-y-auto"
          >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Navigation column */}
              <div className="md:col-span-6 flex flex-col gap-4">
                <span className="text-[11px] font-mono text-white/40 tracking-widest uppercase">
                  NAVEGAÇÃO
                </span>
                <div className="flex flex-col gap-2.5 text-xl sm:text-2xl font-light">
                  <a
                    href="#top"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#c7ff97] transition-colors flex items-center justify-between border-b border-white/5 pb-2"
                  >
                    <span>Início</span>
                    <span className="text-xs font-mono text-white/30">01</span>
                  </a>
                  <a
                    href="#about"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#c7ff97] transition-colors flex items-center justify-between border-b border-white/5 pb-2"
                  >
                    <span>Sobre o Estúdio</span>
                    <span className="text-xs font-mono text-white/30">02</span>
                  </a>
                  <a
                    href="#case-studies"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#c7ff97] transition-colors flex items-center justify-between border-b border-white/5 pb-2"
                  >
                    <span>Sites que já fizemos</span>
                    <span className="text-xs font-mono text-white/30">03</span>
                  </a>
                  <a
                    href="#services"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#c7ff97] transition-colors flex items-center justify-between border-b border-white/5 pb-2"
                  >
                    <span>Serviços</span>
                    <span className="text-xs font-mono text-white/30">04</span>
                  </a>
                  <a
                    href="#pricing"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#c7ff97] transition-colors flex items-center justify-between border-b border-white/5 pb-2"
                  >
                    <span>Planos de Investimento</span>
                    <span className="text-xs font-mono text-white/30">05</span>
                  </a>
                  <a
                    href="#faq"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#c7ff97] transition-colors flex items-center justify-between border-b border-white/5 pb-2"
                  >
                    <span>Dúvidas Frequentes</span>
                    <span className="text-xs font-mono text-white/30">06</span>
                  </a>
                </div>
              </div>

              {/* Status & Availability */}
              <div className="md:col-span-3 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                <span className="text-[11px] font-mono text-white/40 tracking-widest uppercase">
                  DISPONIBILIDADE
                </span>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c7ff97] animate-pulse" />
                    <span className="text-sm font-mono text-white">2 vagas de projeto abertas</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Atualmente agendando inícios para o 3º trimestre de 2026. Os sprints são preenchidos por ordem de confirmação.
                  </p>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenContact?.();
                    }}
                    className="mt-2 inline-flex items-center justify-between sm:justify-start gap-2 px-4 py-2.5 rounded-full bg-[#c7ff97] text-black text-xs font-mono tracking-wider font-medium hover:bg-[#b5f580] transition-colors cursor-pointer w-full sm:w-auto"
                  >
                    <span>AGENDAR UMA CONVERSA</span>
                    <GreenButtonPixel className="w-3.5 h-3.5 bg-black" />
                  </button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="md:col-span-3 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                <span className="text-[11px] font-mono text-white/40 tracking-widest uppercase">
                  CONTATO DIRETO
                </span>
                <div className="flex flex-col gap-2 font-mono text-xs">
                  <a href="mailto:contacto@origem.ao" className="text-white hover:text-[#c7ff97] transition-colors">
                    contacto@origem.ao
                  </a>
                  <a href="tel:+244931475544" className="text-white/60 hover:text-white transition-colors">
                    +244 931 475 544
                  </a>
                  <a
                    href="https://wa.me/244931475544"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c7ff97] hover:underline flex items-center gap-1 mt-1"
                  >
                    <span>Falar no WhatsApp</span>
                    <span>→</span>
                  </a>
                  <div className="pt-3 text-white/30 text-[10px]">
                    SEDE · LUANDA, ANGOLA
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
