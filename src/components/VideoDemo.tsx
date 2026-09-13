import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GreenButtonPixel, BarcodePattern } from './Icons';

export function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <section className="w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="rounded-[22px] sm:rounded-[36px] bg-[#0c0c0c] border border-white/10 p-5 sm:p-10 lg:p-12">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-white/50 uppercase mb-3">
                <GreenButtonPixel className="w-2.5 h-2.5" />
                <span>DEMONSTRAÇÃO PRÁTICA</span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl xs:text-3xl sm:text-5xl font-light tracking-tight text-white"
              >
                Veja a experiência e a velocidade dos websites que criamos.
              </motion.h2>
            </div>

            <p className="text-white/60 font-light text-sm sm:text-base lg:text-lg max-w-md">
              Design contemporâneo, tempo de carregamento instantâneo em conexões de Angola e integração com WhatsApp.
            </p>
          </div>

          {/* Video Preview Card with Play Trigger */}
          <div
            onClick={() => setIsPlaying(true)}
            className="group relative rounded-[18px] sm:rounded-[28px] overflow-hidden min-h-[280px] xs:min-h-[340px] sm:min-h-[500px] border border-white/10 cursor-pointer flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Background image & poster */}
            <img
              src="https://framerusercontent.com/images/3LSwO5UFIrRfeyxCxrzPpm4zXhA.jpg"
              alt="Prévia da demonstração do sistema em execução"
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-115 group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />

            {/* Top Bar inside Video Preview */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-mono tracking-wider text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff97] animate-pulse" />
                <span>DEMO 02:14</span>
              </div>

              <BarcodePattern className="h-3 text-white/70 hidden xs:block" />
            </div>

            {/* Center: Glowing Play Button */}
            <div className="relative z-10 my-auto mx-auto py-6">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#c7ff97] text-[#050505] flex items-center justify-center shadow-[0_0_40px_rgba(199,255,151,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(199,255,151,0.6)] transition-all duration-300">
                <span className="text-xl sm:text-3xl ml-1">▶</span>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[10px] sm:text-[11px] font-mono text-white/80 tracking-wider">
              <span className="uppercase">ASSISTA AO FLUXO DO SISTEMA EM AÇÃO</span>
              <span className="text-[#c7ff97] group-hover:underline">CLIQUE PARA ASSISTIR</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsPlaying(false)}
          >
            <div
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-[#c7ff97] hover:text-black transition-colors"
                aria-label="Close video"
              >
                ✕
              </button>

              <video
                src="https://framerusercontent.com/assets/ono5JQvooaQsCkeVm9BTMZMMA.mp4"
                controls
                autoPlay
                className="w-full aspect-video object-contain bg-black"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
