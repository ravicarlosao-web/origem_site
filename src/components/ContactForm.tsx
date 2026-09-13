import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GreenButtonPixel, BarcodePattern, DotGrid } from './Icons';

export function ContactForm() {
  const [timeString, setTimeString] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website plano core (250 000,00 Kz)',
    budget: '150 000,00 Kz a 250 000,00 Kz',
    message: '',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const month = now.toLocaleString('pt-PT', { month: 'short' }).replace('.', '').toUpperCase();
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTimeString(`${day} DE ${month}, ${hours}:${minutes} WAT`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="relative rounded-[22px] sm:rounded-[36px] bg-[#0c0c0c] border border-white/10 overflow-hidden flex min-h-[540px] sm:min-h-[580px]">
        {/* Left Status Rail */}
        <div className="hidden md:flex flex-col justify-between items-center py-8 px-3 border-r border-white/10 w-14 shrink-0 select-none bg-[#090909]/60 backdrop-blur-sm">
          <div className="rotate-90 origin-center my-4">
            <BarcodePattern className="h-2.5 text-white/50" />
          </div>

          <div className="writing-vertical text-[10px] font-mono tracking-widest text-white/40 uppercase rotate-180 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff97] animate-pulse" />
            <span>ATENDIMENTO: LUANDA</span>
          </div>

          <div className="writing-vertical text-[10px] font-mono tracking-wider text-white/50 rotate-180">
            {timeString || 'LUANDA, ANGOLA'}
          </div>
        </div>

        {/* Main Form Content Area */}
        <div className="flex-1 p-5 sm:p-10 lg:p-14 relative">
          <div className="absolute top-8 right-8 pointer-events-none hidden sm:block">
            <DotGrid cols={6} rows={6} className="opacity-20" />
          </div>

          {/* Header */}
          <div className="max-w-xl mb-8 sm:mb-10">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-white/50 uppercase mb-3">
              <GreenButtonPixel className="w-2.5 h-2.5" />
              <span>FALE COM A EQUIPA</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-light tracking-tight text-white">
              Peça uma Proposta.
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">
              Diga-nos o que a sua empresa precisa e responderemos com rapidez. Se preferir um contacto imediato, chame-nos no WhatsApp.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 sm:p-12 rounded-2xl bg-[#141414] border border-[#c7ff97]/40 flex flex-col items-center text-center gap-4 max-w-lg"
            >
              <div className="w-12 h-12 rounded-full bg-[#c7ff97] text-[#050505] flex items-center justify-center text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-white">Solicitação Recebida</h3>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                Obrigado, {formData.name || 'pelo contacto'}! A equipa da origem analisará as necessidades da sua empresa e responderá em até 24 horas úteis.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/244931475544?text=${encodeURIComponent(`Olá origem! Acabei de preencher o formulário no site sobre ${formData.service}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#c7ff97] text-[#050505] font-mono text-xs font-semibold hover:bg-[#b5f580] transition-colors text-center"
                >
                  Abrir WhatsApp (+244 931 475 544) →
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2.5 rounded-full border border-white/20 text-xs font-mono text-white hover:border-white transition-colors"
                >
                  Nova solicitação
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl flex flex-col gap-5 sm:gap-6">
              {/* Row 1: Name, Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] sm:text-[11px] font-mono tracking-wider text-white/60 uppercase">
                    Seu Nome / Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ex.: Manuel dos Santos"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 focus:border-[#c7ff97] focus:outline-none text-white text-sm font-light transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] sm:text-[11px] font-mono tracking-wider text-white/60 uppercase">
                    E-mail de Contacto *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contacto@suaempresa.ao"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 focus:border-[#c7ff97] focus:outline-none text-white text-sm font-light transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Service & Budget Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] sm:text-[11px] font-mono tracking-wider text-white/60 uppercase">
                    Plano ou Serviço Desejado
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 hover:border-white/25 focus:border-[#c7ff97] focus:outline-none text-white text-sm font-light transition-colors cursor-pointer"
                  >
                    <option value="Website plano start (150 000,00 Kz)">Website plano start — 150 000,00 Kz</option>
                    <option value="Website plano core (250 000,00 Kz)">Website plano core — 250 000,00 Kz</option>
                    <option value="Website plano profissional (400 000,00 Kz)">Website plano profissional — 400 000,00 Kz</option>
                    <option value="Criação de logo (25 000,00 Kz)">Criação de logo — 25 000,00 Kz</option>
                    <option value="Identidade Visual (50 000,00 Kz)">Identidade Visual — 50 000,00 Kz</option>
                    <option value="Compra de Dominio (50 000,00 Kz)">Compra de Domínio — 50 000,00 Kz</option>
                    <option value="Criação de e-mail corporativo (100 000,00 Kz)">Criação de e-mail corporativo — 100 000,00 Kz</option>
                    <option value="Pacote Completo Personalizado">Pacote Completo Personalizado</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] sm:text-[11px] font-mono tracking-wider text-white/60 uppercase">
                    Orçamento Estimado (Kz)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 hover:border-white/25 focus:border-[#c7ff97] focus:outline-none text-white text-sm font-light transition-colors cursor-pointer"
                  >
                    <option value="Até 150 000,00 Kz">Até 150 000,00 Kz</option>
                    <option value="150 000,00 Kz a 250 000,00 Kz">150 000,00 Kz a 250 000,00 Kz</option>
                    <option value="250 000,00 Kz a 400 000,00 Kz">250 000,00 Kz a 400 000,00 Kz</option>
                    <option value="Acima de 400 000,00 Kz">Acima de 400 000,00 Kz (Projecto sob medida)</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] sm:text-[11px] font-mono tracking-wider text-white/60 uppercase">
                  Detalhes do seu negócio ou ideias para o website
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Precisamos de um website moderno para apresentar os nossos serviços em Luanda, com botão de WhatsApp directo e domínio profissional..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 focus:border-[#c7ff97] focus:outline-none text-white text-sm font-light transition-colors resize-none"
                />
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-4 px-6 py-3.5 rounded-full bg-[#c7ff97] text-[#050505] font-mono text-xs tracking-wider font-semibold hover:bg-[#b5f580] transition-colors cursor-pointer shadow-lg w-full sm:w-auto text-center"
                >
                  <span>ENVIAR SOLICITAÇÃO</span>
                  <GreenButtonPixel className="w-3.5 h-3.5 bg-black text-[#c7ff97]" />
                </button>

                <a
                  href="https://wa.me/244931475544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/15 hover:border-[#c7ff97] bg-white/[0.03] hover:bg-white/[0.08] text-white font-mono text-[11px] sm:text-xs tracking-wider transition-colors w-full sm:w-auto text-center"
                >
                  <span className="w-2 h-2 rounded-full bg-[#c7ff97]" />
                  <span>OU NO WHATSAPP (+244 931 475 544)</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
