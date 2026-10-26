import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppDropdown } from './WhatsAppDropdown';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F2E8DA]/95 backdrop-blur-md border-b border-[#820B16]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand / Logo - Organic native integration */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#820B16] flex items-center justify-center p-1 shadow-sm transition-transform group-hover:scale-105">
            <img
              src="/public/assets/aistudio/c270a422-2482-4c5a-b50d-fa62e61ff876_a9bf5fc4.jpeg"
              alt="Símbolo Essenza Estúdio"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#820B16] leading-none">
              ESSENZA
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#49372F]/75 font-semibold mt-0.5">
              ESTÚDIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <a
            href="#comparativo"
            className="text-xs uppercase tracking-wider font-semibold text-[#49372F] hover:text-[#820B16] transition-colors"
          >
            Economia & Valores
          </a>
          <a
            href="#portfolio"
            className="text-xs uppercase tracking-wider font-semibold text-[#49372F] hover:text-[#820B16] transition-colors"
          >
            Espaço dos Posts
          </a>
          <a
            href="#contato"
            className="text-xs uppercase tracking-wider font-semibold text-[#49372F] hover:text-[#820B16] transition-colors"
          >
            Atendimento
          </a>
        </nav>

        {/* WhatsApp Dropdown */}
        <div className="flex items-center gap-2">
          <WhatsAppDropdown buttonText="Falar no WhatsApp" variant="compact" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#820B16] md:hidden hover:bg-[#E3D1BD] transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F2E8DA] border-b border-[#820B16]/20 px-4 py-3 space-y-2">
          <a
            href="#comparativo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#49372F]"
          >
            Economia & Valores
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#49372F]"
          >
            Espaço dos Posts
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#49372F]"
          >
            Atendimento (Brandão & Santos)
          </a>
        </div>
      )}
    </header>
  );
}
