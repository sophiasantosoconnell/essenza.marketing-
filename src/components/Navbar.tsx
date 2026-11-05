export function Navbar() {

  return (
    <header className="sticky top-0 z-40 bg-[#F2E8DA]/95 backdrop-blur-md border-b border-[#820B16]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-center relative">
        {/* Brand / Logo - Centered and slightly larger */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-12 h-12 rounded-xl bg-[#820B16] flex items-center justify-center p-1.5 shadow-sm transition-transform group-hover:scale-105">
            <img
              src="/logo.jpeg"
              alt="Símbolo Essenza Estúdio"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#820B16] leading-none">
              ESSENZA
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#49372F]/80 font-bold mt-1">
              ESTÚDIO
            </span>
          </div>
        </a>

        {/* Desktop Quick Nav Links aligned to the right or subtle */}
        <nav className="hidden lg:flex items-center gap-6 absolute right-6">
          <a
            href="#comparativo"
            className="text-xs uppercase tracking-wider font-semibold text-[#49372F] hover:text-[#820B16] transition-colors"
          >
            Valores
          </a>
          <a
            href="#portfolio"
            className="text-xs uppercase tracking-wider font-semibold text-[#49372F] hover:text-[#820B16] transition-colors"
          >
            Posts
          </a>
          <a
            href="#contato"
            className="text-xs uppercase tracking-wider font-semibold text-[#49372F] hover:text-[#820B16] transition-colors"
          >
            Atendimento
          </a>
        </nav>
      </div>

    </header>
  );
}
