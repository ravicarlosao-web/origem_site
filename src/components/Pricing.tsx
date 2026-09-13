import React from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS, ADDON_SERVICES } from '../data/siteData';
import { GreenButtonPixel, BarcodePattern } from './Icons';

interface PricingProps {
  onOpenContact?: () => void;
}

export function Pricing({ onOpenContact }: PricingProps) {
  return (
    <section id="pricing" className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
        <div>
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-white/50 uppercase mb-3">
            <GreenButtonPixel className="w-2.5 h-2.5" />
            <span>TABELA OFICIAL DE PREÇOS</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl xs:text-3xl sm:text-5xl font-light tracking-tight text-white"
          >
            Planos de Website e Serviços.
          </motion.h2>
        </div>

        <p className="text-white/60 font-light text-sm sm:text-base lg:text-lg max-w-md">
          Preços fixos em Kwanzas (Kz), sem surpresas e com prazos rigorosos de entrega. Tudo pronto para vender.
        </p>
      </div>

      {/* 3 Main Website Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {PRICING_PLANS.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-[22px] sm:rounded-[32px] overflow-hidden p-5 sm:p-8 flex flex-col justify-between min-h-[500px] sm:min-h-[540px] transition-all duration-300 ${
              plan.popular
                ? 'bg-[#101010] border-2 border-[#c7ff97] shadow-[0_0_40px_rgba(199,255,151,0.15)]'
                : 'bg-[#0c0c0c] border border-white/10 hover:border-white/30'
            }`}
          >
            {/* Background image effect if available */}
            {plan.bgImage && (
              <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen">
                <img
                  src={plan.bgImage}
                  alt={plan.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0c0c0c]/80" />
              </div>
            )}

            {/* Top row: Number, Code, Timeline, Popular badge */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-4 sm:pb-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs font-mono text-[#c7ff97]">{plan.number}</span>
                {plan.code && (
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-white/50 uppercase tracking-widest">
                    {plan.code}
                  </span>
                )}
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-white/50 uppercase">
                  {plan.timeline}
                </span>
              </div>

              {plan.popular && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#c7ff97] text-[#050505] text-[9px] sm:text-[10px] font-mono font-semibold uppercase tracking-wider">
                  MAIS ESCOLHIDO
                </span>
              )}
            </div>

            {/* Middle: Title, Subtitle, Price in Kwanza */}
            <div className="relative z-10 my-5 sm:my-6 flex flex-col gap-3 sm:gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white capitalize">
                  {plan.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-light mt-1.5">
                  {plan.subtitle}
                </p>
              </div>

              <div className="flex items-baseline gap-1.5 pt-1 sm:pt-2">
                <span className="text-3xl sm:text-4xl font-light tracking-tight text-white font-mono">
                  {plan.price}
                </span>
                <span className="text-lg font-mono text-[#c7ff97] font-medium">
                  Kz
                </span>
              </div>
            </div>

            {/* Features list */}
            <div className="relative z-10 border-t border-white/[0.08] pt-5 sm:pt-6 flex-1 flex flex-col justify-between">
              <ul className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-white/70 font-light">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff97] shrink-0 mt-1.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="pt-6 sm:pt-8 flex flex-col gap-2.5">
                <button
                  onClick={onOpenContact}
                  className={`w-full group flex items-center justify-between px-5 py-3 rounded-full text-xs font-mono tracking-wider font-semibold transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-[#c7ff97] text-[#050505] hover:bg-[#b5f580]'
                      : 'border border-white/20 hover:border-white/50 bg-white/[0.03] text-white hover:bg-white/[0.08]'
                  }`}
                >
                  <span className="uppercase">{plan.buttonText}</span>
                  <GreenButtonPixel
                    className={`w-3.5 h-3.5 ${
                      plan.popular ? 'bg-black text-[#c7ff97]' : 'bg-[#c7ff97] text-black'
                    }`}
                  />
                </button>

                <a
                  href={`https://wa.me/244931475544?text=${encodeURIComponent(`Olá origem! Gostaria de saber mais sobre o ${plan.title} (${plan.price} Kz).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-[11px] font-mono text-white/50 hover:text-[#c7ff97] transition-colors py-1"
                >
                  Pedir no WhatsApp (+244 931 475 544) →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add-ons & Complementary Services (from second screenshot) */}
      <div className="mt-12 sm:mt-14 rounded-[22px] sm:rounded-[32px] bg-[#0c0c0c] border border-white/10 p-5 sm:p-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 border-b border-white/10 pb-5 sm:pb-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-[#c7ff97] uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff97]" />
              <span>SERVIÇOS COMPLEMENTARES &amp; IDENTIDADE</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-light text-white tracking-tight">
              Serviços Avulsos para o Seu Negócio
            </h3>
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-white/40">
            COMPATÍVEL COM QUALQUER PLANO
          </span>
        </div>

        {/* Addons List matching user's CRM/invoice table style */}
        <div className="flex flex-col divide-y divide-white/5">
          {ADDON_SERVICES.map((addon) => (
            <div
              key={addon.code}
              className="py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 group hover:bg-white/[0.02] px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-xl transition-colors"
            >
              <div className="flex items-start md:items-center gap-3 sm:gap-4">
                <span className="w-2 h-2 rounded-full bg-[#c7ff97] shrink-0 mt-1.5 md:mt-0" />
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <h4 className="text-sm sm:text-lg font-medium text-white">
                      {addon.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-mono text-white/40">
                      {addon.code}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] sm:text-[10px] font-mono">
                      <span>✓</span>
                      <span>{addon.status || 'Activo'}</span>
                    </span>
                  </div>
                  {addon.description && (
                    <p className="text-xs text-white/60 font-light mt-1 max-w-xl">
                      {addon.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 pt-2 md:pt-0">
                <div className="text-base sm:text-xl font-mono text-white font-medium">
                  {addon.price}
                </div>
                <a
                  href={`https://wa.me/244931475544?text=${encodeURIComponent(`Olá origem! Gostaria de contratar o serviço: ${addon.name} (${addon.price}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 sm:px-4 py-1.5 rounded-full border border-white/15 hover:border-[#c7ff97] text-white hover:text-[#c7ff97] text-xs font-mono tracking-wider transition-colors shrink-0"
                >
                  Solicitar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Guarantee Strip */}
      <div className="mt-6 sm:mt-8 rounded-2xl bg-[#0c0c0c] border border-white/10 p-4 sm:p-5 flex items-center justify-between flex-wrap gap-3 sm:gap-4">
        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-wider text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff97] shrink-0" />
          <span>GARANTIA ORIGEM: 100% RESPONSIVO · SEM MENSALIDADE OBRIGATÓRIA · ENTREGA COM SUPORTE EM LUANDA</span>
        </div>
        <BarcodePattern className="h-2.5 text-white/30 hidden sm:block" />
      </div>
    </section>
  );
}
