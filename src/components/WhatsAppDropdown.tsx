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
  const [selectedAttendant, setSelectedAttendant] = useState<Attendant>(ATTENDANTS[0]);
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

  const handleOpenWhatsApp = (attendant: Attendant) => {
    const url = getWhatsAppUrl(attendant.phone, attendant.name, customMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

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
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Trigger Group: Main Action + Dropdown Toggle */}
      <div className="inline-flex items-stretch rounded-full overflow-hidden transition-transform duration-200 hover:-translate-y-0.5">
        <button
          type="button"
          onClick={() => handleOpenWhatsApp(selectedAttendant)}
          className={`flex items-center gap-2 font-medium transition-colors px-4 py-2.5 ${getVariantStyles()}`}
          title={`Iniciar conversa com ${selectedAttendant.name}`}
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-500/20" />
          <span className="font-semibold tracking-wide">{buttonText}</span>
          <span className="hidden sm:inline-block text-[11px] opacity-80 border-l border-current/25 pl-2">
            {selectedAttendant.name.replace('Atendente ', '')}
          </span>
        </button>

        {/* Dropdown chevron trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
          className={`px-2.5 border-l border-white/20 flex items-center justify-center transition-colors ${getVariantStyles()}`}
          title="Escolher atendente (Brandão ou Santos)"
        >
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Menu Suspenso (Dropdown) */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-[#F2E8DA] border-2 border-[#820B16]/25 shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="p-3 bg-[#E3D1BD]/80 border-b border-[#820B16]/15">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#820B16]">
                Escolha o atendimento
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-800 bg-emerald-100/90 px-1.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Disponível
              </span>
            </div>
          </div>

          <div className="p-1.5 space-y-1">
            {ATTENDANTS.map((attendant) => {
              const isCurrent = selectedAttendant.id === attendant.id;
              return (
                <div
                  key={attendant.id}
                  className={`group w-full p-2.5 rounded-xl text-left transition-all border flex items-center justify-between cursor-pointer ${
                    isCurrent
                      ? 'bg-[#820B16] text-[#F2E8DA] border-[#820B16] shadow-xs'
                      : 'bg-white/80 hover:bg-[#E3D1BD] text-[#49372F] border-transparent'
                  }`}
                  onClick={() => {
                    setSelectedAttendant(attendant);
                    handleOpenWhatsApp(attendant);
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-inner ${
                        isCurrent
                          ? 'bg-[#F2E8DA] text-[#820B16]'
                          : 'bg-[#820B16] text-[#F2E8DA]'
                      }`}
                    >
                      {attendant.avatarLetter}
                    </div>
                    <div>
                      <div className="flex items-center gap-1 font-semibold text-xs">
                        <span>{attendant.name}</span>
                        {isCurrent && (
                          <Check className="w-3 h-3 text-[#E3D1BD]" />
                        )}
                      </div>
                      <div
                        className={`text-[11px] ${
                          isCurrent ? 'text-[#E3D1BD]' : 'text-[#49372F]/70'
                        }`}
                      >
                        {attendant.formattedPhone}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-1.5 rounded-lg ${
                      isCurrent
                        ? 'bg-white/20 text-[#F2E8DA]'
                        : 'bg-[#820B16]/10 text-[#820B16]'
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
