import React from 'react';
import { motion } from 'motion/react';
import { BarcodePattern, DotGrid } from './Icons';

export function FeaturedCase() {
  const tags = ['ZENDESK', 'SLACK', 'NOTION', 'OPENAI', 'POSTGRES'];
  const impactBars = 12;
  const activeBars = 8; // ~62%

  return (
    <section className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="rounded-[22px] sm:rounded-[36px] bg-[#0c0c0c] border border-white/10 overflow-hidden">
        {/* Top Meta Bar */}
        <div className="p-4 sm:p-6 lg:p-8 border-b border-white/[0.08] flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-wider text-white/70 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff97] shrink-0" />
            <span>ESTUDO DE CASO · GRUPO COMERCIAL EM LUANDA · NO AR 2025</span>
          </div>

          <BarcodePattern className="h-2.5 sm:h-3 text-white/40" />
        </div>

        {/* Main Grid: Left Sports Car, Right Analytical Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left: Classic Sports Car Overhead Image */}
          <div className="lg:col-span-5 relative bg-black min-h-[300px] sm:min-h-[380px] lg:min-h-[580px] border-b lg:border-b-0 lg:border-r border-white/[0.08] overflow-hidden flex items-center justify-center p-4 sm:p-6">
            <img
              src="https://framerusercontent.com/images/iEtVSXXq0JAX0QHZn8Lm69lJs.jpg"
              alt="Design de alto nível para websites em Angola"
              className="w-full h-full object-cover object-center filter contrast-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Subtle dot grid watermark */}
            <div className="absolute top-6 left-6 pointer-events-none hidden sm:block">
              <DotGrid cols={6} rows={6} className="opacity-20" />
            </div>
          </div>

          {/* Right: Challenge, Impact, What it runs on, Review */}
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-12 flex flex-col justify-between gap-6 sm:gap-8 bg-[#090909]">
            {/* Challenge Section */}
            <div className="flex flex-col gap-3">
              <div className="self-start px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.06] text-white/80 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase">
                DESAFIO
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed">
                Empresa tradicional de distribuição em Luanda sem presença online própria.{' '}
                <span className="text-white/60">
                  Os clientes perdiam horas solicitando cotações manuais por telefone e a empresa não conseguia fechar vendas com clientes de outras províncias.
                </span>
              </p>
            </div>

            {/* Impact Section */}
            <div className="flex flex-col gap-3 pt-6 border-t border-white/[0.08]">
              <div className="self-start px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.06] text-white/80 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase">
                IMPACTO MEDIDO
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                {/* Visual Level Bars */}
                <div className="flex items-end gap-1 h-10 sm:h-12 shrink-0">
                  {Array.from({ length: impactBars }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full transition-all ${
                        i < activeBars ? 'bg-[#c7ff97] h-full' : 'bg-white/10 h-1/2'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex flex-col">
                  <div className="text-2xl sm:text-4xl font-light text-white tracking-tight flex items-baseline gap-1">
                    <span>+180%</span>
                  </div>
                  <span className="text-xs sm:text-sm text-white/60 font-light">
                    Aumento em pedidos directos via WhatsApp e contactos qualificados nos primeiros 60 dias.
                  </span>
                </div>
              </div>
            </div>

            {/* What it runs on */}
            <div className="flex flex-col gap-3 pt-6 border-t border-white/[0.08]">
              <div className="self-start px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.06] text-white/80 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase">
                TECNOLOGIA &amp; ESTRUTURA
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                Website ultra-leve optimizado para conexões móveis angolanas, com e-mail corporativo integrado.
              </p>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
                {['REACT', 'WHATSAPP API', 'DOMÍNIO .AO', 'E-MAIL CORPORATIVO', 'SEO LOCAL'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 sm:px-3 py-1 rounded-full border border-white/15 bg-white/[0.03] text-[9px] sm:text-[10px] font-mono tracking-widest text-white/80 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Review */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono flex-wrap gap-2">
                <div className="flex items-center gap-1 text-[#c7ff97]">
                  <span>★★★★★</span>
                  <span className="text-white ml-1 font-semibold">5.0</span>
                  <span className="text-white/40">/5</span>
                </div>
                <span className="text-white/40 uppercase tracking-wider text-[10px]">
                  AVALIAÇÃO VERIFICADA · LUANDA
                </span>
              </div>

              <blockquote className="text-base sm:text-xl font-light text-white tracking-tight leading-snug italic">
                “Antes perdíamos vendas por não ter um site profissional. Hoje o cliente em Benguela ou Huambo vê o catálogo e já manda mensagem no WhatsApp com o pedido pronto.”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
