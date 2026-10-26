import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, ChevronUp, Send } from 'lucide-react';
import { ATTENDANTS, Attendant, getWhatsAppUrl } from '../types';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOpenAttendant = (attendant: Attendant) => {
    const url = getWhatsAppUrl(attendant.phone, attendant.name);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Popover Window */}
      {isOpen && (
        <div className="mb-2.5 w-72 rounded-2xl bg-[#F2E8DA] border-2 border-[#820B16] shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150">
          {/* Header */}
          <div className="bg-[#820B16] px-3.5 py-3 text-[#F2E8DA] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#E3D1BD] text-[#820B16] flex items-center justify-center font-bold text-xs">
                ES
              </div>
              <div>
                <p className="font-serif font-bold text-xs leading-none">Essenza Estúdio</p>
                <p className="text-[10px] text-[#E3D1BD] mt-0.5">Online no WhatsApp</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-[#F2E8DA]/80 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <div className="px-3 py-2 bg-[#E3D1BD]/60 text-[11px] text-[#49372F]/80 border-b border-[#820B16]/15">
            Falar diretamente com:
          </div>

          {/* Attendants List */}
          <div className="p-2 space-y-1.5">
            {ATTENDANTS.map((attendant) => (
              <button
                key={attendant.id}
                type="button"
                onClick={() => handleOpenAttendant(attendant)}
                className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#FAF6F0] border border-[#820B16]/15 transition-all flex items-center justify-between group shadow-2xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#820B16] text-[#F2E8DA] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {attendant.avatarLetter}
                  </div>
                  <div>
                    <p className="font-semibold text-xs text-[#49372F] group-hover:text-[#820B16]">
                      {attendant.name}
                    </p>
                    <p className="text-[10px] text-[#49372F]/70">{attendant.formattedPhone}</p>
                  </div>
                </div>
                <div className="p-1.5 rounded-lg bg-[#820B16]/10 text-[#820B16] group-hover:bg-[#820B16] group-hover:text-[#F2E8DA] transition-colors">
                  <Send className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#820B16] text-[#F2E8DA] shadow-lg hover:bg-[#680710] transition-transform hover:scale-105 border-2 border-[#E3D1BD] text-xs font-semibold"
        aria-label="Abrir WhatsApp"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <MessageCircle className="w-4 h-4 fill-white/20" />
        <span>WhatsApp</span>
        <ChevronUp
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  );
}
