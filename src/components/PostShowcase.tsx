import { useState } from 'react';
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Maximize2,
  Upload,
  Sparkles,
  X,
} from 'lucide-react';

interface PostSlot {
  id: number;
  label: string;
  title: string;
  niche: string;
  strategy: string;
  caption: string;
  likes: string;
  comments: string;
  imageUrl?: string;
  gradient: string;
  defaultVisual: {
    tag: string;
    headline: string;
    subline: string;
    ctaText: string;
  };
}

const DEFAULT_POSTS: PostSlot[] = [
  {
    id: 1,
    label: 'Espaço 01',
    title: 'Autoridade & Agendamento',
    niche: 'Clínica & Estética',
    strategy: 'Gera confiança imediata, explica procedimento e direciona para agendamento.',
    caption: '✨ O cuidado que realça sua beleza natural. Agende sua consulta no direct!',
    likes: '1.248',
    comments: '84',
    gradient: 'from-[#820B16] via-[#680710] to-[#49372F]',
    defaultVisual: {
      tag: 'PROCEDIMENTO EXCLUSIVO',
      headline: 'A beleza dos resultados naturais',
      subline: 'Protocolo de alta precisão desenhado para a sua harmonia.',
      ctaText: 'Reserve sua vaga na bio ↗',
    },
  },
  {
    id: 2,
    label: 'Espaço 02',
    title: 'Desejo Visual & Vendas',
    niche: 'Gastronomia & Cafés',
    strategy: 'Fotografia apetitosa e chamada para visitas no estabelecimento.',
    caption: '☕ Grãos selecionados, torra artesanal e a textura perfeita. Seu momento especial do dia!',
    likes: '2.105',
    comments: '136',
    gradient: 'from-[#49372F] via-[#5A4339] to-[#820B16]',
    defaultVisual: {
      tag: 'MENU DA SEMANA',
      headline: 'O café que acolhe a sua rotina',
      subline: 'Notas aveludadas de chocolate e caramelo em cada xícara.',
      ctaText: 'Venha nos visitar hoje ☕',
    },
  },
  {
    id: 3,
    label: 'Espaço 03',
    title: 'Lançamento & Marca',
    niche: 'Moda & Varejo',
    strategy: 'Construção de desejo para esgotar estoques de coleções.',
    caption: 'Atemporalidade em cada costura. Nova coleção cápsula disponível.',
    likes: '1.870',
    comments: '92',
    gradient: 'from-[#E3D1BD] via-[#D4BEA5] to-[#FAF6F0]',
    defaultVisual: {
      tag: 'EDIÇÃO LIMITADA',
      headline: 'Sofisticação que nunca passa despercebida',
      subline: 'Tecidos nobres e caimento impecável para todas as ocasiões.',
      ctaText: 'Peça seu catálogo exclusivo ✨',
    },
  },
  {
    id: 4,
    label: 'Espaço 04',
    title: 'Quebra de Objeções',
    niche: 'Serviços & B2B',
    strategy: 'Mostra o retorno financeiro do cliente e direciona para o WhatsApp.',
    caption: 'Quanto custa adiar o crescimento da sua empresa? Veja como atrair clientes.',
    likes: '942',
    comments: '77',
    gradient: 'from-[#820B16] via-[#9B1220] to-[#49372F]',
    defaultVisual: {
      tag: 'CASO REAL DE SUCESSO',
      headline: 'Atraia clientes qualificados pelo Instagram',
      subline: 'O método comprovado que alinha estética e persuasão.',
      ctaText: 'Fale com nosso consultor 💬',
    },
  },
];

