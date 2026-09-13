import React from 'react';
import { motion } from 'motion/react';
import { BarcodePattern } from './Icons';

export function ProcessSummary() {
  const stages = ['BRIEFING', 'DESIGN', 'CONSTRUÇÃO', 'TESTES', 'LANÇAMENTO'];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Top Header & Copy */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl xs:text-3xl sm:text-5xl font-light tracking-tight text-white mb-4 sm:mb-6"
        >
          Briefing claro / Design moderno / Lançamento pontual.
        </motion.h2>

        {/* Vertical subtle hairline divider */}
        <div className="w-px h-6 sm:h-8 bg-white/20 mx-auto my-4 sm:my-6" />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/60 font-light text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Do alinhamento inicial da identidade visual à publicação do seu domínio (.ao, .com ou .co.ao) e configuração do botão de WhatsApp directo. Mantemos a sua empresa informada em cada etapa e entregamos um website pronto para faturar.
        </motion.p>
      </div>

      {/* Cinematic Wide Image Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[22px] sm:rounded-[36px] overflow-hidden border border-white/10 min-h-[340px] xs:min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] flex flex-col justify-between"
      >
        {/* Background photo */}
        <img
          src="https://framerusercontent.com/images/AN2uZatKMAb9WGrDAOD3JwZA2E.jpg"
          alt="Desenvolvimento de website profissional na origem"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-75 contrast-110"
          loading="lazy"
        />

        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

        {/* Top bar with barcode and tag */}
        <div className="relative z-10 p-4 sm:p-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-mono tracking-widest text-white/70 uppercase bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff97]" />
            <span>MÉTODO DE PRODUÇÃO</span>
          </div>
          <BarcodePattern className="h-3 text-white/60 hidden xs:block" />
        </div>

        {/* Center: Bright Lime Green Stages Ribbon */}
        <div className="relative z-10 w-full px-3 sm:px-8 my-auto">
          <div className="w-full bg-[#c7ff97] text-[#050505] rounded-xl sm:rounded-2xl py-3 sm:py-4 px-3.5 sm:px-8 shadow-2xl flex items-center justify-between overflow-x-auto gap-2 sm:gap-3 scrollbar-none">
            {stages.map((stage, idx) => (
              <React.Fragment key={stage}>
                <span className="text-[10px] sm:text-sm font-mono tracking-wider font-semibold whitespace-nowrap">
                  {stage}
                </span>
                {idx < stages.length - 1 && (
                  <span className="text-[#050505]/40 font-mono text-[10px] sm:text-xs select-none">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Area: Manifesto text overlay */}
        <div className="relative z-10 p-4 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#c7ff97] uppercase">
            // COMPROMISSO ORIGEM
          </div>
          <p className="text-[10px] sm:text-xs font-mono tracking-wide text-white/80 max-w-xl uppercase leading-relaxed text-left sm:text-right">
            CADA WEBSITE É CONSTRUÍDO COM MÁXIMA VELOCIDADE, DESIGN RESPONSIVO E OPTIMIZADO PARA AS CONEXÕES MÓVEIS DE ANGOLA. PRONTO PARA GERAR VENDAS E AUTORIDADE PARA A SUA EMPRESA.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
