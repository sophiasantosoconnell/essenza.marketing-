import { MessageCircle, ArrowUp } from 'lucide-react';
import { ATTENDANTS, getWhatsAppUrl } from '../types';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#49372F] text-[#F2E8DA] pt-10 pb-8 border-t-4 border-[#820B16]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#F2E8DA]/15 items-center">
          {/* Brand & Symbol (Natural seamless integration) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#820B16] p-1.5 flex items-center justify-center shadow-md">
                <img
                  src="/public/assets/aistudio/c270a422-2482-4c5a-b50d-fa62e61ff876_a9bf5fc4.jpeg"
                  alt="Essenza Estúdio Símbolo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-[#F2E8DA] block">
                  ESSENZA
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E3D1BD] font-medium">
                  ESTÚDIO • MARKETING
                </span>
              </div>
            </div>

            <p className="text-xs text-[#F2E8DA]/75 leading-relaxed">
              Posts profissionais focados em marketing para Instagram. Economia real de até R$ 4.000/mês
              para o seu negócio.
            </p>
          </div>

          {/* Attendants Contact (Brandão and Santos) */}
          <div className="md:col-span-7 space-y-2">
            <p className="text-[11px] uppercase tracking-wider font-bold text-[#E3D1BD]">
              Escolha com quem deseja iniciar o atendimento:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ATTENDANTS.map((attendant) => (
                <a
                  key={attendant.id}
                  href={getWhatsAppUrl(attendant.phone, attendant.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#820B16]/50 hover:bg-[#820B16] border border-[#E3D1BD]/20 hover:border-[#E3D1BD] transition-all flex items-center justify-between group"
                >
                  <div>
                    <p className="text-xs font-semibold text-[#F2E8DA] group-hover:text-white">
                      {attendant.name}
                    </p>
                    <p className="text-[11px] text-[#E3D1BD]">{attendant.formattedPhone}</p>
                  </div>
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex items-center justify-between text-[11px] text-[#F2E8DA]/60">
          <p>© {new Date().getFullYear()} Essenza Estúdio. Todos os direitos reservados.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#E3D1BD] hover:text-white transition-colors"
          >
            Voltar ao topo
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
