import React, { useState } from 'react';

export function FloatingBadge() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 flex items-center gap-2 max-w-[calc(100vw-24px)]">
      <div className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#121212]/95 backdrop-blur-md border border-white/15 text-white shadow-2xl text-[10px] sm:text-[11px] font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff97] animate-pulse shrink-0" />
        <a
          href="https://wa.me/244931475544"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#c7ff97] transition-colors flex items-center gap-1.5 truncate"
        >
          <span className="font-semibold text-white">origem</span>
          <span className="text-white/40">·</span>
          <span className="text-[#c7ff97] font-medium">+244 931 475 544</span>
        </a>
        <button
          onClick={() => setVisible(false)}
          className="ml-1 text-white/40 hover:text-white transition-colors p-1"
          aria-label="Fechar aviso"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
