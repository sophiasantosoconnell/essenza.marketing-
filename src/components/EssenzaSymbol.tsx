interface EssenzaSymbolProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  variant?: 'monogram' | 'full';
}

export function EssenzaSymbol({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'text-[#F2E8DA]',
  variant = 'full',
}: EssenzaSymbolProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
  }[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      {/* Native Vector Monogram: E and S intertwined with 4-pointed star */}
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses} transition-transform duration-300`}
        aria-label="Símbolo Essenza Estúdio"
      >
        {/* Background glow or subtle circle if desired */}
        <defs>
          <linearGradient id="creamShine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9F0" />
            <stop offset="50%" stopColor="#F2E8DA" />
            <stop offset="100%" stopColor="#E3D1BD" />
          </linearGradient>
        </defs>

        {/* The Serif Letter 'E' */}
        {/* Main vertical stem of E */}
        <path
          d="M 68 28 L 84 28 L 84 132 L 68 132 Z"
          fill="url(#creamShine)"
        />
        {/* Top serif brackets on vertical stem */}
        <path
          d="M 58 28 L 94 28 L 94 34 L 84 34 L 84 38 L 74 38 L 68 34 L 58 34 Z"
          fill="url(#creamShine)"
        />
        {/* Bottom serif brackets on vertical stem */}
        <path
          d="M 58 132 L 94 132 L 94 126 L 84 126 L 84 122 L 74 122 L 68 126 L 58 126 Z"
          fill="url(#creamShine)"
        />
        {/* Top horizontal arm of E */}
        <path
          d="M 84 28 L 126 28 C 126 28 128 44 125 50 L 118 48 C 119 40 116 35 106 35 L 84 35 Z"
          fill="url(#creamShine)"
        />
        {/* Middle horizontal arm of E */}
        <path
          d="M 84 76 L 114 76 L 115 84 L 84 84 Z"
          fill="url(#creamShine)"
        />
        {/* Bottom horizontal arm of E */}
        <path
          d="M 84 125 L 108 125 C 118 125 124 121 126 110 L 132 112 C 129 122 124 132 108 132 L 84 132 Z"
          fill="url(#creamShine)"
        />

        {/* The Intertwined Script 'S' weaving through E */}
        <path
          d="M 124 54 C 114 38 98 42 80 52 C 60 64 54 82 66 98 C 76 112 102 116 118 124 C 132 132 128 144 116 146 C 96 150 78 136 74 120 L 66 122 C 72 144 94 154 118 152 C 138 150 144 132 130 118 C 116 104 84 100 76 86 C 68 72 74 58 92 48 C 108 40 120 44 128 52 Z"
          fill="url(#creamShine)"
        />

        {/* 4-Pointed Sparkle / Star next to top-right of E */}
        <path
          d="M 132 60 C 132 60 132 52 132 52 C 132 52 138 52 142 52 C 138 52 132 52 132 52 C 132 52 132 46 132 42 C 132 46 132 52 132 52 C 132 52 126 52 122 52 C 126 52 132 52 132 52 C 132 52 132 58 132 62 Z"
          stroke="url(#creamShine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="url(#creamShine)"
        />
        {/* Core spark dot */}
        <circle cx="132" cy="52" r="1.5" fill="#FFF9F0" />
      </svg>

      {/* Brand Typographic Text */}
      {showText && variant === 'full' && (
        <div className="text-center mt-1">
          <span
            className={`font-serif tracking-[0.22em] text-sm sm:text-base font-bold uppercase block ${textColor}`}
          >
            ESSENZA
          </span>
          <div className="flex items-center justify-center gap-1.5 mt-0.5">
            <span className="w-3 h-[1px] bg-current opacity-60" />
            <span
              className={`text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-light opacity-90 ${textColor}`}
            >
              ESTÚDIO
            </span>
            <span className="w-3 h-[1px] bg-current opacity-60" />
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Natural Integrated Badge combining the official logo seamlessly with the exact red tone #820B16
 */
export function EssenzaIntegratedLogo({
  className = '',
  size = 'md',
}: {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dims = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-24 h-24',
  }[size];

  return (
    <div
      className={`relative rounded-2xl bg-[#820B16] flex items-center justify-center overflow-hidden shadow-sm transition-transform duration-200 ${dims} ${className}`}
    >
      <img
        src="/public/assets/aistudio/c270a422-2482-4c5a-b50d-fa62e61ff876_a9bf5fc4.jpeg"
        alt="Essenza Estúdio"
        className="w-full h-full object-cover mix-blend-screen scale-110"
      />
    </div>
  );
}
