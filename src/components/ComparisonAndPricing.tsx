import { X, Check, MessageSquare } from 'lucide-react';
import { WhatsAppDropdown } from './WhatsAppDropdown';

export function ComparisonAndPricing() {
  return (
    <section id="comparativo" className="py-12 sm:py-16 bg-[#E3D1BD]/30 border-b border-[#820B16]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#820B16] font-bold">
            Comparativo de Custos & Economia
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#49372F] mt-1">
            Por que pagar mais se você pode ter qualidade e economizar?
          </h2>
          <p className="text-xs sm:text-sm text-[#49372F]/80 mt-2">
            Veja a diferença direta no orçamento da sua empresa:
          </p>
        </div>

        {/* 3 Compact Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {/* Card 1: Social Media + Designer */}
          <div className="bg-[#FAF6F0] rounded-2xl p-5 border border-[#49372F]/15 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-[10px] uppercase font-semibold text-[#49372F]/60 tracking-wider">
                Opção 01
              </span>
              <h3 className="font-serif font-bold text-lg text-[#49372F] mt-0.5">
                Social Media + Designer
              </h3>
              <p className="text-xs text-[#49372F]/70 mt-1 mb-4">
                2 profissionais contratados em regime fixo ou CLT.
              </p>

              <div className="p-3 rounded-xl bg-white/70 border border-[#49372F]/10 mb-4 text-center">
                <span className="text-[11px] text-[#49372F]/70 block">Gasto mensal</span>
                <span className="text-2xl font-bold text-[#49372F]">R$ 5.000<span className="text-xs font-normal">/mês</span></span>
                <span className="text-[10px] text-red-700 block mt-0.5">+ encargos trabalhistas</span>
              </div>

              <ul className="space-y-2 text-xs text-[#49372F]/80">
                <li className="flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Custo fixo elevado todo mês</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Necessidade de gerenciar 2 pessoas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Agência de Marketing */}
          <div className="bg-[#FAF6F0] rounded-2xl p-5 border border-[#49372F]/15 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-[10px] uppercase font-semibold text-[#49372F]/60 tracking-wider">
                Opção 02
              </span>
              <h3 className="font-serif font-bold text-lg text-[#49372F] mt-0.5">
                Agência de Marketing
              </h3>
              <p className="text-xs text-[#49372F]/70 mt-1 mb-4">
                Contratos longos de fidelidade (6 a 12 meses).
              </p>

              <div className="p-3 rounded-xl bg-white/70 border border-[#49372F]/10 mb-4 text-center">
                <span className="text-[11px] text-[#49372F]/70 block">Gasto mensal</span>
                <span className="text-2xl font-bold text-[#49372F]">Acima de R$ 6.000<span className="text-xs font-normal">/mês</span></span>
                <span className="text-[10px] text-red-700 block mt-0.5">+ multas contratuais</span>
              </div>

              <ul className="space-y-2 text-xs text-[#49372F]/80">
                <li className="flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Taxas caras e processos burocráticos</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Atendimento distante e demorado</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Essenza Estúdio - Destaque */}
          <div className="bg-[#820B16] text-[#F2E8DA] rounded-2xl p-5 border-2 border-[#E3D1BD] flex flex-col justify-between shadow-lg relative">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#E3D1BD]">
                  Melhor Escolha
                </span>
                <span className="w-6 h-6 rounded-full bg-[#E3D1BD] text-[#820B16] flex items-center justify-center text-[10px] font-bold">
                  ES
                </span>
              </div>
              <h3 className="font-serif font-bold text-xl text-[#F2E8DA] mt-0.5">
                Essenza Estúdio
              </h3>
              <p className="text-xs text-[#E3D1BD]/90 mt-1 mb-4">
                Posts estratégicos que atraem clientes reais.
              </p>

              <div className="p-3 rounded-xl bg-black/20 border border-white/15 mb-4 text-center">
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-xs text-[#E3D1BD]">Por post:</span>
                  <span className="text-lg font-bold text-white">~R$ 50,00</span>
                </div>
                <div className="border-t border-white/10 mt-1.5 pt-1.5">
                  <span className="text-[11px] text-[#E3D1BD] block">Mês inteiro de posts:</span>
                  <span className="text-2xl font-extrabold text-[#F2E8DA]">Máx. R$ 2.000<span className="text-xs font-normal text-[#E3D1BD]">/mês</span></span>
                </div>
                <span className="inline-block mt-1 text-[10px] bg-emerald-900/70 text-emerald-200 px-2 py-0.5 rounded-full font-semibold">
                  Economize até R$ 4.000/mês
                </span>
              </div>

              <ul className="space-y-2 text-xs text-[#F2E8DA]/95">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#E3D1BD] flex-shrink-0 mt-0.5" />
                  <span>Cobrança por post (~R$ 50) ou teto de R$ 2.000</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#E3D1BD] flex-shrink-0 mt-0.5" />
                  <span>Foco em marketing e vendas para a sua empresa</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#E3D1BD] flex-shrink-0 mt-0.5" />
                  <span>Sem multas de fidelidade ou burocracia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Integrated Adicionais Banner (No redundant buttons, just a clear, elegant note) */}
        <div className="mt-6 p-4 rounded-2xl bg-[#FAF6F0] border border-[#820B16]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#820B16] text-[#F2E8DA] flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#820B16] uppercase tracking-wide">
                Serviços Adicionais (Gestão Completa do Instagram)
              </p>
              <p className="text-xs text-[#49372F]/80">
                Cuidar do seu perfil, stories diários, bio estratégica e tráfego pago: tudo negociável diretamente no WhatsApp com total flexibilidade.
              </p>
            </div>
          </div>
          <a
            href="#contato"
            className="text-xs font-semibold text-[#820B16] hover:underline whitespace-nowrap"
          >
            Falar com Atendentes ↘
          </a>
        </div>
      </div>
    </section>
  );
}
