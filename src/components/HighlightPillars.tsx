import {
  Home,
  Flag,
  DollarSign,
  Image as ImageIcon,
  Palette,
  Send,
} from 'lucide-react';

const HIGHLIGHTS = [
  {
    title: 'INÍCIO',
    href: '#',
    icon: Home,
    bgClass: 'bg-[#820B16]',
    iconClass: 'text-[#F2E8DA]',
  },
  {
    title: 'SERVIÇOS',
    href: '#comparativo',
    icon: Flag,
    bgClass: 'bg-[#F2E8DA]',
    iconClass: 'text-[#820B16]',
  },
  {
    title: 'ECONOMIA',
    href: '#comparativo',
    icon: DollarSign,
    bgClass: 'bg-[#49372F]',
    iconClass: 'text-[#F2E8DA]',
  },
  {
    title: 'POSTS',
    href: '#portfolio',
    icon: ImageIcon,
    bgClass: 'bg-[#E3D1BD]',
    iconClass: 'text-[#49372F]',
  },
  {
    title: 'DESIGN',
    href: '#portfolio',
    icon: Palette,
    bgClass: 'bg-[#F2E8DA]',
    iconClass: 'text-[#820B16]',
  },
  {
    title: 'CONTATO',
    href: '#contato',
    icon: Send,
    bgClass: 'bg-[#820B16]',
    iconClass: 'text-[#F2E8DA]',
  },
];

export function HighlightPillars() {
  return (
    <div className="py-4 border-y border-[#820B16]/10 bg-[#FAF6F0]/70">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 sm:gap-8 overflow-x-auto py-1 scrollbar-none">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                className="group flex flex-col items-center flex-shrink-0 transition-transform duration-200 hover:-translate-y-0.5"
              >
                {/* Compact double ring highlight circle */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-[#E3D1BD] border border-[#820B16]/25 group-hover:border-[#820B16] transition-colors flex items-center justify-center shadow-xs">
                  <div
                    className={`w-full h-full rounded-full flex items-center justify-center ${item.bgClass} shadow-inner`}
                  >
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 stroke-[1.4] ${item.iconClass}`} />
                  </div>
                </div>
                <span className="mt-1 text-[10px] font-serif font-semibold tracking-wider text-[#49372F] text-center">
                  {item.title}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
