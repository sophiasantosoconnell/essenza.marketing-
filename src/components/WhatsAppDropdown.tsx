import { useState, useRef, useEffect } from 'react';
import { MessageCircle, ChevronDown, Check, Sparkles, ExternalLink } from 'lucide-react';
import { ATTENDANTS, Attendant, getWhatsAppUrl } from '../types';

interface WhatsAppDropdownProps {
  buttonText?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'compact';
  customMessage?: string;
  className?: string;
}

export function WhatsAppDropdown({
  buttonText = 'Falar no WhatsApp',
  variant = 'primary',
  customMessage,
  className = '',
}: WhatsAppDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-[#E3D1BD] text-[#49372F] hover:bg-[#D4BEA5] border border-[#49372F]/15 shadow-sm';
      case 'outline':
        return 'bg-transparent text-[#820B16] border-2 border-[#820B16] hover:bg-[#820B16] hover:text-[#F2E8DA]';
      case 'compact':
        return 'bg-[#820B16] text-[#F2E8DA] hover:bg-[#680710] px-3.5 py-2 text-xs font-semibold';
      case 'primary':
      default:
        return 'bg-[#820B16] text-[#F2E8DA] hover:bg-[#680710] shadow-md shadow-[#820B16]/20 text-sm';
    }
  };

  return (
    <div className={`relative z-30 inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Trigger: Click to open choice between Brandão and Santos */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`flex items-center justify-center gap-2 font-medium transition-transform duration-200 hover:-translate-y-0.5 px-5 py-3 rounded-full cursor-pointer shadow-md ${getVariantStyles()}`}
        title="Escolher entre Atendente Brandão ou Santos"
      >
        <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-500/20" />
        <span className="font-semibold tracking-wide">{buttonText}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 opacity-90 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Menu Suspenso (Dropdown com Brandão e Santos) */}
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 mt-2.5 w-80 rounded-2xl bg-[#F2E8DA] border-2 border-[#820B16] shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="p-3.5 bg-[#820B16] text-[#F2E8DA]">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-bold text-[#F2E8DA]">
                Com quem deseja falar?
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Online agora
              </span>
            </div>
            <p className="text-[11px] text-[#E3D1BD] mt-1">
              Escolha uma de nossas atendentes para iniciar:
            </p>
          </div>

          <div className="p-2 space-y-2">
            {ATTENDANTS.map((attendant) => (
              <a
                key={attendant.id}
                href={getWhatsAppUrl(attendant.phone, attendant.name, customMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group w-full p-3 rounded-xl text-left transition-all border border-[#820B16]/20 hover:border-[#820B16] bg-white hover:bg-[#FAF6F0] flex items-center justify-between shadow-2xs hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-[#820B16] text-[#F2E8DA] group-hover:scale-105 transition-transform">
                    {attendant.avatarLetter}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-bold text-sm text-[#49372F] group-hover:text-[#820B16] transition-colors">
                      <span>{attendant.name}</span>
                    </div>
                    <div className="text-xs text-[#820B16] font-semibold mt-0.5">
                      {attendant.formattedPhone}
                    </div>
                    <div className="text-[11px] text-[#49372F]/70 mt-0.5">
                      {attendant.role}
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-[#820B16]/10 text-[#820B16] group-hover:bg-[#820B16] group-hover:text-[#F2E8DA] transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          <div className="p-2 bg-[#E3D1BD]/50 border-t border-[#820B16]/15 text-center">
            <span className="text-[10px] text-[#49372F]/75 font-medium">
              Atendimento rápido • Sem compromisso
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
