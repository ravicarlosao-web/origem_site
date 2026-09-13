import React from 'react';
import { OrigemLogo, GreenButtonPixel, BarcodePattern } from './Icons';

export function Footer() {
  return (
    <footer className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 sm:pb-14">
      <div className="relative rounded-[22px] sm:rounded-[36px] bg-[#0c0c0c] border border-white/10 overflow-hidden p-5 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[440px] sm:min-h-[500px]">
        {/* Subtle background ambient graphic */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="https://framerusercontent.com/images/yGLWVBntVR1i0aLjuoVDs3ECRb4.jpg"
            alt="Textura de fundo do rodapé"
            className="w-full h-full object-cover filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/90 to-transparent" />
        </div>

        {/* Top Row: Logo & Status */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-6 sm:pb-8 flex-wrap gap-4">
          <OrigemLogo />

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-wider text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff97]" />
              <span>SEDE · LUANDA, ANGOLA</span>
            </div>
            <BarcodePattern className="h-2.5 text-white/40 hidden sm:block" />
          </div>
        </div>

        {/* Middle: Huge Email Callout & Phone */}
        <div className="relative z-10 my-8 sm:my-12 flex flex-col gap-3 sm:gap-4">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#c7ff97] uppercase">
            FALE COM A ORIGEM
          </span>

          <a
            href="mailto:contacto@origem.ao"
            className="text-2xl xs:text-3xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white hover:text-[#c7ff97] transition-colors leading-tight break-all xs:break-normal"
          >
            contacto@origem.ao
          </a>

          <div className="flex items-center flex-wrap gap-3 sm:gap-6 pt-2 font-mono text-[11px] sm:text-sm text-white/70">
            <a
              href="tel:+244931475544"
              className="text-white hover:text-[#c7ff97] transition-colors font-medium"
            >
              +244 931 475 544
            </a>
            <span className="text-white/20">/</span>
            <a
              href="https://wa.me/244931475544"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c7ff97] hover:underline font-semibold"
            >
              WhatsApp Directo
            </a>
            <span className="text-white/20 hidden sm:inline">/</span>
            <span className="text-white/50 hidden xs:inline">SEG–SEX 08:00–17:00 WAT</span>
          </div>
        </div>

        {/* Navigation & Social Row */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 border-t border-white/[0.08] pt-6 sm:pt-8">
          {/* Nav Links */}
          <div className="md:col-span-8 flex flex-wrap items-center gap-x-5 sm:gap-x-8 gap-y-2.5 sm:gap-y-3 text-[11px] sm:text-xs font-mono tracking-wider text-white/70">
            <a href="#top" className="hover:text-white transition-colors">
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
            <a href="#contact" className="hover:text-[#c7ff97] transition-colors">
              CONTATO
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-5 sm:gap-6 text-[11px] sm:text-xs font-mono text-white/50">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <a
                href="https://wa.me/244931475544"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                WHATSAPP
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                INSTAGRAM
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LINKEDIN
              </a>
            </div>

            <a
              href="#top"
              aria-label="Voltar ao topo"
              className="w-8 h-8 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white transition-colors shrink-0"
            >
              ↑
            </a>
          </div>
        </div>

        {/* Copyright & Credit line */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 text-[10px] sm:text-[11px] font-mono text-white/40 text-center sm:text-left">
          <div>© 2026 ORIGEM COMERCIO &amp; PRESTAÇÃO DE SERVIÇO. TODOS OS DIREITOS RESERVADOS.</div>
          <div className="flex items-center gap-2">
            <span>LUANDA · ANGOLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
