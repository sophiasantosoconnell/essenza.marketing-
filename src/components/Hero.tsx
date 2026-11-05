import { CheckCircle2, ArrowDown } from 'lucide-react';
import { WhatsAppDropdown } from './WhatsAppDropdown';

export function Hero() {
  return (
    <section className="relative z-20 pt-8 pb-12 sm:pt-12 sm:pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          {/* Natural Brand Emblem in the exact red tone of the image */}
          <div className="inline-flex flex-col items-center justify-center">
            <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-3xl bg-[#820B16] p-2.5 sm:p-3 shadow-xl shadow-[#820B16]/30 border-2 border-[#E3D1BD]/40 transition-transform hover:scale-105 duration-300">
              <img
                src="/logo-640.png"
                srcSet="/logo-320.png 320w, /logo-640.png 640w, /logo-hd.png 1600w"
                sizes="(max-width: 640px) 140px, (max-width: 1024px) 150px, 160px"
                alt="Símbolo Oficial Essenza Estúdio"
                className="w-full h-full object-contain rounded-2xl logo-smooth"
              />
            </div>
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.25em] text-[#820B16] mt-3 block">
              ESSENZA
            </span>
            <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#49372F]/75 font-bold -mt-0.5">
              ESTÚDIO
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#49372F] leading-tight">
            Marketing que vende no Instagram da sua empresa{' '}
            <span className="text-[#820B16] italic">sem custos abusivos</span>
          </h1>

          {/* Direct value proposition */}
          <p className="text-sm sm:text-base text-[#49372F]/85 leading-relaxed max-w-2xl mx-auto font-normal">
            Não gaste <strong>R$ 5.000/mês</strong> com social media e designer, nem mais de{' '}
            <strong>R$ 6.000/mês</strong> com agências. Conosco você tem posts estratégicos de alto
            padrão por cerca de <strong>R$ 50,00 por post</strong> — e no máximo{' '}
            <strong>R$ 2.000,00</strong> para o mês inteiro.
          </p>

          {/* Quick Pill Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E3D1BD]/80 text-[#49372F] text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#820B16]" />
              R$ 50 por post
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E3D1BD]/80 text-[#49372F] text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#820B16]" />
              Mês inteiro: máx. R$ 2.000
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#820B16] text-[#F2E8DA] text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E3D1BD]" />
              Economia de até R$ 4.000/mês
            </div>
          </div>

          {/* Single Primary Call-to-Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <WhatsAppDropdown
              buttonText="Solicitar Orçamento no WhatsApp"
              variant="primary"
            />
            <a
              href="#comparativo"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#820B16] hover:underline px-3 py-2"
            >
              Ver comparativo de economia
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-[11px] text-[#49372F]/65">
            Atendimento direto com <strong>Brandão</strong> ou <strong>Santos</strong> pelo WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