export function PostShowcase() {
  const [posts, setPosts] = useState<PostSlot[]>(DEFAULT_POSTS);
  const [activeModalPost, setActiveModalPost] = useState<PostSlot | null>(null);

  const handleImageUpload = (postId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPosts((prev) =>
          prev.map((p) => (p.id === postId ? { ...p, imageUrl: result } : p))
        );
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 bg-[#F2E8DA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E3D1BD] text-xs font-bold text-[#820B16] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            4 ESPAÇOS PARA POSTS
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#49372F]">
            Espaço reservado para o trabalho com os posts
          </h2>
          <p className="text-xs sm:text-sm text-[#49372F]/75 mt-1">
            Visual de alta qualidade com estratégia comercial pensada para o seu segmento.
          </p>
        </div>

        {/* 4 Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {posts.map((post) => {
            const isLightBg = post.id === 3 && !post.imageUrl;
            return (
              <div
                key={post.id}
                className="bg-[#FAF6F0] rounded-2xl border border-[#820B16]/20 overflow-hidden shadow-xs flex flex-col justify-between"
              >
                {/* Header label */}
                <div className="px-3 py-2 bg-[#E3D1BD]/60 border-b border-[#820B16]/10 flex items-center justify-between text-[10px]">
                  <span className="font-bold text-[#820B16] uppercase tracking-wider">
                    {post.label}
                  </span>
                  <span className="text-[#49372F]/70 font-medium">{post.niche}</span>
                </div>

                {/* Instagram Post Image Mockup */}
                <div className="p-2.5">
                  <div className="relative aspect-square rounded-xl overflow-hidden border border-[#49372F]/15 group">
                    {post.imageUrl ? (
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-full h-full p-3.5 flex flex-col justify-between bg-gradient-to-br ${post.gradient} ${
                          isLightBg ? 'text-[#49372F]' : 'text-[#F2E8DA]'
                        } select-none`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[8px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded ${
                              isLightBg
                                ? 'bg-[#820B16] text-[#F2E8DA]'
                                : 'bg-black/30 text-[#E3D1BD]'
                            }`}
                          >
                            {post.defaultVisual.tag}
                          </span>
                          <span
                            className={`font-serif text-[11px] font-bold ${
                              isLightBg ? 'text-[#820B16]' : 'text-[#E3D1BD]'
                            }`}
                          >
                            ESSENZA
                          </span>
                        </div>

                        <div className="py-1">
                          <h4
                            className={`font-serif text-sm font-bold leading-tight ${
                              isLightBg ? 'text-[#49372F]' : 'text-white'
                            }`}
                          >
                            {post.defaultVisual.headline}
                          </h4>
                          <p
                            className={`text-[10px] mt-1 line-clamp-2 ${
                              isLightBg ? 'text-[#49372F]/75' : 'text-[#F2E8DA]/80'
                            }`}
                          >
                            {post.defaultVisual.subline}
                          </p>
                        </div>

                        <div
                          className={`text-[9px] font-semibold py-0.5 px-2 rounded text-center ${
                            isLightBg
                              ? 'bg-[#820B16]/10 text-[#820B16]'
                              : 'bg-white/20 text-[#F2E8DA]'
                          }`}
                        >
                          {post.defaultVisual.ctaText}
                        </div>
                      </div>
                    )}

                    {/* Quick Hover Controls */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 p-2">
                      <button
                        type="button"
                        onClick={() => setActiveModalPost(post)}
                        className="bg-[#F2E8DA] text-[#820B16] px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 shadow-sm"
                      >
                        <Maximize2 className="w-3 h-3" />
                        Ver
                      </button>

                      <label className="cursor-pointer bg-[#820B16] text-[#F2E8DA] px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 shadow-sm">
                        <Upload className="w-3 h-3" />
                        Trocar
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(post.id, e)}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Social metrics */}
                  <div className="pt-2 px-1 flex items-center justify-between text-[#49372F] text-[11px]">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 font-semibold text-[#820B16]">
                        <Heart className="w-3.5 h-3.5 fill-[#820B16]" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#49372F]/70">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <Bookmark className="w-3.5 h-3.5 text-[#49372F]/50" />
                  </div>
                </div>

                {/* Strategy footer */}
                <div className="px-3 py-2 bg-white/70 border-t border-[#820B16]/10 text-left">
                  <p className="font-serif font-bold text-xs text-[#49372F]">{post.title}</p>
                  <p className="text-[10px] text-[#49372F]/70 mt-0.5 line-clamp-2">
                    {post.strategy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalPost && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#F2E8DA] max-w-md w-full rounded-2xl border-2 border-[#820B16] p-5 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setActiveModalPost(null)}
              className="absolute top-3 right-3 p-1 rounded-full bg-[#E3D1BD] text-[#49372F] hover:bg-[#820B16] hover:text-[#F2E8DA]"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[10px] font-bold uppercase tracking-wider text-[#820B16]">
              {activeModalPost.label} • {activeModalPost.niche}
            </span>
            <h3 className="font-serif text-xl font-bold text-[#49372F] mt-1">
              {activeModalPost.title}
            </h3>

            <div className="bg-white/80 p-3 rounded-xl border border-[#820B16]/15 my-3 text-xs">
              <p className="font-bold text-[#49372F] mb-1">Estratégia do Post:</p>
              <p className="text-[#49372F]/80 leading-relaxed">{activeModalPost.strategy}</p>
            </div>

            <div className="bg-[#E3D1BD]/50 p-3 rounded-xl text-xs text-[#49372F]/80 italic mb-4">
              "{activeModalPost.caption}"
            </div>

            <div className="text-center text-xs text-[#49372F]/70">
              Posts nesse formato por cerca de <strong>R$ 50,00 cada</strong>.
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
