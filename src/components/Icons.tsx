import React from 'react';

/**
 * O glifo de pixel com 3 blocos característico da origem®
 */
export function PixelGlyph({ className = "w-2.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 9 13" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H4.5V4.33333H0V0Z" fill="currentColor" />
      <path d="M4.5 4.33333H9V8.66667H4.5V4.33333Z" fill="currentColor" />
      <path d="M0 8.66667H4.5V13H0V8.66667Z" fill="currentColor" />
    </svg>
  );
}

/**
 * Full origem brand logo with pixel glyph, logo text and subtitle
 */
export function OrigemLogo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className={`flex items-center justify-center ${light ? 'text-black' : 'text-white'}`}>
        <PixelGlyph className="w-2.5 h-3.5" />
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-[16px] font-semibold tracking-tight ${light ? 'text-black' : 'text-white'}`}>
          origem
        </span>
        <span className="hidden min-[420px]:inline w-px h-3.5 bg-white/20" />
        <span className="hidden min-[420px]:inline text-[11px] font-mono tracking-wider text-white/50 uppercase whitespace-nowrap">
          CRIAÇÃO DE WEBSITES
        </span>
      </div>
    </div>
  );
}

// Alias for backwards compatibility
export const TbdLogo = OrigemLogo;

/**
 * The distinctive bright lime green button pixel badge
 */
export function GreenButtonPixel({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <div className={`relative bg-[#c7ff97] rounded-[3px] flex items-center justify-center p-0.5 shrink-0 ${className}`}>
      <svg viewBox="0 0 8 8" fill="none" className="w-2.5 h-2.5">
        <rect x="1" y="1" width="2" height="2" fill="#050505" />
        <rect x="5" y="1" width="2" height="2" fill="#050505" />
        <rect x="5" y="5" width="2" height="2" fill="#050505" />
      </svg>
    </div>
  );
}

/**
 * Barcode pattern used across status rails and cards
 */
export function BarcodePattern({ className = "h-3 text-white/40" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-[2px] ${className}`}>
      <div className="w-[1.5px] h-full bg-current" />
      <div className="w-[1px] h-full bg-current" />
      <div className="w-[3px] h-full bg-current" />
      <div className="w-[1px] h-full bg-current" />
      <div className="w-[2px] h-full bg-current" />
      <div className="w-[4px] h-full bg-current" />
      <div className="w-[1px] h-full bg-current" />
      <div className="w-[2.5px] h-full bg-current" />
      <div className="w-[1px] h-full bg-current" />
      <div className="w-[3px] h-full bg-current" />
      <div className="w-[1.5px] h-full bg-current" />
      <div className="w-[2px] h-full bg-current" />
      <div className="w-[1px] h-full bg-current" />
      <div className="w-[3.5px] h-full bg-current" />
      <div className="w-[1px] h-full bg-current" />
    </div>
  );
}

/**
 * Dot matrix grid pattern
 */
export function DotGrid({ cols = 8, rows = 12, className = "" }: { cols?: number; rows?: number; className?: string }) {
  return (
    <div
      className={`grid gap-1.5 opacity-25 select-none pointer-events-none ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <div key={i} className="w-[2px] h-[2px] rounded-full bg-white/70" />
      ))}
    </div>
  );
}
